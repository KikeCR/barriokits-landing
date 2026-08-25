import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/data/site";

const pdfWrenName = "PDF Wren";
const pdfWrenPath = "/pdfwren/terms";
const contactEmail = "hello@barriokits.dev";

export const metadata: Metadata = {
  title: `Terms of Use | ${pdfWrenName}`,
  description: `Terms of use for ${pdfWrenName}, the iOS PDF scanning and editing app.`,
  alternates: {
    canonical: `${siteConfig.url}${pdfWrenPath}`,
  },
};

export default function PdfWrenTermsPage() {
  return (
    <LegalPage title={`${pdfWrenName} Terms of Use`} updated="August 24, 2026">
      <h2>1. Agreement to these terms</h2>
      <p>
        These terms govern your use of the {pdfWrenName} iOS app. By downloading, installing, or
        using {pdfWrenName}, you agree to be bound by these terms. If you do not agree, do not use
        the app. Your use of the app is also subject to Apple&rsquo;s Licensed Application End
        User License Agreement, which applies in addition to these terms.
      </p>

      <h2>2. What {pdfWrenName} does</h2>
      <p>
        {pdfWrenName} lets you scan, view, annotate, sign, and organize PDF documents entirely on
        your device. It has no account system and no server &mdash; every document you create or
        import stays in the app&rsquo;s local storage on your device unless you explicitly export
        or share it yourself.
      </p>

      <h2>3. Your content</h2>
      <p>
        You retain all rights to the documents, images, and signatures you create or import into
        {" "}{pdfWrenName}. We never see, access, or have any copy of that content &mdash; it exists
        only on your device. You are solely responsible for keeping your own backups; {pdfWrenName}
        {" "}does not provide cloud backup or sync, and we are not responsible for documents lost due
        to app deletion, device loss or damage, iOS storage limits, or similar causes.
      </p>

      <h2>4. In-app purchase</h2>
      <p>
        {pdfWrenName} is free to use and supported by ads. The optional &ldquo;Remove Ads&rdquo;
        purchase is a one-time, non-subscription in-app purchase billed through Apple. It is not
        a recurring charge. Purchases, refunds, and billing disputes are handled entirely by
        Apple under Apple&rsquo;s own policies &mdash; see{" "}
        <a href="https://support.apple.com/en-us/HT204084" target="_blank" rel="noreferrer">
          Apple&rsquo;s guide to requesting a refund
        </a>
        . We do not process payments ourselves and cannot issue refunds directly.
      </p>

      <h2>5. Acceptable use</h2>
      <p>
        You agree not to use {pdfWrenName} to create, store, or distribute content that is
        unlawful, infringes someone else&rsquo;s rights, or violates applicable law, and not to
        attempt to reverse engineer, decompile, or circumvent any part of the app beyond what
        Apple&rsquo;s license terms permit.
      </p>

      <h2>6. Third-party services</h2>
      <p>
        {pdfWrenName} uses Google AdMob to show ads and Apple StoreKit to process the optional
        in-app purchase. Your use of the app is also subject to those providers&rsquo; own terms.
        See our{" "}
        <a href="/pdfwren/privacy">Privacy Policy</a> for details on what each service can access.
      </p>

      <h2>7. No warranty</h2>
      <p>
        {pdfWrenName} is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without
        warranties of any kind, whether express or implied, including implied warranties of
        merchantability, fitness for a particular purpose, and non-infringement. We do not
        guarantee the app will be error-free, uninterrupted, or that scanned or edited documents
        will always be accurate, complete, or free of data loss.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, we will not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or any loss of data, profits, or
        revenue, arising from your use of {pdfWrenName}. Our total liability for any claim related
        to the app will not exceed the amount you paid for the &ldquo;Remove Ads&rdquo; purchase,
        if any, or $10 if you made no purchase.
      </p>
      <p>
        As required by Apple&rsquo;s guidelines, you acknowledge that Apple has no obligation to
        provide maintenance or support for {pdfWrenName}, and is not responsible for any claims
        relating to the app, including product liability claims, claims under consumer protection
        law, or claims that the app fails to meet applicable legal requirements. Apple is not a
        party to these terms.
      </p>

      <h2>9. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. Material changes will be reflected by
        updating the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the
        app after changes take effect constitutes acceptance of the revised terms.
      </p>

      <h2>10. Governing law</h2>
      <p>
        These terms are governed by the laws of the jurisdiction in which we operate, without
        regard to conflict of law principles, unless a different jurisdiction is required by
        applicable consumer protection law.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
