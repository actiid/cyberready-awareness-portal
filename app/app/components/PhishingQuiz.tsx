"use client";

import { useState } from "react";
import { PageIntro } from "./PageIntro";
import { progressStorageKey } from "../lib/modules";

const questions = [
  {
    channel: "Email",
    sender: "IT Support <helpdesk@agency-support.example>",
    subject: "URGENT: Your mailbox will be removed in 30 minutes",
    message: "Keep your account active by signing in through the secure link below.",
    prompt: "What is the safest first action?",
    choices: [
      "Click the link and check whether the sign-in page looks real",
      "Reply and ask the sender if the warning is legitimate",
      "Use a known help-desk channel to verify the message",
    ],
    correct: 2,
    explanation: "Urgency and a lookalike support domain are warning signs. Verify through a phone number, portal, or contact you already trust—not through the message.",
  },
  {
    channel: "Chat",
    sender: "Pat (Division Director)",
    subject: "Quick favor before the meeting",
    message: "I cannot take a call. Buy four gift cards and send me the codes right away. Keep this confidential.",
    prompt: "Which clue is most important?",
    choices: [
      "The message is short",
      "It requests secrecy, speed, and an unusual purchase",
      "The director says they are in a meeting",
    ],
    correct: 1,
    explanation: "Attackers combine authority, urgency, secrecy, and an unusual payment request. Verify the person using a separate, approved channel.",
  },
  {
    channel: "SMS",
    sender: "+1 (202) 555-0147",
    subject: "MFA reset notice",
    message: "Your token expires today. Reply with the six-digit code you just received so security can reactivate it.",
    prompt: "Why should this be reported?",
    choices: [
      "Security teams never use text messages",
      "One-time codes are authentication secrets and should not be shared",
      "Six-digit codes are no longer used",
    ],
    correct: 1,
    explanation: "A legitimate support person should not ask for your password, MFA code, or recovery code. Treat these as secrets and report the request.",
  },
  {
    channel: "Email",
    sender: "Benefits Team <benefits@agency.gov.example>",
    subject: "Updated leave policy",
    message: "The attached file is named Leave-Policy.pdf.exe. Open it today and acknowledge the new policy.",
    prompt: "What makes the attachment dangerous?",
    choices: [
      "The filename contains a hyphen",
      "The message discusses a policy",
      "The final extension is .exe, which can run a program",
    ],
    correct: 2,
    explanation: "Attackers hide executable files behind familiar-looking names. The final extension matters. Do not open it; report it through the approved channel.",
  },
  {
    channel: "Phone",
    sender: "Caller claiming to be the service desk",
    subject: "Remote troubleshooting",
    message: "The caller knows your name and office. They ask you to install remote-control software so they can fix an alert.",
    prompt: "What should you do?",
    choices: [
      "Install it because the caller knows internal details",
      "Hang up and contact the service desk using a known number",
      "Ask the caller to email the installer instead",
    ],
    correct: 1,
    explanation: "Public or stolen details do not prove identity. End the call and reconnect through a known, approved support path.",
  },
];

export function PhishingQuiz() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const question = questions[index];

  function choose(choiceIndex: number) {
    if (selected !== null) return;
    setSelected(choiceIndex);
    if (choiceIndex === question.correct) setScore((value) => value + 1);
  }

  function nextQuestion() {
    if (index === questions.length - 1) {
      const saved = JSON.parse(localStorage.getItem(progressStorageKey) || "[]") as string[];
      if (!saved.includes("phishing")) {
        localStorage.setItem(progressStorageKey, JSON.stringify([...saved, "phishing"]));
      }
      setFinished(true);
      return;
    }
    setIndex((value) => value + 1);
    setSelected(null);
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  return (
    <>
      <PageIntro
        number="01"
        eyebrow="Spot the bait"
        title="Phishing Quiz"
        description="Read each fictional message, notice how it tries to influence you, and choose the safest response."
        duration="5 minutes"
      />

      <div className="safetyBanner"><strong>Training only:</strong> all names, domains, phone numbers, and messages below are fictional.</div>

      {!finished ? (
        <section className="quizLayout">
          <div className="quizProgress" aria-label={`Question ${index + 1} of ${questions.length}`}>
            <div><strong>Scenario {index + 1}</strong><span>{questions.length} total</span></div>
            <div className="quizDots" aria-hidden="true">
              {questions.map((_, dotIndex) => <span className={dotIndex <= index ? "filled" : ""} key={dotIndex} />)}
            </div>
          </div>

          <article className="messageCard">
            <div className="messageHeader">
              <span className="channelTag">{question.channel}</span>
              <span className="mockTag">SIMULATED MESSAGE</span>
            </div>
            <dl className="messageMeta">
              <div><dt>From</dt><dd>{question.sender}</dd></div>
              <div><dt>Subject</dt><dd>{question.subject}</dd></div>
            </dl>
            <p className="messageBody">{question.message}</p>
          </article>

          <section className="answerPanel">
            <h2>{question.prompt}</h2>
            <div className="answerList">
              {question.choices.map((choice, choiceIndex) => {
                const isCorrect = selected !== null && choiceIndex === question.correct;
                const isWrong = selected === choiceIndex && choiceIndex !== question.correct;
                return (
                  <button
                    className={`answerButton ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}`}
                    type="button"
                    key={choice}
                    onClick={() => choose(choiceIndex)}
                    disabled={selected !== null}
                  >
                    <span className="answerLetter">{String.fromCharCode(65 + choiceIndex)}</span>
                    {choice}
                    {isCorrect && <span className="answerResult">Correct</span>}
                    {isWrong && <span className="answerResult">Not safest</span>}
                  </button>
                );
              })}
            </div>
          </section>

          {selected !== null && (
            <div className={`feedbackBox ${selected === question.correct ? "success" : "review"}`} role="status">
              <div>
                <strong>{selected === question.correct ? "Good call." : "Take another look."}</strong>
                <p>{question.explanation}</p>
              </div>
              <button className="primaryButton" type="button" onClick={nextQuestion}>
                {index === questions.length - 1 ? "See results" : "Next scenario"} <span aria-hidden="true">→</span>
              </button>
            </div>
          )}
        </section>
      ) : (
        <section className="resultCard" aria-live="polite">
          <span className="resultKicker">Quiz complete</span>
          <div className="scoreRing"><strong>{score}</strong><span>out of {questions.length}</span></div>
          <h2>{score === questions.length ? "Excellent threat spotting." : score >= 3 ? "Strong start—keep practicing." : "Every review makes you safer."}</h2>
          <p>The goal is not to memorize every trick. Pause when a message creates urgency, asks for secrets, or pushes you outside the normal process.</p>
          <button className="primaryButton" type="button" onClick={restart}>Try the quiz again</button>
        </section>
      )}
    </>
  );
}
