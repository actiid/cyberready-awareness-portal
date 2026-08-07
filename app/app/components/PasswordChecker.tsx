"use client";

import { useMemo, useState } from "react";
import { PageIntro } from "./PageIntro";
import { ModuleCompleteButton } from "./ModuleCompleteButton";

const exampleWords = ["cedar", "orbit", "harbor", "lantern", "cobalt", "meadow", "signal", "comet", "river", "maple", "bridge", "tulip"];

function randomIndex(max: number) {
  const values = new Uint32Array(1);
  crypto.getRandomValues(values);
  return values[0] % max;
}

export function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const checks = useMemo(() => [
    { label: "At least 16 characters", met: password.length >= 16 },
    { label: "Uses several words or character types", met: /[a-z]/.test(password) && (/[A-Z]/.test(password) || /\d/.test(password) || /[^A-Za-z0-9]/.test(password)) },
    { label: "Avoids obvious sequences", met: password.length > 0 && !/(1234|qwerty|abcd|password|letmein)/i.test(password) },
    { label: "Not built from one repeated character", met: password.length > 0 && !/^(.)\1+$/.test(password) },
  ], [password]);

  const points = checks.filter((check) => check.met).length;
  const label = password.length === 0 ? "Waiting for an example" : points <= 1 ? "Weak" : points === 2 ? "Developing" : points === 3 ? "Strong" : "Very strong";

  function makeExample() {
    const words = Array.from({ length: 4 }, () => exampleWords[randomIndex(exampleWords.length)]);
    const number = randomIndex(90) + 10;
    setPassword(`${words.join("-")}-${number}!`);
  }

  return (
    <>
      <PageIntro
        number="02"
        eyebrow="Build a better lock"
        title="Password Strength Checker"
        description="Explore what makes a password stronger. This checker runs entirely in your browser and never sends or saves what you type."
        duration="4 minutes"
      />

      <div className="warningBanner">
        <span aria-hidden="true">!</span>
        <div><strong>Never enter a real password here—or in any training tool.</strong><p>Use a made-up example that is not connected to any account.</p></div>
      </div>

      <section className="checkerGrid">
        <div className="checkerPanel">
          <label htmlFor="password-example">Made-up password or passphrase</label>
          <div className="passwordField">
            <input
              id="password-example"
              type={show ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Try a fictional example…"
              autoComplete="off"
              spellCheck="false"
            />
            <button type="button" onClick={() => setShow((value) => !value)}>{show ? "Hide" : "Show"}</button>
          </div>
          <button className="exampleButton" type="button" onClick={makeExample}>Generate a learning example</button>

          <div className="strengthHeader"><span>Example strength</span><strong>{label}</strong></div>
          <div className={`strengthMeter strength${points}`} aria-hidden="true">
            {[0, 1, 2, 3].map((bar) => <span key={bar} />)}
          </div>
          <ul className="checkList">
            {checks.map((check) => (
              <li className={check.met ? "met" : ""} key={check.label}>
                <span aria-hidden="true">{check.met ? "✓" : "○"}</span>{check.label}
              </li>
            ))}
          </ul>
        </div>

        <aside className="lessonPanel">
          <span className="eyebrow">The bigger idea</span>
          <h2>Length and uniqueness beat clever substitutions.</h2>
          <p>A long, random passphrase such as several unrelated words is easier to remember and harder to guess than a short password with predictable swaps like <code>P@ssw0rd</code>.</p>
          <div className="miniLesson"><span>1</span><div><strong>Use a password manager</strong><p>Let an approved manager create and remember a different password for every account.</p></div></div>
          <div className="miniLesson"><span>2</span><div><strong>Turn on MFA</strong><p>A second factor reduces the damage if a password is stolen.</p></div></div>
          <div className="miniLesson"><span>3</span><div><strong>Follow agency policy</strong><p>Approved tools and password rules always take priority for government systems.</p></div></div>
        </aside>
      </section>

      <div className="lessonCompleteRow">
        <div><strong>Finished exploring?</strong><p>Mark this lesson complete to update the dashboard on this device.</p></div>
        <ModuleCompleteButton moduleId="passwords" />
      </div>
    </>
  );
}
