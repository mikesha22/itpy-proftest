"use client";

import { useMemo } from "react";
import { egeRecommendation, levelLabel, ogeRecommendation } from "@/lib/scoring";
import { isEgeOnlyGrade } from "@/lib/grades";
import { profiles } from "@/lib/profiles";
import {
  codeDescription,
  rankedScores,
  resultScoreItems,
  scoreDescription,
  scoreGrowthAdvice,
  type MainScoreKey,
} from "@/lib/resultDescriptions";
import type { ResultPayload } from "@/lib/types";
import styles from "./ResultView.module.css";

const TRIAL_LESSON_URL = "https://planerka.app/ilandroxy";

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Дата не указана";

  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

function gradeLabel(grade: string) {
  if (grade === "other") return "Другой класс";
  return `${grade} класс`;
}
function safeFilePart(value: string) {
  return value
    .trim()
    .replace(/[^\p{L}\p{N}_-]+/gu, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 40);
}
function PdfScoreCard({
  label,
  value,
  scoreKey,
}: {
  label: string;
  value: number;
  scoreKey: MainScoreKey;
}) {
  return (
    <article className={styles.pdfScoreCard}>
      <div className={styles.pdfScoreTop}>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
      <div className={styles.pdfScoreTrack}>
        <span style={{ width: `${value}%` }} />
      </div>
      <p>{scoreDescription(scoreKey, value)}</p>
    </article>
  );
}
export default function ResultView({
  payload,
  onRestart,
}: {
  payload: ResultPayload;
  shared?: boolean;
  onRestart?: () => void;
}) {
  const profile = profiles[payload.profileId];
  const egeOnly = isEgeOnlyGrade(payload.participant.grade);
  const egeCopy = egeRecommendation(payload.scores, payload.participant.grade);
  const ranked = useMemo(() => rankedScores(payload.scores), [payload.scores]);
  const strengths = ranked.slice(0, 2);
  const growth = ranked.slice(-2).reverse();
  const nickname = payload.participant.nickname.trim();
  const displayName = nickname || "Участник теста";
  const completedDate = formatDate(payload.completedAt);
  const interests = payload.participant.interests.length > 0
    ? payload.participant.interests.join(", ")
    : "Пока не выбраны";
  function printResult() {
    const previousTitle = document.title;
    const namePart = safeFilePart(displayName);
    document.title = `Результат_itpy_${namePart || "участник"}`;
    window.print();
    window.setTimeout(() => {
      document.title = previousTitle;
    }, 1200);
  }
  return (
    <main className="site-shell result-shell">
      <div className={styles.screenResult}>
        <header className="topbar print-hide">
          <div className={styles.screenActions}>
            <button className="text-button" onClick={printResult}>Сохранить красивый PDF</button>
            {onRestart && (
              <button className="button button-secondary" onClick={onRestart}>
                Пройти тест заново
              </button>
            )}
          </div>
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
        </section>
        <div className="result-layout" style={{ gridTemplateColumns: "minmax(0, 1fr)" }}>
          <section className="result-main">
            <article className="result-card">
              <h2>Что означает результат</h2>
              <p>{profile.student}</p>
            </article>
            <article
              className="recommendation-grid"
              style={egeOnly ? { gridTemplateColumns: "minmax(0, 1fr)" } : undefined}
            >
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
                <ul>
                  {strengths.map((item) => (
                    <li key={item.key}>{item.label}: {levelLabel(item.value)}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>Что развивать</h2>
                <ul>
                  {growth.map((item) => (
                    <li key={item.key}>{item.label}: {levelLabel(item.value)}</li>
                  ))}
                </ul>
              </div>
            </article>
            <article className="result-card next-step-card">
              <span className="card-kicker">Следующий шаг</span>
              <h2>Записаться на пробное занятие</h2>
              <a
                className="button button-primary"
                href={TRIAL_LESSON_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Записаться на пробное занятие
              </a>
              {payload.participant.interests.length > 0 && (
                <p>Тебя особенно заинтересовали: {payload.participant.interests.join(", ")}.</p>
              )}
            </article>
          </section>
        </div>
        <footer className="footer print-hide">© itpy, 2026</footer>
      </div>
      <section className={styles.pdfReport} aria-hidden="true">
        <article className={styles.pdfPage}>
          <header className={styles.pdfHeader}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4mm",
                minWidth: 0,
                flex: "1 1 auto",
              }}
            >
              {/* Фирменный квадратный логотип из public/branding */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/branding/itpy-logo.png"
                alt="itpy"
                width={512}
                height={512}
                loading="eager"
                style={{
                  display: "block",
                  width: "19mm",
                  height: "19mm",
                  flex: "0 0 19mm",
                  objectFit: "contain",
                }}
              />
              <div className={styles.pdfHeaderText}>
                <strong>Персональный результат</strong>
                <span>{egeOnly ? "Информатика · ЕГЭ" : "Информатика · ОГЭ · ЕГЭ"}</span>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                justifyItems: "end",
                gap: "1.5mm",
                marginLeft: "auto",
              }}
            >
              {/* Фирменная плашка с социальными сетями */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/branding/itpy-socials.png"
                alt="Социальные сети itpy"
                width={1200}
                height={300}
                loading="eager"
                style={{
                  display: "block",
                  width: "69mm",
                  height: "16mm",
                  objectFit: "contain",
                  objectPosition: "right center",
                }}
              />
              <div className={styles.pdfDate}>{completedDate}</div>
            </div>
          </header>
          <div className={styles.pdfHero}>
            <div className={styles.pdfEyebrow}>Результат для {displayName}</div>
            <h1>{profile.title}</h1>
            <p>{profile.lead}</p>
            <div className={styles.pdfMeta}>
              <span><b>Класс:</b> {gradeLabel(payload.participant.grade)}</span>
              <span><b>Опыт:</b> {payload.participant.experience}</span>
            </div>
          </div>
          <section className={styles.pdfMeaning}>
            <h2>Что означает результат</h2>
            <p>{profile.student}</p>
          </section>
          <section
            className={styles.pdfExamGrid}
            style={egeOnly ? { gridTemplateColumns: "1fr" } : undefined}
          >
            {!egeOnly && (
              <article className={`${styles.pdfExamCard} ${styles.pdfExamAccent}`}>
                <div className={styles.pdfExamHead}>
                  <div><span>ОГЭ</span><h2>Рекомендация</h2></div>
                  <strong>{payload.scores.ogeIndex}</strong>
                </div>
                <p>{ogeRecommendation(payload.scores)}</p>
              </article>
            )}
            <article className={`${styles.pdfExamCard} ${egeOnly ? styles.pdfExamAccent : ""}`}>
              <div className={styles.pdfExamHead}>
                <div><span>ЕГЭ</span><h2>{egeOnly ? "Рекомендация" : "Перспектива"}</h2></div>
                <strong>{payload.scores.egeIndex}</strong>
              </div>
              <p>{egeCopy}</p>
            </article>
          </section>
          <section className={styles.pdfScoreGrid}>
            {resultScoreItems.map((item) => (
              <PdfScoreCard
                key={item.key}
                label={item.shortLabel}
                value={Number(payload.scores[item.key])}
                scoreKey={item.key}
              />
            ))}
          </section>
          <footer className={styles.pdfFooter}>
            <span>© itpy, 2026</span>
            <span>1 / 2</span>
          </footer>
        </article>

        <article className={styles.pdfPage}>
          <header className={styles.pdfSmallHeader}>
            <div style={{ display: "flex", alignItems: "center", gap: "3mm", minWidth: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/branding/itpy-logo.png"
                alt="itpy"
                width={512}
                height={512}
                loading="eager"
                style={{
                  display: "block",
                  width: "14mm",
                  height: "14mm",
                  flex: "0 0 14mm",
                  objectFit: "contain",
                }}
              />
              <div>
                <strong>{displayName}</strong>
                <span> · подробный разбор результата</span>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/branding/itpy-socials.png"
              alt="Социальные сети itpy"
              width={1200}
              height={300}
              loading="eager"
              style={{
                display: "block",
                width: "61mm",
                height: "14mm",
                objectFit: "contain",
                objectPosition: "right center",
              }}
            />
          </header>
          <section className={styles.pdfTwoColumn}>
            <article className={`${styles.pdfInsightCard} ${styles.pdfStrengthCard}`}>
              <span className={styles.pdfKicker}>Сильные стороны</span>
              {strengths.map((item) => (
                <div className={styles.pdfInsightItem} key={item.key}>
                  <div><strong>{item.label}</strong><b>{item.value}</b></div>
                  <p>{scoreDescription(item.key, item.value)}</p>
                </div>
              ))}
            </article>
            <article className={styles.pdfInsightCard}>
              <span className={styles.pdfKicker}>Что стоит развивать</span>
              {growth.map((item) => (
                <div className={styles.pdfInsightItem} key={item.key}>
                  <div><strong>{item.label}</strong><b>{item.value}</b></div>
                  <p>{scoreGrowthAdvice(item.key)}</p>
                </div>
              ))}
            </article>
          </section>
          <section className={styles.pdfCodeCard}>
            <div>
              <span className={styles.pdfKicker}>Дополнительный показатель</span>
              <h2>Понимание программного кода</h2>
              <p>{codeDescription(payload.scores.code)}</p>
            </div>
            <strong>{payload.scores.code}</strong>
          </section>
          <section className={styles.pdfRouteCard}>
            <span className={styles.pdfKicker}>Следующий шаг</span>
            <h2>Записаться на пробное занятие</h2>
            <p className={styles.pdfTrialCopy}>Выбрать удобное время можно по ссылке:</p>
            <a
              className={styles.pdfTrialLink}
              href={TRIAL_LESSON_URL}
              target="_blank"
              rel="noreferrer"
            >
              planerka.app/ilandroxy
            </a>
          </section>
          <section className={styles.pdfInterests}>
            <span className={styles.pdfKicker}>Интересы внутри IT</span>
            <p>{interests}</p>
          </section>

          <section className={styles.pdfNotice}>
            <strong>Важно</strong>
            <p>
              Этот отчёт не измеряет интеллект и не является экзаменационной оценкой. Он отражает
              текущее прохождение, интерес, учебные привычки и выполнение небольшого набора заданий.
            </p>
          </section>
          <footer className={styles.pdfFooter}>
            <span>
              Результат сформирован на сайте{" "}
              <a
                href="https://itpy-proftest.vercel.app"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#1f6b57", fontWeight: 800, textDecoration: "none" }}
              >
                itpy-proftest.vercel.app
              </a>
            </span>
            <span>2 / 2</span>
          </footer>
        </article>
      </section>
    </main>
  );
}
