const newsItems = [
  {
    date: "April 2026",
    title: "Off season",
    text: "Nu tar jag några veckor off season och lever lite ungdomsliv. Fokus på att ladda batterierna mentalt och fysiskt för att dra igång arbetet inför nästa säsong i Maj.",
  },
  {
    date: "Mars 2026",
    title: "Sista taget",
    text: "Nu återstår inte många tävlingar. Denna månad är det avslutning av Smart Energy Cup i Lycksele och därefter drar jag direkt vidare på SM i Umeå. Ni kan följa mig på expressen och SVT.",
  },
  {
    date: "Februari 2026",
    title: "U23 VM",
    text: "Månadens höjdpunkt är såklart U23 VM. Där tävlade jag i skate sprint och 20km skate masstart. In i mästerskapet hade jag sjukdomsproblem. Är väldigt nöjd med min prestation utifrån det och är en erfarenhet jag tar med mig in i framtiden.",
  },
];

function NewsSection() {
  return (
    <section className="news-section" id="nyheter" aria-labelledby="news-title">
      <div className="section-heading">
        <p className="eyebrow">Nyheter</p>
        <h2 id="news-title">Det senaste från satsningen.</h2>
      </div>
      <div className="news-list">
        {newsItems.map((item) => (
          <article className="news-row" key={`${item.date}-${item.title}`}>
            <p className="news-date">{item.date}</p>
            <div className="news-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default NewsSection;
