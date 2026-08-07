import type { Metadata } from "next";
import { PhishingQuiz } from "../components/PhishingQuiz";

export const metadata: Metadata = {
  title: "Phishing Quiz",
  description: "Practice spotting phishing indicators in realistic government IT scenarios.",
};

export default function PhishingQuizPage() {
  return <PhishingQuiz />;
}
