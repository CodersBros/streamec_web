
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Streamec',
  description: 'How streamec.com collects, uses, and protects your personal data.',
};

const UPDATED_AT = 'October 8, 2025';
const DOMAIN = 'streamec.com';
const CONTACT = 'privacy@streamec.com';

export default function PrivacyPolicyPage() {
  return (
    <article id="privacy-policy">
      <header>
        <h1>Privacy Policy</h1>
        <p>Last updated: {UPDATED_AT}</p>
      </header>

      <section id="intro">
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy explains how <strong>{DOMAIN}</strong> (“we”, “us”, or “our”) collects,
          uses, discloses, and protects your personal data when you use our website and services.
          It also describes your rights and how you can exercise them.
        </p>
      </section>

      <section id="controller">
        <h2>2. Data Controller</h2>
        <p>
          The data controller responsible for your personal data is <strong>{DOMAIN}</strong>. If you have
          questions, contact us at <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
        </p>
      </section>

      <section id="data-we-collect">
        <h2>3. Data We Collect</h2>
        <p>We may collect and process the following categories of personal data:</p>
        <ul>
          <li><strong>Identity and contact data</strong> (e.g., name, email address, phone number).</li>
          <li><strong>Usage data</strong> (e.g., pages viewed, clicks, referring/exit pages, timestamps).</li>
          <li><strong>Technical data</strong> (e.g., IP address, browser type and version, device identifiers, OS).</li>
          <li><strong>Marketing and communications data</strong> (e.g., preferences for receiving marketing).</li>
          <li><strong>Inquiry data</strong> you submit via forms (e.g., messages and attachments).</li>
        </ul>
        <p>
          We do not intentionally collect special categories of data (e.g., health, political opinions).
          Please do not submit such data via our forms.
        </p>
      </section>

      <section id="sources">
        <h2>4. How We Obtain Data</h2>
        <ul>
          <li><strong>Directly from you</strong> when you fill out forms, subscribe, or contact us.</li>
          <li><strong>Automatically</strong> via cookies and similar technologies (see our <a href="/legal/cookies">Cookie Policy</a>).</li>
          <li><strong>From third parties</strong> such as analytics or marketing partners, where lawful.</li>
        </ul>
      </section>

      <section id="purposes-legal-bases">
        <h2>5. Purposes and Legal Bases</h2>
        <p>We use your data for the purposes and under the legal bases below (GDPR Articles 6(1)(a–f)):</p>
        <ul>
          <li><strong>Provide and operate the site</strong> — performance of a contract or legitimate interests.</li>
          <li><strong>Respond to inquiries</strong> — performance of a contract or legitimate interests.</li>
          <li><strong>Analytics and improvements</strong> — legitimate interests to improve performance and UX.</li>
          <li><strong>Marketing communications</strong> — consent (where required) or legitimate interests.</li>
          <li><strong>Security and fraud prevention</strong> — legitimate interests and legal obligations.</li>
          <li><strong>Compliance</strong> — to meet legal or regulatory requirements.</li>
        </ul>
      </section>

      <section id="sharing">
        <h2>6. Sharing of Personal Data</h2>
        <p>
          We may share your data with trusted service providers (e.g., hosting, analytics, email delivery),
          professional advisors, or public authorities where required by law. We require processors to implement
          appropriate security measures and process data only under our instructions.
        </p>
      </section>

      <section id="transfers">
        <h2>7. International Data Transfers</h2>
        <p>
          If data is transferred outside your jurisdiction (including outside the EEA/UK), we rely on lawful transfer
          mechanisms such as adequacy decisions or Standard Contractual Clauses (SCCs) and implement additional
          safeguards where necessary.
        </p>
      </section>

      <section id="retention">
        <h2>8. Data Retention</h2>
        <p>
          We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy,
          including to comply with legal, accounting, or reporting obligations. Retention periods depend on data type
          and context; when data is no longer needed, we securely delete or anonymize it.
        </p>
      </section>

      <section id="security">
        <h2>9. Security</h2>
        <p>
          We implement appropriate technical and organizational measures designed to protect your personal data against
          unauthorized access, loss, misuse, alteration, or destruction. No system is completely secure; transmission
          of information over the internet carries inherent risks.
        </p>
      </section>

      <section id="your-rights">
        <h2>10. Your Rights</h2>
        <p>Subject to applicable law (including GDPR), you may have the right to:</p>
        <ul>
          <li>Access your personal data and obtain a copy.</li>
          <li>Request rectification of inaccurate or incomplete data.</li>
          <li>Request erasure (“right to be forgotten”).</li>
          <li>Restrict or object to processing, including for direct marketing.</li>
          <li>Data portability, where technically feasible.</li>
          <li>Withdraw consent at any time, where processing is based on consent.</li>
          <li>Lodge a complaint with a supervisory authority.</li>
        </ul>
        <p>
          To exercise your rights, contact us at <a href={`mailto:${CONTACT}`}>{CONTACT}</a>. We may need to verify your identity
          before responding.
        </p>
      </section>

      <section id="cookies">
        <h2>11. Cookies and Similar Technologies</h2>
        <p>
          We use cookies and similar technologies to operate and improve our site. For details on types of cookies,
          purposes, and controls, please see our <a href="/legal/cookies">Cookie Policy</a>.
        </p>
      </section>

      <section id="children">
        <h2>12. Children’s Privacy</h2>
        <p>
          Our website is not directed to children. We do not knowingly collect personal data from children. If you
          believe a child has provided us with personal data, please contact us so we can take appropriate action.
        </p>
      </section>

      <section id="changes">
        <h2>13. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy to reflect changes in our practices, technologies, or legal requirements.
          We will indicate the latest revision by updating the “Last updated” date at the top of this page.
        </p>
      </section>

      <section id="contact">
        <h2>14. Contact</h2>
        <p>
          If you have questions about this Privacy Policy or our data practices, contact us at:{' '}
          <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
        </p>
      </section>
    </article>
  );
}
