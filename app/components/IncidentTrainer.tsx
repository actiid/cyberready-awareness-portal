"use client";

import { FormEvent, useState } from "react";
import { PageIntro } from "./PageIntro";
import { progressStorageKey } from "../lib/modules";

export function IncidentTrainer() {
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");

  function submitTrainingReport(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const saved = JSON.parse(localStorage.getItem(progressStorageKey) || "[]") as string[];
    if (!saved.includes("incident")) localStorage.setItem(progressStorageKey, JSON.stringify([...saved, "incident"]));
    setReference(`TRAINING-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`);
    setSubmitted(true);
  }

  return (
    <>
      <PageIntro
        number="06"
        eyebrow="Raise the flag fast"
        title="Report a Security Incident"
        description="Practice giving a security team enough information to act quickly—without investigating, deleting evidence, or spreading sensitive details."
        duration="5 minutes"
      />

      <div className="emergencyBanner"><strong>This form is a simulation. It does not contact anyone.</strong><p>For a real event, use your agency&apos;s approved incident hotline, service desk, SOC, or emergency procedure.</p></div>

      <section className="responseSteps">
        <article><span>1</span><div><strong>Stop</strong><p>Pause clicks, replies, downloads, and logins. Follow policy before disconnecting or powering off equipment.</p></div></article>
        <article><span>2</span><div><strong>Preserve</strong><p>Note the time, device, message, sender, and what happened. Do not delete potential evidence.</p></div></article>
        <article><span>3</span><div><strong>Report</strong><p>Use a known, approved channel. Share facts, not guesses, and follow the responder&apos;s instructions.</p></div></article>
      </section>

      {!submitted ? (
        <form className="incidentForm" onSubmit={submitTrainingReport}>
          <div className="formHeading"><div><span className="eyebrow">Practice form</span><h2>Fictional incident report</h2></div><span className="mockTag">NO DATA IS SENT</span></div>

          <div className="formGrid">
            <label>Incident type
              <select required defaultValue="">
                <option value="" disabled>Select a fictional scenario</option>
                <option>Suspicious email or message</option>
                <option>Unexpected MFA prompt</option>
                <option>Lost or stolen device</option>
                <option>Malware or unusual device behavior</option>
                <option>Possible data exposure</option>
                <option>Other security concern</option>
              </select>
            </label>
            <label>When was it noticed?
              <select required defaultValue="">
                <option value="" disabled>Choose an approximate time</option>
                <option>Within the last 15 minutes</option>
                <option>Within the last hour</option>
                <option>Earlier today</option>
                <option>Previous day or unknown</option>
              </select>
            </label>
            <label>Affected training asset
              <input required placeholder="Example: laptop TRAIN-042" />
            </label>
            <label>Current status
              <select required defaultValue="">
                <option value="" disabled>Choose one</option>
                <option>I stopped interacting</option>
                <option>The activity may still be happening</option>
                <option>The device is lost or unavailable</option>
                <option>I am not sure</option>
              </select>
            </label>
            <label className="fullField">What happened?
              <textarea required rows={5} placeholder="Use fictional facts: what you observed, what you clicked or opened, and any message shown. Do not include passwords, real personal data, CUI, or classified information." />
            </label>
          </div>

          <label className="trainingCheck"><input required type="checkbox" /><span>I understand this is a local training simulation and not a real incident report.</span></label>
          <button className="primaryButton submitButton" type="submit">Submit practice report <span aria-hidden="true">→</span></button>
        </form>
      ) : (
        <section className="submissionResult" aria-live="polite">
          <div className="resultCheck" aria-hidden="true">✓</div>
          <span className="eyebrow">Simulation complete</span>
          <h2>Your practice report was organized for triage.</h2>
          <p>Nothing was transmitted or saved. In a real event, stay available, record the reference number, and follow the responder&apos;s instructions.</p>
          <span className="referenceNumber">{reference}</span>
          <button className="exampleButton" type="button" onClick={() => setSubmitted(false)}>Practice another report</button>
        </section>
      )}

      <aside className="doNotPanel"><h2>Do not make the incident harder to investigate.</h2><div><p><strong>Do not</strong> forward suspicious messages widely.</p><p><strong>Do not</strong> run your own scans or cleanup unless instructed.</p><p><strong>Do not</strong> contact a suspected attacker.</p><p><strong>Do not</strong> put sensitive content in unapproved tickets or chat.</p></div></aside>
    </>
  );
}
