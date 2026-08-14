"use client";

import { useMemo, useState } from "react";
import { isEgeOnlyGrade } from "@/lib/grades";
import { profiles } from "@/lib/profiles";
import { rankedScores, resultScoreItems } from "@/lib/resultDescriptions";
import { egeRecommendation, levelLabel, ogeRecommendation } from "@/lib/scoring";
import type { ResultPayload } from "@/lib/types";
import styles from "./ResultView.module.css";

const TRIAL_LESSON_URL = "https://planerka.app/ilandroxy";

function safeFilePart(value: string) {
  return value
    .trim()
    .replace(/[^\p{L}\p{N}_-]+/gu, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 40);
}

function downloadBlob(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function ResultView({
  payload,
  onRestart,
}: {
  payload: ResultPayload;
  shared?: boolean;
  onRestart?: () => void;
}) {
  const [pdfState, setPdfState] = useState<"idle" | "loading">("idle");
  const [pdfError, setPdfError] = useState("");
  const profile = profiles[payload.profileId];
  const egeOnly = isEgeOnlyGrade(payload.participant.grade);
  const egeCopy = egeRecommendation(payload.scores, payload.participant.grade);
  const ranked = useMemo(() => rankedScores(payload.scores), [payload.scores]);
  const strengths = ranked.slice(0, 2);
  const growth = ranked.slice(-2).reverse();
  const nickname = payload.participant.nickname.trim();
  const displayName = nickname || "Участник теста";

  async function savePdf() {
    if (pdfState === "loading") return;
    setPdfState("loading");
    setPdfError("");
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const mobilePreview = isMobile ? window.open("", "_blank") : null;

    if (mobilePreview) {
      mobilePreview.document.title = "Готовим PDF…";
      mobilePreview.document.body.textContent = "Готовим результат в PDF…";
    }

    try {
      const response = await fetch("/api/result-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("PDF request failed");
      const blob = await response.blob();
      const namePart = safeFilePart(displayName) || "участник";
      const fileName = `Результат_itpy_${namePart}.pdf`;

      if (mobilePreview) {
        const previewUrl = URL.createObjectURL(blob);
        mobilePreview.location.href = previewUrl;
        window.setTimeout(() => URL.revokeObjectURL(previewUrl), 60000);
        return;
      }

      downloadBlob(blob, fileName);
    } catch (reason) {
      console.error(reason);
      mobilePreview?.close();
      setPdfError("Не удалось подготовить PDF. Попробуй ещё раз.");
    } finally {
      setPdfState("idle");
    }
  }

  return (
    <main className="site-shell result-shell">
      <header className="topbar">
        <div className={styles.screenActions}>
          <button className="text-button" type="button" onClick={savePdf} disabled={pdfState === "loading"}>
            {pdfState === "loading" ? "Готовим PDF…" : "Скачать красивый PDF"}
          </button>
          {onRestart && (
            <button className="button button-secondary" onClick={onRestart}>
              Пройти тест заново
            </button>
          )}
        </div>
        {pdfError && <p className={styles.pdfError} role="alert">{pdfError}</p>}
      </header>

      <section className="result-hero">
        <div className="eyebrow">{nickname ? `${nickname}, твой профиль` : "Твой профиль"}</div>
        <h1>{profile.title}</h1>
        <p>{profile.lead}</p>
        <div className="index-row">
          {!egeOnly && (
            <div><span>Индекс ОГЭ</span><strong>{payload.scores.ogeIndex}</strong><small>из 100</small></div>
          )}
          <div><span>{egeOnly ? "Индекс ЕГЭ" : "Перспектива ЕГЭ"}</span><strong>{payload.scores.egeIndex}</strong><small>из 100</small></div>
        </div>
        <div className={styles.indexNote} role="note">
          <strong>Важно: это не экзаменационные баллы</strong>
          <p>
            Показанные индексы — не прогноз баллов на ОГЭ или ЕГЭ и не оценка знаний.
            Это внутренние показатели по шкале от 1 до 100, которые учитывают результаты
            заданий, текущие навыки, интерес к информатике, вовлечённость, учебные привычки
            и отношение к трудностям. Они помогают ориентировочно понять стартовую точку
            для подготовки, но не показывают будущий результат на реальном экзамене.
          </p>
        </div>
      </section>

      <div className="result-layout" style={{ gridTemplateColumns: "minmax(0, 1fr)" }}>
        <section className="result-main">
          <article className="result-card">
            <h2>Что означает результат</h2>
            <p>{profile.student}</p>
          </article>

          <article className="recommendation-grid" style={egeOnly ? { gridTemplateColumns: "minmax(0, 1fr)" } : undefined}>
            {!egeOnly && (
              <div className="result-card accent-card">
                <span className="card-kicker">ОГЭ</span>
                <h2>Рекомендация</h2>
                <p>{ogeRecommendation(payload.scores)}</p>
              </div>
            )}
            <div className={`result-card ${egeOnly ? "accent-card" : ""}`}>
              <span className="card-kicker">ЕГЭ</span>
              <h2>{egeOnly ? "Рекомендация" : "Перспектива"}</h2>
              <p>{egeCopy}</p>
            </div>
          </article>

          <article className="result-card">
            <h2>Твои показатели</h2>
            <div className="score-list">
              {resultScoreItems.map((item) => {
                const value = Number(payload.scores[item.key]);
                return (
                  <div className="score-row" key={item.key}>
                    <div className="score-head"><span>{item.label}</span><b>{value}</b></div>
                    <div className="score-track"><span style={{ width: `${value}%` }} /></div>
                    <small>{levelLabel(value)}</small>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="result-card two-column-copy">
            <div>
              <h2>Сильные стороны</h2>
              <ul>{strengths.map((item) => <li key={item.key}>{item.label}: {levelLabel(item.value)}</li>)}</ul>
            </div>
            <div>
              <h2>Что развивать</h2>
              <ul>{growth.map((item) => <li key={item.key}>{item.label}: {levelLabel(item.value)}</li>)}</ul>
            </div>
          </article>

          <article className="result-card next-step-card">
            <span className="card-kicker">Следующий шаг</span>
            <h2>Записаться на пробное занятие</h2>
            <a className="button button-primary" href={TRIAL_LESSON_URL} target="_blank" rel="noopener noreferrer">
              Записаться на пробное занятие
            </a>
            {payload.participant.interests.length > 0 && (
              <p>Тебя особенно заинтересовали: {payload.participant.interests.join(", ")}.</p>
            )}
          </article>
        </section>
      </div>

      <footer className="footer">© itpy, 2026</footer>
    </main>
  );
}
