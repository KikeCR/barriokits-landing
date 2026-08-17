// PLACEHOLDER LEGAL TEXT: standard boilerplate privacy policy for a small digital goods
// store. Review with a qualified lawyer and customize (entity name, jurisdiction, exact
// vendor list) before taking real payments. This comment is not rendered to visitors.

import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}, explaining what data we collect and how it is used.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="August 17, 2026">
      <h2>1. Overview</h2>
      <p>
        This policy explains what information Barrio Kits (&ldquo;we,&rdquo; &ldquo;us&rdquo;)
        collects when you visit {siteConfig.url} or purchase a Kit, how we use it, and the choices
        you have. It applies to the Barrio Kits site and checkout flow.
      </p>

      <h2>2. Information we collect</h2>
      <p>We collect information in a few ways:</p>
      <ul>
        <li>
          <strong>Information you provide:</strong> your email address when you contact us,
          request updates, or complete a purchase, and any details you include in that message.
        </li>
        <li>
          <strong>Payment information:</strong> when you buy a Kit, payment details (such as card
          number) are collected and processed directly by our third-party payment processor and
          merchant of record. We do not receive or store your full card number.
        </li>
        <li>
          <strong>Usage data:</strong> basic, aggregated analytics about how the site is used,
          such as which pages are viewed and general traffic sources, collected through
          privacy-conscious analytics tooling.
        </li>
        <li>
          <strong>Cookies:</strong> small files used to remember preferences, such as your chosen
          light or dark theme, and to support essential site functionality.
        </li>
      </ul>

      <h2>3. How we use information</h2>
      <p>We use the information above to:</p>
      <ul>
        <li>Deliver the Kit you purchased and provide related support.</li>
        <li>Respond to questions sent to our contact email.</li>
        <li>Understand aggregate site usage so we can improve the products and the site.</li>
        <li>Meet legal, tax, and accounting obligations related to sales.</li>
      </ul>
      <p>We do not sell your personal information to third parties.</p>

      <h2>4. Third-party service providers</h2>
      <p>We work with a small number of third-party providers to run Barrio Kits, including:</p>
      <ul>
        <li>A payment processor and merchant of record (currently Lemon Squeezy) that handles checkout, billing, and tax collection.</li>
        <li>A hosting and content delivery provider that serves the site.</li>
        <li>An email provider used to send purchase receipts and respond to support requests.</li>
      </ul>
      <p>
        Each provider only receives the information needed to perform its function and is subject
        to its own privacy policy.
      </p>

      <h2>5. Data retention</h2>
      <p>
        We keep purchase and correspondence records for as long as needed to provide support,
        meet accounting and tax requirements, and comply with applicable law. You can ask us to
        delete personal information that is not otherwise required to be retained.
      </p>

      <h2>6. Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, or delete the
        personal information we hold about you, or to object to certain processing. To exercise
        any of these rights, email{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
      </p>

      <h2>7. Children&rsquo;s privacy</h2>
      <p>
        Barrio Kits is not directed at children under 16, and we do not knowingly collect personal
        information from children.
      </p>

      <h2>8. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Material changes will be reflected by
        updating the &ldquo;Last updated&rdquo; date at the top of this page.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
