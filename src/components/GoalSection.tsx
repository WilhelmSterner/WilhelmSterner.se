import goals from "../data/Goals";

function GoalSection() {
  return (
    <>
      <section className="goals-section" id="mal" aria-labelledby="goals-title">
        <div>
          <p className="eyebrow">Målsättningar</p>
          <h2 id="goals-title">
            Att nå målen kräver hårt arbete över tid. För att ta mig dit krävs
            marginella förbättringar dag och in och dag ut.
            <br />
            <br /> -Jag tror jag kan lyckas
          </h2>
        </div>
        <ol className="goals-list">
          {goals.map((goal) => (
            <li key={goal}>{goal}</li>
          ))}
        </ol>
      </section>
    </>
  );
}

export default GoalSection;
