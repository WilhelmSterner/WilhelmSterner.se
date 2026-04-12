import competitions from "../data/Competitions";
function ScheduleSection() {
  return (
    <>
      <section
        className="schedule-section"
        id="tavlingar"
        aria-labelledby="schedule-title"
      >
        <div className="section-heading">
          <p className="eyebrow">Tävlingar framåt</p>
          <h2 id="schedule-title"></h2>
        </div>
        <div className="schedule-list">
          {competitions.map((competition) => (
            <article
              className="schedule-row"
              key={`${competition.date}-${competition.name}`}
            >
              <time>{competition.date}</time>
              <strong>{competition.name}</strong>
              <span>{competition.place}</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default ScheduleSection;
