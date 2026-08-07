"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { progressStorageKey, trainingModules } from "../lib/modules";

export function Dashboard() {
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    const readProgress = () => {
      setCompleted(JSON.parse(localStorage.getItem(progressStorageKey) || "[]"));
    };
    readProgress();
    window.addEventListener("storage", readProgress);
    window.addEventListener("cyberready-progress", readProgress);
    return () => {
      window.removeEventListener("storage", readProgress);
      window.removeEventListener("cyberready-progress", readProgress);
    };
  }, []);

  const percent = Math.round((completed.length / trainingModules.length) * 100);
  const nextModule = trainingModules.find((module) => !completed.includes(module.id)) || trainingModules[0];

  return (
    <>
      <section className="dashboardHero">
        <div className="heroCopy">
          <span className="eyebrow light">Security starts with one good decision</span>
          <h1>Small habits.<br /><em>Stronger systems.</em></h1>
          <p>
            Practical, plain-language cybersecurity training for people protecting public systems and data.
          </p>
          <div className="heroActions">
            <Link className="primaryButton lightButton" href={nextModule.href}>
              {completed.length ? "Continue training" : "Start your first lesson"}
              <span aria-hidden="true">→</span>
            </Link>
            <span className="heroTime">Six lessons · about 32 minutes</span>
          </div>
        </div>
        <div className="heroVisual" aria-hidden="true">
          <div className="orbit orbitOne" />
          <div className="orbit orbitTwo" />
          <div className="heroShield"><span>✓</span></div>
          <span className="signal signalOne">01</span>
          <span className="signal signalTwo">MFA</span>
          <span className="signal signalThree">•••</span>
        </div>
      </section>

      <section className="progressStrip" aria-label="Training progress">
        <div className="progressSummary">
          <span className="progressPercent">{percent}%</span>
          <div>
            <strong>Your training progress</strong>
            <p>{completed.length} of {trainingModules.length} lessons completed on this device</p>
          </div>
        </div>
        <div className="progressTrack" aria-hidden="true"><span style={{ width: `${percent}%` }} /></div>
        <span className="localNote">Saved only in this browser</span>
      </section>

      <section className="moduleSection">
        <div className="sectionHeading">
          <div>
            <span className="eyebrow">Your learning path</span>
            <h2>Choose a quick lesson</h2>
          </div>
          <p>Start anywhere. Each lesson uses realistic, fictional scenarios and avoids jargon.</p>
        </div>

        <div className="moduleGrid">
          {trainingModules.map((module) => {
            const done = completed.includes(module.id);
            return (
              <Link className={`moduleCard ${module.tone}`} href={module.href} key={module.id}>
                <div className="cardTopline">
                  <span className="moduleNumber">{module.number}</span>
                  <span className="moduleTime">{module.time}</span>
                </div>
                <span className="cardEyebrow">{module.eyebrow}</span>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
                <div className="cardFooter">
                  <span className={done ? "doneStatus" : "startStatus"}>{done ? "✓ Completed" : "Start lesson"}</span>
                  <span className="cardArrow" aria-hidden="true">↗</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <aside className="calloutPanel">
        <div className="calloutIcon" aria-hidden="true">!</div>
        <div>
          <span className="eyebrow">Remember</span>
          <h2>Fast reporting beats perfect reporting.</h2>
          <p>If something feels wrong, stop interacting, preserve what you can, and contact your approved security channel. You do not need to investigate it yourself.</p>
        </div>
        <Link className="textLink" href="/report-incident">Practice reporting <span aria-hidden="true">→</span></Link>
      </aside>
    </>
  );
}
