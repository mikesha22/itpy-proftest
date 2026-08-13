import Link from "next/link";
export default function HomePage() {
  return (
    <main className="site-shell landing">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">Не школьная контрольная</div>
          <h1>Проверь свою готовность к ОГЭ и ЕГЭ по информатике</h1>
          <p className="hero-text">
            Небольшая анкета и 13 практических задач помогут оценить интерес к предмету,
            алгоритмическое мышление, внимательность и готовность к подготовке.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/test">Начать тест</Link>
          </div>
        </div>
        <aside className="hero-card">
          <div className="hero-card-number">6</div>
          <strong>отдельных показателей</strong>
          <p>Не один сомнительный процент, а понятный профиль сильных сторон и зон развития.</p>
          <div className="mini-bars" aria-hidden="true">
            <span style={{ width: "88%" }} />
            <span style={{ width: "72%" }} />
            <span style={{ width: "61%" }} />
          </div>
        </aside>
      </section>
      <section className="feature-grid">
        <article><b>01</b><h2>Честная анкета</h2><p>Интерес, учебные привычки и отношение к ошибкам.</p></article>
        <article><b>02</b><h2>Настоящие задачи</h2><p>Алгоритмы, логика, таблицы, простой код и поиск ошибок.</p></article>
        <article><b>03</b><h2>Два вывода</h2><p>Отдельная рекомендация по ОГЭ и перспектива будущего ЕГЭ.</p></article>
      </section>
      <section className="notice-card">
        <h2>Важно</h2>
        <p>
          Тест не измеряет интеллект и не определяет будущую профессию. Ошибки не означают,
          что информатика тебе не подходит. Результат показывает текущий интерес, привычки
          и выполнение небольшого набора заданий.
        </p>
      </section>

      <footer className="footer">© itpy, 2026</footer>
    </main>
  );
}
