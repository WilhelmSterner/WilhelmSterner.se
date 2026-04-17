function SupportSection() {
  return (
    <section
      className="support-section"
      id="stotta"
      aria-labelledby="support-title"
    >
      <div className="support-copy">
        <p className="eyebrow">Stötta mig</p>
        <h2 id="support-title">Syns tillsammans med min satsning.</h2>
        <p className="support-lede">
          Jag söker partners som vill vara en del av resan mot nästa nivå och få
          synlighet i samband med träning, tävling och innehåll från säsongen.
        </p>
      </div>

      <div className="support-grid">
        <article className="support-block">
          <h3>Det här kan ni få</h3>
          <ul className="support-list">
            <li>
              Exponering på tävlingsdräkt, träningskläder eller utrustning
            </li>
            <li>
              Synlighet i sociala medier, bilder och uppdateringar från säsongen
            </li>
            <li>Närvaro på hemsidan som partner till min satsning</li>
          </ul>
        </article>

        <article className="support-block">
          <h3>Det här går stödet till</h3>
          <ul className="support-list">
            <li>Resor, läger och tävlingar under säsongen</li>
            <li>Material</li>
            <li>Möjligt att fokusera mer på skidåkningen</li>
          </ul>
        </article>
      </div>

      <div className="support-cta">
        <p>Vill du veta mer om hur vi kan samarbeta?</p>
        <a className="button" href="mailto:wilhelm.sterner@outlook.com">
          Hör av dig
        </a>
      </div>
    </section>
  );
}

export default SupportSection;
