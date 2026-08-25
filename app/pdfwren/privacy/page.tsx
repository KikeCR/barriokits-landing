import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/data/site";

const pdfWrenName = "PDF Wren";
const pdfWrenPath = "/pdfwren/privacy";
const contactEmail = "hello@barriokits.dev";

export const metadata: Metadata = {
  title: `Privacy Policy | ${pdfWrenName}`,
  description: `Privacy policy for ${pdfWrenName}, the iOS PDF scanning and editing app.`,
  alternates: {
    canonical: `${siteConfig.url}${pdfWrenPath}`,
  },
};

export default function PdfWrenPrivacyPage() {
  return (
    <LegalPage title={`${pdfWrenName} Privacy Policy`} updated="August 24, 2026">
      <h2>1. Overview</h2>
      <p>
        {pdfWrenName} (&ldquo;the app&rdquo;) is designed to work entirely on your device. We do
        not require an account, do not collect the documents you scan or create, and do not
        operate any servers that store your files.
      </p>

      <h2>2. Information we do not collect</h2>
      <p>{pdfWrenName} does not collect, store, or transmit:</p>
      <ul>
        <li>The contents of any PDF you scan, import, edit, or create.</li>
        <li>Your signature image.</li>
        <li>
          Your name, email address, or any other personal information you enter into a document
          or form.
        </li>
      </ul>
      <p>
        All documents, signatures, and app data are stored locally on your device, in the
        app&rsquo;s private storage area. We have no access to them.
      </p>

      <h2>3. Permissions the app requests</h2>
      <p>{pdfWrenName} asks for the following device permissions, each used only for the specific feature that needs it, and only when you use that feature:</p>
      <ul>
        <li>
          <strong>Camera:</strong> used to scan paper documents into PDFs. Captured pages are
          turned into a PDF and saved locally on your device; we never see or receive the camera
          feed or the images it captures.
        </li>
        <li>
          <strong>Photos (add-only):</strong> used only when you tap &ldquo;Save as Images&rdquo;
          to write exported PDF pages into your Photos library. {pdfWrenName} cannot read, browse,
          or access any other photo already in your library &mdash; this permission only lets the
          app add new images you explicitly export.
        </li>
        <li>
          <strong>Files:</strong> when you import a PDF or save one to Files, you pick the exact
          file or folder yourself through Apple&rsquo;s system file picker. {pdfWrenName} never
          gets broad access to your device&rsquo;s file system &mdash; only the specific file you
          selected.
        </li>
      </ul>
      <p>
        {pdfWrenName} does not request access to your microphone, contacts, location, calendar,
        or health data, and has no need for any of them.
      </p>

      <h2>4. Information collected by third-party services</h2>
      <p>{pdfWrenName} uses the following third-party services, which may collect limited information as described below:</p>
      <ul>
        <li>
          <strong>Google AdMob (advertising):</strong> {pdfWrenName} shows banner and interstitial
          ads through Google AdMob to support the free version of the app. AdMob may collect
          device identifiers and general, non-precise location information (such as country or
          region) to serve ads. {pdfWrenName} requests non-personalized ads only &mdash; we do not
          use Apple&rsquo;s App Tracking Transparency framework and do not track you across other
          apps or websites. See{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
            Google&rsquo;s Privacy Policy
          </a>{" "}
          for details on how AdMob handles data.
        </li>
        <li>
          <strong>Apple StoreKit (in-app purchase):</strong> if you purchase &ldquo;Remove
          Ads,&rdquo; the transaction is handled entirely by Apple through StoreKit. We do not see
          or store your payment information. See{" "}
          <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">
            Apple&rsquo;s Privacy Policy
          </a>
          .
        </li>
      </ul>
      <p>
        Each provider named above only receives the minimum information needed to perform its
        function, is subject to its own privacy policy linked above, and is expected to protect
        that information consistently with this policy.
      </p>

      <h2>5. Data retention and deletion</h2>
      <p>
        Because {pdfWrenName} has no server and no account system, there is no copy of your
        documents, signature, or app data anywhere for us to retain &mdash; everything lives only
        in the app&rsquo;s local storage on your device, for as long as you keep it there. You can
        delete any document, signature, or piece of app data at any time from within the app, and
        uninstalling the app removes everything it stored, immediately and completely.
      </p>

      <h2>6. Children&rsquo;s privacy</h2>
      <p>
        {pdfWrenName} is not directed at children under 13, and we do not knowingly collect
        personal information from children. Because the app collects no personal information from
        any user, no age-specific data practices apply.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Depending on where you live, you may have rights under laws such as the EU/UK GDPR or the
        California Consumer Privacy Act (CCPA) to access, correct, or delete personal information
        held about you. Since {pdfWrenName} does not collect or store any personal information on
        our side, there is nothing on our servers to access or delete &mdash; your documents and
        data live only on your device, fully under your control. For questions about data AdMob or
        Apple may hold, see their respective privacy policies linked in Section 4.
      </p>

      <h2>8. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Changes will be posted at this same URL with
        an updated &ldquo;Last updated&rdquo; date.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
