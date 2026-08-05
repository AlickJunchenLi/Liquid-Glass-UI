function App() {
  return (
    <main>
      <h1>Liquid Glass Selector</h1>

      <p>
        We are building an interactive glass selector step by step.
      </p>

      <section className="selector-stage">
        <div className="selector" aria-hidden="true" />

        <nav aria-label="Design stages">
          <button type="button">Explore</button>
          <button type="button">Design</button>
          <button type="button">Build</button>
          <button type="button">Launch</button>
        </nav>
      </section>
    </main>
  );
}

export default App; 