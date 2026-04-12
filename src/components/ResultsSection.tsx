import results from "../data/Results";

function ResultsSection() {
  return (
    <>
      <section
        className="results-section"
        id="resultat"
        aria-labelledby="results-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Resultat</p>
            <a
              className="button"
              href="https://www.fis-ski.com/DB/general/athlete-biography.html?sectorcode=CC&competitorid=252029&type=result"
              target="_blank"
            >
              Se alla
            </a>
          </div>
          <h2 id="results-title"></h2>
        </div>
        <div className="result-list">
          {results.map((result) => (
            <article className="result-row" key={result.label}>
              <p>{result.label}</p>
              <strong>{result.value}</strong>
              <span>{result.detail}</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default ResultsSection;
