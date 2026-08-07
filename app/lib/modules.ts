export type TrainingModule = {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  time: string;
  tone: "teal" | "orange" | "blue" | "violet";
};

export const trainingModules: TrainingModule[] = [
  {
    id: "phishing",
    number: "01",
    title: "Phishing Quiz",
    eyebrow: "Spot the bait",
    description: "Practice identifying suspicious messages before they reach an agency network.",
    href: "/phishing-quiz",
    time: "5 min",
    tone: "orange",
  },
  {
    id: "passwords",
    number: "02",
    title: "Password Strength Checker",
    eyebrow: "Build a better lock",
    description: "Test a made-up example and learn what makes a passphrase resilient.",
    href: "/password-checker",
    time: "4 min",
    tone: "teal",
  },
  {
    id: "mfa",
    number: "03",
    title: "MFA Guide",
    eyebrow: "Add another layer",
    description: "Understand authentication factors, passkeys, security keys, and safer backups.",
    href: "/mfa-guide",
    time: "6 min",
    tone: "blue",
  },
  {
    id: "browsing",
    number: "04",
    title: "Secure Browsing Tips",
    eyebrow: "Navigate with care",
    description: "Use browsers, downloads, links, and public Wi-Fi without taking needless risks.",
    href: "/secure-browsing",
    time: "5 min",
    tone: "violet",
  },
  {
    id: "data",
    number: "05",
    title: "Data Classification",
    eyebrow: "Handle with purpose",
    description: "Choose safe storage and sharing habits for public, internal, CUI, and classified data.",
    href: "/data-classification",
    time: "7 min",
    tone: "orange",
  },
  {
    id: "incident",
    number: "06",
    title: "Report a Security Incident",
    eyebrow: "Raise the flag fast",
    description: "Rehearse what to capture, what not to do, and how to notify the right team.",
    href: "/report-incident",
    time: "5 min",
    tone: "teal",
  },
];

export const progressStorageKey = "cyberready-completed-modules";
