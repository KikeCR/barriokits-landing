// PLACEHOLDER LEGAL TEXT: standard boilerplate terms for a small digital goods store.
// Review with a qualified lawyer and customize (pricing, refund window, entity name,
// governing law) before taking real payments. This comment is not rendered to visitors.

import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}, covering licensing, payments, and refunds for digital products.`,
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="August 17, 2026">
      <h2>1. Agreement to these terms</h2>
      <p>
        These terms govern your access to and use of {siteConfig.url} and any code boilerplate
        starters, Notion templates, Canva templates, and related digital products (each a
        &ldquo;Kit&rdquo;) offered by Barrio Kits (&ldquo;Barrio Kits,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us&rdquo;). By purchasing or downloading a Kit, or by otherwise using the site, you
        agree to be bound by these terms. If you do not agree, do not use the site or purchase a
        Kit.
      </p>

      <h2>2. Who can use Barrio Kits</h2>
      <p>
        You must be at least 18 years old, or the age of legal majority in your jurisdiction, and
        able to form a binding contract to make a purchase. Kits are intended for developers,
        designers, and businesses building their own products and marketing assets.
      </p>

      <h2>3. License to use a Kit</h2>
      <p>
        When you purchase a Kit, Barrio Kits grants you a limited, non-exclusive, non-transferable
        license to use, modify, and incorporate that Kit into your own personal or commercial
        projects. Unless a specific listing states otherwise, one purchase covers use across an
        unlimited number of your own end products.
      </p>
      <p>The following uses are not permitted under a standard license, and require a separate agreement with us:</p>
      <ul>
        <li>Reselling, sublicensing, or redistributing a Kit as a standalone product, template, or starter kit.</li>
        <li>Uploading a Kit, in whole or in part, to a public template marketplace, code repository, or asset library where it could be downloaded independently of your finished project.</li>
        <li>Claiming authorship of a Kit itself, separate from the project you built with it.</li>
      </ul>
      <p>
        All Kits are provided as digital files delivered electronically. No physical goods are
        shipped.
      </p>

      <h2>4. Payments</h2>
      <p>
        Prices are listed in US dollars unless stated otherwise. Payments are processed by a
        third-party payment processor and merchant of record. Barrio Kits does not store your full
        payment card details on its own servers. By completing a purchase, you agree to the
        payment processor&rsquo;s applicable terms in addition to these terms.
      </p>

      <h2>5. Refunds</h2>
      <p>
        Because Kits are digital products delivered instantly, all sales are generally final once
        a Kit has been downloaded. We will issue a refund or replacement at our discretion in
        cases such as: a duplicate charge, a technical defect that prevents the Kit from being
        used and cannot be fixed within a reasonable time, or a Kit that is materially different
        from its public description. Refund requests should be sent to{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> within 14 days
        of purchase.
      </p>

      <h2>6. Intellectual property</h2>
      <p>
        Barrio Kits and its licensors retain all ownership rights, including copyright, in and to
        each Kit and the Barrio Kits site, name, and logo. Purchasing a Kit gives you a license to
        use it as described above, not ownership of the underlying design or code assets
        themselves.
      </p>

      <h2>7. Acceptable use</h2>
      <p>
        You agree not to use the site to violate any applicable law, infringe on the rights of
        others, distribute malware, or attempt to gain unauthorized access to our systems or
        another user&rsquo;s account.
      </p>

      <h2>8. Kits provided as is</h2>
      <p>
        Kits are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis, without
        warranties of any kind, whether express or implied, including implied warranties of
        merchantability, fitness for a particular purpose, and non-infringement. We do not
        guarantee that a Kit will be error free or meet every requirement of your specific
        project.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Barrio Kits will not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or any loss of profits or
        revenue, arising from your use of a Kit or the site. Our total liability for any claim
        related to a purchase will not exceed the amount you paid for the Kit giving rise to the
        claim.
      </p>

      <h2>10. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. Material changes will be reflected by
        updating the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the
        site after changes take effect constitutes acceptance of the revised terms.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These terms are governed by the laws of the jurisdiction in which Barrio Kits operates,
        without regard to conflict of law principles, unless a different jurisdiction is required
        by applicable consumer protection law.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
