import "./Docs.scss";

function Docs() {
  return (
    <main className="docs-main">
      <aside className="docs-aside">
        <h2>Table of Contents</h2>
        <ul>
          <a href="#introduction">
            <li>Introduction</li>
          </a>
          <a href="#installation">
            <li>Installation</li>
          </a>
          <a href="#usage">
            <li>Usage</li>
          </a>
          <a href="#examples">
            <li>Examples</li>
          </a>
          <a href="#contributing">
            <li>Contributing</li>
          </a>
          <a href="#license">
            <li>License</li>
          </a>
        </ul>
      </aside>
      <article className="docs-content">
        <h1>Documentation</h1>
        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            Welcome to the BEAT documentation. Here you will find everything you
            need to know about BEAT.
          </p>
        </section>
      </article>
    </main>
  );
}

export default Docs;
