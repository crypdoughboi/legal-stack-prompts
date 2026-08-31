/** Fixed-height header: logo lockup on the left, author link on the right. */
export function TopBar() {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="The Legal Stack Prompt Bank home">
        <span className="brand-logo-crop" aria-hidden="true">
          {/* Plain <img>: the mark is square art cropped by CSS, so the
              next/image wrapper would fight the crop. */}
          <img src="/legal-stack-logo.png" alt="" />
        </span>
        <span className="brand-copy">
          <strong>The Legal Stack</strong>
          <small>Prompt Bank</small>
        </span>
      </a>
      <div className="top-actions">
        <a
          className="about-link"
          href="https://www.linkedin.com/in/josh-benzadon/"
          target="_blank"
          rel="noreferrer"
        >
          By Josh Benzadon
        </a>
      </div>
    </header>
  );
}
