"use client";

import { useMemo } from "react";
import { egeRecommendation, levelLabel, ogeRecommendation } from "@/lib/scoring";
import { profiles } from "@/lib/profiles";
import type { ResultPayload } from "@/lib/types";

const scoreItems: Array<{ key: keyof ResultPayload["scores"]; label: string }> = [
  { key: "interest", label: "Интерес к информатике" },
  { key: "logic", label: "Логика и алгоритмы" },
  { key: "attention", label: "Внимательность" },
  { key: "resilience", label: "Устойчивость к трудностям" },
  { key: "study", label: "Учебная готовность" },
  { key: "comfort", label: "Комфорт во время практики" },
];

function strongestAndGrowth(payload: ResultPayload) {
  const ranked = scoreItems
    .map((item) => ({ ...item, value: Number(payload.scores[item.key]) }))
    .sort((a, b) => b.value - a.value);

  return { strengths: ranked.slice(0, 2), growth: ranked.slice(-2).reverse() };
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
  const ranked = useMemo(() => strongestAndGrowth(payload), [payload]);
  const nickname = payload.participant.nickname.trim();

  return (
    <main className="site-shell result-shell">
      <header className="topbar print-hide">
        <div className="brand"><span>it</span>py <small>результат</small></div>
        <div className="result-actions">
          <button className="text-button" onClick={() => window.print()}>Сохранить как PDF</button>
          {onRestart && (
            <button className="button button-secondary restart-button" onClick={onRestart}>
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
          <div><span>Индекс ОГЭ</span><strong>{payload.scores.ogeIndex}</strong><small>из 100</small></div>
          <div><span>Перспектива ЕГЭ</span><strong>{payload.scores.egeIndex}</strong><small>из 100</small></div>
        </div>
      </section>

      <div className="result-layout">
        <section className="result-main">
          <article className="result-card">
            <h2>Что означает результат</h2>
            <p>{profile.student}</p>
          </article>

          <article className="recommendation-grid">
            <div className="result-card accent-card">
              <span className="card-kicker">ОГЭ</span>
              <h2>Рекомендация</h2>
              <p>{ogeRecommendation(payload.scores)}</p>
            </div>
            <div className="result-card">
              <span className="card-kicker">ЕГЭ</span>
              <h2>Перспектива</h2>
              <p>{egeRecommendation(payload.scores)}</p>
            </div>
          </article>

          <article className="result-card">
            <h2>Твои показатели</h2>
            <div className="score-list">
              {scoreItems.map((item) => {
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
                {ranked.strengths.map((item) => <li key={item.key}>{item.label}: {levelLabel(item.value)}</li>)}
              </ul>
            </div>
            <div>
              <h2>Что развивать</h2>
              <ul>
                {ranked.growth.map((item) => <li key={item.key}>{item.label}: {levelLabel(item.value)}</li>)}
              </ul>
            </div>
          </article>

          <article className="result-card next-step-card">
            <span className="card-kicker">Следующий шаг</span>
            <h2>{profile.nextStep}</h2>
            {payload.participant.interests.length > 0 && (
              <p>Тебя особенно заинтересовали: {payload.participant.interests.join(", ")}.</p>
            )}
          </article>
        </section>
      </div>

      <section className="result-disclaimer">
        Результат не определяет способности или будущую профессию. Он отражает текущее прохождение,
        интерес и учебные привычки. Итоговые пороги должны быть уточнены после пилотирования.
      </section>
    </main>
  );
}
