import type { Metadata } from "next";
import { IncidentTrainer } from "../components/IncidentTrainer";

export const metadata: Metadata = {
  title: "Report a Security Incident",
  description: "Practice capturing the right facts and reporting a fictional cybersecurity incident.",
};

export default function ReportIncidentPage() {
  return <IncidentTrainer />;
}
