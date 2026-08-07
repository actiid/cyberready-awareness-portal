import type { Metadata } from "next";
import { PasswordChecker } from "../components/PasswordChecker";

export const metadata: Metadata = {
  title: "Password Strength Checker",
  description: "Learn how length, uniqueness, and safer authentication improve password security.",
};

export default function PasswordCheckerPage() {
  return <PasswordChecker />;
}
