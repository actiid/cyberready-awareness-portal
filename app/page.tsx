import type { Metadata } from "next";
import { Dashboard } from "./components/Dashboard";

export const metadata: Metadata = {
  title: "Training Dashboard",
  description: "Build practical cybersecurity habits with short, beginner-friendly lessons.",
};

export default function Home() {
  return <Dashboard />;
}
