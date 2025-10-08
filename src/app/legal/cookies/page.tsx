
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Streamec',
  description: 'Information about the use of cookies on streamec.com',
};

const UPDATED_AT = 'October 8, 2025';
const DOMAIN = 'streamec.com';
const CONTACT = 'privacy@streamec.com';

export default function CookiePolicyPage() {
  return (
    <article id="cookie-policy">
      <header>
        <h1>Cookie Policy</h1>
        <p>Last updated: {UPDATED_AT}</p>
      </header>

      {/* Spis treści (kotwice działają z Twoim ScrollHashEffect z AppShella) */}
      <nav aria-label="Table of contents">
        <ol>
          <li><a href="#what-are-cookies">1. What are cookies?</a></li>
          <li><a href="#how-we-use">2. How we use cookies</a></li>
          <li><a href="#third-party">3. Third-party cookies</a></li>
          <li><a href="#manage">4. Managing cookies</a></li>
          <li><a href="#updates">5. Updates</a></li>
          <li><a href="#contact">6. Contact</a></li>
        </ol>
      </nav>

      <section id="intro">
        <p>
          This Cookie Policy explains how <strong>{DOMAIN}</strong> (“we”, “us”, or “our”)
          uses cookies and similar technologies to recognize you when you visit our website.
          It explains what these technologies are, why we use them, and your rights to control their use.
        </p>
      </section>

      <section id="what-are-cookies">
        <h2>1. What are cookies?</h2>
        <p>
          Cookies are small text files that are placed on your device when you visit a website.
          They help websites function properly, improve performance and user experience, and provide
          analytical insights. Cookies can be “session” (deleted when you close your browser)
          or “persistent” (stored until they expire or are deleted).
        </p>
      </section>

      <section id="how-we-use">
        <h2>2. How we use cookies</h2>
        <p>We use cookies for several reasons, including:</p>
        <ul>
          <li><strong>Essential</strong> — required for core site functionality (e.g., forms, secure areas).</li>
          <li><strong>Performance &amp; analytics</strong> — to understand how visitors use our site and improve it.</li>
          <li><strong>Functionality</strong> — to remember preferences such as language or region.</li>
          <li><strong>Advertising</strong> — to deliver relevant ads and measure campaign effectiveness.</li>
        </ul>
      </section>

      <section id="third-party">
        <h2>3. Third-party cookies</h2>
        <p>
          Some cookies are set by third parties (e.g., analytics providers like Google Analytics or
          embedded services such as YouTube, Facebook, LinkedIn). These parties may collect information
          about your online activities across websites over time. Please refer to their privacy policies
          for details on how they process your data.
        </p>
      </section>

      <section id="manage">
        <h2>4. Managing cookies</h2>
        <p>You can decide whether to accept or reject cookies. Most browsers allow you to:</p>
        <ul>
          <li>Block all cookies,</li>
          <li>Accept only certain types, or</li>
          <li>Be notified before a cookie is stored.</li>
        </ul>
        <p>Disabling cookies may impact site functionality. See your browser’s help for instructions.</p>
      </section>

      <section id="updates">
        <h2>5. Updates to this policy</h2>
        <p>
          We may update this Cookie Policy to reflect changes in technology, legal requirements, or our practices.
          The “Last updated” date indicates the latest revision.
        </p>
      </section>

      <section id="contact">
        <h2>6. Contact us</h2>
        <p>
          Questions about our use of cookies? Contact us at:{' '}
          <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
        </p>
      </section>
    </article>
  );
}
