import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { ModuleCompleteButton } from "../components/ModuleCompleteButton";

export const metadata: Metadata = {
  title: "MFA Guide",
  description: "A beginner-friendly guide to multi-factor authentication for government IT roles.",
};

export default function MfaGuidePage() {
  return (
    <>
      <PageIntro
        number="03"
        eyebrow="Add another layer"
        title="MFA Guide"
        description="Multi-factor authentication asks for two different kinds of proof, so a stolen password alone is not enough."
        duration="6 minutes"
      />

      <section className="conceptHero">
        <div>
          <span className="eyebrow light">Simple definition</span>
          <h2>Something you know + something you have or are.</h2>
          <p>A password is something you know. A security key or managed phone is something you have. A fingerprint or face scan is something you are.</p>
        </div>
        <div className="factorEquation" aria-label="Password plus second factor equals stronger sign-in">
          <span className="factor"><small>KNOW</small>Password</span>
          <b>+</b>
          <span className="factor"><small>HAVE</small>Security key</span>
          <b>=</b>
          <span className="factor safe"><small>RESULT</small>Stronger sign-in</span>
        </div>
      </section>

      <section className="contentSection">
        <div className="sectionHeading compact"><div><span className="eyebrow">Compare methods</span><h2>Not every second factor is equal</h2></div></div>
        <div className="comparisonGrid">
          <article className="comparisonCard recommended">
            <span className="rankBadge">BEST PROTECTION</span>
            <h3>Passkey or security key</h3>
            <p>Designed to resist fake sign-in pages because the key checks the real website before approving access.</p>
            <ul><li>Strong phishing resistance</li><li>Fast sign-in</li><li>Use agency-issued options</li></ul>
          </article>
          <article className="comparisonCard">
            <span className="rankBadge">GOOD</span>
            <h3>Authenticator app</h3>
            <p>Creates time-based codes or approval prompts on a managed device.</p>
            <ul><li>Safer than SMS</li><li>Never share the code</li><li>Reject unexpected prompts</li></ul>
          </article>
          <article className="comparisonCard">
            <span className="rankBadge">FALLBACK</span>
            <h3>SMS or voice code</h3>
            <p>Better than a password alone, but vulnerable to phone-number takeover and message interception.</p>
            <ul><li>Use only if policy allows</li><li>Protect your mobile account</li><li>Move to a stronger method when available</li></ul>
          </article>
        </div>
      </section>

      <section className="splitLesson">
        <div>
          <span className="eyebrow">When a prompt appears</span>
          <h2>Stop unexpected MFA fatigue.</h2>
          <p>Attackers may send repeated approval prompts hoping you accept one just to make them stop.</p>
        </div>
        <ol className="numberedSteps">
          <li><span>1</span><div><strong>Deny the prompt</strong><p>Do not approve a sign-in you did not start.</p></div></li>
          <li><span>2</span><div><strong>Stop and verify</strong><p>Open the service from a trusted bookmark—not from a message.</p></div></li>
          <li><span>3</span><div><strong>Report it</strong><p>Notify your approved security channel and follow password reset instructions.</p></div></li>
        </ol>
      </section>

      <div className="policyNote"><strong>Government IT reminder</strong><p>Enrollment, recovery, and backup factors must follow your organization&apos;s identity policy. Never add a personal device unless it is explicitly approved.</p></div>

      <div className="lessonCompleteRow"><div><strong>Layer added.</strong><p>You now know why phishing-resistant MFA is the preferred goal.</p></div><ModuleCompleteButton moduleId="mfa" /></div>
    </>
  );
}
