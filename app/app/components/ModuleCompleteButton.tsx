"use client";

import { useEffect, useState } from "react";
import { progressStorageKey } from "../lib/modules";

export function ModuleCompleteButton({ moduleId }: { moduleId: string }) {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(progressStorageKey) || "[]") as string[];
    setComplete(saved.includes(moduleId));
  }, [moduleId]);

  function toggleComplete() {
    const saved = JSON.parse(localStorage.getItem(progressStorageKey) || "[]") as string[];
    const next = saved.includes(moduleId)
      ? saved.filter((id) => id !== moduleId)
      : [...saved, moduleId];
    localStorage.setItem(progressStorageKey, JSON.stringify(next));
    setComplete(next.includes(moduleId));
    window.dispatchEvent(new Event("cyberready-progress"));
  }

  return (
    <button className={`completeButton ${complete ? "isComplete" : ""}`} type="button" onClick={toggleComplete}>
      <span aria-hidden="true">{complete ? "✓" : "+"}</span>
      {complete ? "Lesson completed" : "Mark lesson complete"}
    </button>
  );
}
