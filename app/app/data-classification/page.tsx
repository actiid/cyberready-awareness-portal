import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { ModuleCompleteButton } from "../components/ModuleCompleteButton";

export const metadata: Metadata = {
  title: "Data Classification",
  description: "Learn safe, policy-based handling for public, internal, CUI, and classified information.",
};

export default function DataClassificationPage() {
  return (
    <>
      <PageIntro
        number="05"
        eyebrow="Handle with purpose"
        title="Data Classification"
        description="Classification tells you how information may be stored, shared, discussed, and destroyed. When in doubt, pause and ask the data owner or security office."
        duration="7 minutes"
      />

      <div className="policyNote strong"><strong>Policy comes first</strong><p>Labels and handling rules vary by organization. This lesson is a general orientation, not a replacement for agency policy, records schedules, CUI markings, or classification guidance.</p></div>

      <section className="classificationStack">
        <article className="classificationRow publicLevel">
          <div className="classLabel"><span>P</span><div><small>LEVEL 1</small><h2>Public</h2></div></div>
          <p>Approved for public release, such as published reports or public website content.</p>
          <div className="handling"><strong>Handle:</strong> Confirm release approval and protect official copies from unauthorized changes.</div>
        </article>
        <article className="classificationRow internalLevel">
          <div className="classLabel"><span>I</span><div><small>LEVEL 2</small><h2>Internal / agency use</h2></div></div>
          <p>Routine operational information not intended for public distribution.</p>
          <div className="handling"><strong>Handle:</strong> Use approved accounts, devices, storage, and need-to-know sharing.</div>
        </article>
        <article className="classificationRow cuiLevel">
          <div className="classLabel"><span>C</span><div><small>LEVEL 3</small><h2>Controlled Unclassified Information</h2></div></div>
          <p>Unclassified information that requires safeguarding or dissemination controls under law, regulation, or policy.</p>
          <div className="handling"><strong>Handle:</strong> Follow required markings, approved encrypted systems, access controls, and authorized recipients.</div>
        </article>
        <article className="classificationRow classifiedLevel">
          <div className="classLabel"><span>★</span><div><small>SPECIAL HANDLING</small><h2>Classified</h2></div></div>
          <p>National security information formally classified at an authorized level.</p>
          <div className="handling"><strong>Handle:</strong> Only in accredited spaces and systems, by cleared people with verified need to know. Never place it in this training portal.</div>
        </article>
      </section>

      <section className="decisionPanel">
        <div><span className="eyebrow light">Before you share</span><h2>Ask four questions.</h2></div>
        <ol>
          <li><span>1</span>What is the official label or handling rule?</li>
          <li><span>2</span>Does the recipient have authorization and need to know?</li>
          <li><span>3</span>Is this device, system, and channel approved?</li>
          <li><span>4</span>Are the markings, encryption, and records requirements satisfied?</li>
        </ol>
      </section>

      <section className="scenarioTable" aria-labelledby="classification-examples">
        <h2 id="classification-examples">Quick examples</h2>
        <div className="tableScroll">
          <table>
            <thead><tr><th>Example</th><th>Likely action</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td>Published public meeting agenda</td><td>Verify it is the approved final copy</td><td>Public does not mean unprotected from tampering.</td></tr>
              <tr><td>Draft network diagram</td><td>Keep in approved internal storage</td><td>Technical details can help an attacker.</td></tr>
              <tr><td>Document marked CUI</td><td>Follow its markings and agency CUI procedure</td><td>The marking signals required safeguards.</td></tr>
              <tr><td>Unknown attachment with no marking</td><td>Do not guess; ask the owner or security office</td><td>Missing labels do not automatically make data public.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="lessonCompleteRow"><div><strong>Think before you transfer.</strong><p>Correct handling depends on the data, the people, the system, and the mission.</p></div><ModuleCompleteButton moduleId="data" /></div>
    </>
  );
}
