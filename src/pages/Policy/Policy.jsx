import "./Policy.scss";

function Policy() {
  return (
    <main className="policy-main">
      <h1 className="policy-headline">BEAT Policy</h1>
      <ul className="policy-list">
        <li className="policy-list-item">
          <h2>1. Introduction</h2>
          <p>
            Welcome to BEAT. By using our platform, you agree to follow the
            policies outlined below.
          </p>
        </li>
        <li className="policy-list-item">
          <h2>2. Usage Policy</h2>
          <p>
            BEAT provides technical indicators for financial analysis. These
            indicators are for informational and educational purposes only and
            should not be considered financial advice.
          </p>
        </li>
        <li className="policy-list-item">
          <h2>3. Data and Content Policy</h2>
          <p>
            All technical indicators shared on BEAT are either open-source or
            user-submitted. Users are responsible for ensuring they have the
            right to share any content they upload.
          </p>
        </li>
        <li className="policy-list-item">
          <h2>4. Privacy Policy</h2>
          <p>
            We respect your privacy. BEAT does not collect personal data without
            user consent. However, analytics may be used to improve the
            platform.
          </p>
        </li>
        <li className="policy-list-item">
          <h2>5. Liability Disclaimer</h2>
          <p>
            BEAT and its contributors are not responsible for any financial
            losses incurred from the use of indicators shared on this platform.
          </p>
        </li>
        <li className="policy-list-item">
          <h2>6. Modifications</h2>
          <p>
            BEAT reserves the right to update this policy at any time. Users
            will be notified of significant changes.
          </p>
        </li>
        <li className="policy-list-item">
          <h2>7. Contact</h2>
          <p>
            If you have any questions regarding our policies, please contact us
            at{" "}
            <a href="mailto:a.m.gholizad@gmail.com">a.m.gholizad@gmail.com</a>.
          </p>
        </li>
      </ul>
    </main>
  );
}

export default Policy;
