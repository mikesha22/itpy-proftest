"use client";

import { useMemo } from "react";
import { egeRecommendation, levelLabel, ogeRecommendation } from "@/lib/scoring";
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
          <div className="brand"><span>it</span>py <small>результат</small></div>
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
            <div><span>Индекс ОГЭ</span><strong>{payload.scores.ogeIndex}</strong><small>из 100</small></div>
            <div><span>Перспектива ЕГЭ</span><strong>{payload.scores.egeIndex}</strong><small>из 100</small></div>
          </div>
        </section>

        <div className="result-layout" style={{ gridTemplateColumns: "minmax(0, 1fr)" }}>
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
      </div>

      <section className={styles.pdfReport} aria-hidden="true">
        <article className={styles.pdfPage}>
          <header className={styles.pdfHeader}>
            <div className={styles.pdfBrand}><span>it</span>py</div>
            <div className={styles.pdfHeaderText}>
              <strong>Профориентационный тест</strong>
              <span>Персональный результат по информатике</span>
            </div>
            <div className={styles.pdfDate}>{completedDate}</div>
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

          <section className={styles.pdfExamGrid}>
            <article className={`${styles.pdfExamCard} ${styles.pdfExamAccent}`}>
              <div className={styles.pdfExamHead}>
                <div><span>ОГЭ</span><h2>Рекомендация</h2></div>
                <strong>{payload.scores.ogeIndex}</strong>
              </div>
              <p>{ogeRecommendation(payload.scores)}</p>
            </article>
            <article className={styles.pdfExamCard}>
              <div className={styles.pdfExamHead}>
                <div><span>ЕГЭ</span><h2>Перспектива</h2></div>
                <strong>{payload.scores.egeIndex}</strong>
              </div>
              <p>{egeRecommendation(payload.scores)}</p>
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
            <span>itpy · осознанный выбор информатики</span>
            <span>1 / 2</span>
          </footer>
        </article>

        <article className={styles.pdfPage}>
          <header className={styles.pdfSmallHeader}>
            <div className={styles.pdfBrand}><span>it</span>py</div>
            <div><strong>{displayName}</strong><span> · подробный разбор результата</span></div>
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
            <span className={styles.pdfKicker}>Персональный маршрут</span>
            <h2>{profile.nextStep}</h2>
            <ol>
              <li><b>Попробовать практику.</b><span>Пройти небольшой вводный блок по Python или решить несколько базовых задач ОГЭ.</span></li>
              <li><b>Сделать что-то своё.</b><span>Мини-игра, простая программа или небольшой сайт лучше показывают реальный интерес, чем один тест.</span></li>
              <li><b>Проверить учебный ритм.</b><span>Выделить две короткие практики в неделю и оценить, сохраняется ли желание продолжать.</span></li>
              <li><b>Вернуться к выбору.</b><span>Решение по ЕГЭ принимать после практического опыта и знакомства с программированием.</span></li>
            </ol>
          </section>

          <section className={styles.pdfInterests}>
            <span className={styles.pdfKicker}>Интересы внутри IT</span>
            <p>{interests}</p>
          </section>

          <section className={styles.pdfNotice}>
            <strong>Важно</strong>
            <p>
              Этот отчёт не измеряет интеллект и не определяет будущую профессию. Он отражает текущее
              прохождение, интерес, учебные привычки и выполнение небольшого набора заданий.
            </p>
          </section>

          <footer className={styles.pdfFooter}>
            <span>Результат сформирован на сайте itpy Proftest</span>
            <span>2 / 2</span>
          </footer>
        </article>
      </section>
    </main>
  );
}
