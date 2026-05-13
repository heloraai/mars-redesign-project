import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { withBase } from "@/lib/href";

export default function Terms() {
  return (
    <>
      <SiteHeader />
      <main className="container-narrow py-16 lg:py-24">
        <article className="prose prose-neutral max-w-3xl dark:prose-invert">
          <h1>Terms of Use</h1>
          <p className="lead">
            <strong>Mars Consulting Pte Ltd (UEN 200907301Z)</strong>
            <br />
            Last updated: 13 May 2026
          </p>

          <hr />

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website at marsconsulting.com.sg (the "Website"), you
            agree to be bound by these Terms of Use. If you do not agree to these terms, you
            may not use the Website.
          </p>
          <p>
            These Terms of Use apply to all visitors, users, and others who access the
            Website. Mars Consulting Pte Ltd ("Mars Consulting", "we", "us", "our") reserves
            the right to update these terms at any time without prior notice. Continued use
            of the Website after changes constitutes acceptance of the updated terms.
          </p>

          <hr />

          <h2>2. Intellectual Property</h2>
          <p>
            All content on this Website — including but not limited to text, graphics,
            logos, images, design elements, layout, code, and structure — is the
            intellectual property of Mars Consulting Pte Ltd or its licensors and is
            protected by applicable copyright, trademark, and intellectual property laws.
          </p>
          <p>
            You may view, download, and print Website content for personal, non-commercial
            reference only. Any reproduction, distribution, modification, public display, or
            commercial use of Website content without prior written permission from Mars
            Consulting is prohibited.
          </p>
          <p>
            The Mars Consulting name, logo, and any related marks are trademarks of Mars
            Consulting Pte Ltd. Use of these marks without authorisation is not permitted.
          </p>

          <hr />

          <h2>3. No Professional Advice</h2>
          <p>
            Information published on this Website is provided for general information
            purposes only. It does not constitute legal, financial, tax, HR, employment, or
            any other professional advice and should not be relied upon as such.
          </p>
          <p>
            You should seek specific professional advice tailored to your circumstances
            before making any decision or taking any action based on information from this
            Website. Mars Consulting does not warrant the accuracy, completeness, or
            timeliness of any information on the Website.
          </p>

          <hr />

          <h2>4. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Mars Consulting Pte Ltd, its
            directors, employees, agents, and affiliates shall not be liable for any direct,
            indirect, incidental, consequential, special, or punitive damages arising out of
            or in connection with:
          </p>
          <ul>
            <li>Your use of, or inability to use, the Website;</li>
            <li>Reliance on any information published on the Website;</li>
            <li>Any errors, omissions, or inaccuracies in Website content;</li>
            <li>Any unauthorised access to or alteration of your data;</li>
            <li>Any other matter relating to the Website.</li>
          </ul>
          <p>
            This limitation applies regardless of the legal theory of liability (contract,
            tort, or otherwise) and even if Mars Consulting has been advised of the
            possibility of such damages.
          </p>

          <hr />

          <h2>5. Third-Party Links</h2>
          <p>
            The Website may contain links to third-party websites, including but not limited
            to LinkedIn, the Singapore Ministry of Manpower Employment Agency Directory, and
            ACRA BizFile+. These links are provided for convenience and informational
            purposes only.
          </p>
          <p>
            Mars Consulting does not control, endorse, or assume responsibility for the
            content, privacy practices, or operations of any third-party websites. Access to
            third-party websites is at your own risk.
          </p>

          <hr />

          <h2>6. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>
              Use the Website for any unlawful purpose or in any manner that may damage,
              disable, or impair the Website;
            </li>
            <li>
              Attempt to gain unauthorised access to any part of the Website, related
              systems, or networks;
            </li>
            <li>
              Use any automated tools (including bots, scrapers, or crawlers) to extract
              content from the Website, except for legitimate search engine indexing;
            </li>
            <li>
              Submit false, misleading, or fraudulent information through any Website form;
            </li>
            <li>
              Impersonate any person or entity, or misrepresent your affiliation with any
              organisation.
            </li>
          </ul>

          <hr />

          <h2>7. Privacy</h2>
          <p>
            Use of the Website and any data submitted through Website forms is governed by
            our{" "}
            <a href={withBase("/privacy")}>Privacy Policy</a>. By using the Website, you
            acknowledge and agree to the data practices described in the Privacy Policy.
          </p>

          <hr />

          <h2>8. Service Engagements</h2>
          <p>
            These Terms of Use govern only your use of the Website. Engagement of Mars
            Consulting for professional services (Employer of Record, recruitment, payroll
            outsourcing, HR outsourcing, AI automation) is subject to a separate written
            service agreement between Mars Consulting and the client. Nothing on this Website
            constitutes a contractual offer or commitment to provide services.
          </p>

          <hr />

          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Mars Consulting Pte Ltd, its directors,
            employees, agents, and affiliates from any claims, damages, liabilities, costs,
            or expenses (including reasonable legal fees) arising out of:
          </p>
          <ul>
            <li>Your use of the Website;</li>
            <li>Your violation of these Terms of Use;</li>
            <li>Your violation of any rights of a third party.</li>
          </ul>

          <hr />

          <h2>10. Governing Law and Jurisdiction</h2>
          <p>
            These Terms of Use are governed by and construed in accordance with the laws of
            Singapore, without regard to its conflict of law principles.
          </p>
          <p>
            Any dispute arising out of or in connection with these terms or your use of the
            Website shall be subject to the exclusive jurisdiction of the courts of
            Singapore.
          </p>

          <hr />

          <h2>11. Severability</h2>
          <p>
            If any provision of these Terms of Use is held to be invalid or unenforceable by
            a court of competent jurisdiction, the remaining provisions shall continue in
            full force and effect.
          </p>

          <hr />

          <h2>12. Contact</h2>
          <p>For questions regarding these Terms of Use, contact:</p>
          <p>
            <strong>Mars Consulting Pte Ltd (UEN 200907301Z)</strong>
            <br />
            6 Raffles Boulevard, #03-308 Marina Square
            <br />
            Singapore 039594
          </p>
          <p>
            Email:{" "}
            <a href="mailto:admin@marsconsulting.com.sg">
              admin@marsconsulting.com.sg
            </a>
          </p>

          <hr />

          <p>
            <em>
              © 2026 Mars Consulting Pte Ltd (UEN 200907301Z). All rights reserved.
            </em>
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
