"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { trainingModules } from "../lib/modules";

export function PortalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portalShell">
      <aside className={`sidebar ${menuOpen ? "sidebarOpen" : ""}`} aria-label="Training navigation">
        <div className="brandBlock">
          <Link className="brand" href="/" onClick={() => setMenuOpen(false)}>
            <span className="brandShield" aria-hidden="true">✓</span>
            <span>
              <strong>CyberReady</strong>
              <small>Awareness Center</small>
            </span>
          </Link>
        </div>

        <nav className="sideNav">
          <span className="navLabel">Learning center</span>
          <Link
            className={`navItem ${pathname === "/" ? "active" : ""}`}
            href="/"
            onClick={() => setMenuOpen(false)}
          >
            <span className="navNumber">00</span>
            Dashboard
          </Link>
          {trainingModules.map((module) => (
            <Link
              className={`navItem ${pathname === module.href ? "active" : ""}`}
              href={module.href}
              key={module.id}
              onClick={() => setMenuOpen(false)}
            >
              <span className="navNumber">{module.number}</span>
              {module.title}
            </Link>
          ))}
        </nav>

        <div className="sidebarHelp">
          <span className="helpDot" aria-hidden="true" />
          <div>
            <strong>Need real help?</strong>
            <p>Use your organization&apos;s approved service desk or SOC channel.</p>
          </div>
        </div>
      </aside>

      {menuOpen && (
        <button className="menuScrim" aria-label="Close menu" onClick={() => setMenuOpen(false)} />
      )}

      <div className="contentColumn">
        <header className="topbar">
          <button
            className="menuButton"
            type="button"
            aria-label="Open training menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className="environmentLabel">
            <span className="statusPulse" aria-hidden="true" />
            Fictional training environment
          </div>
          <div className="topbarRight">
            <span className="classificationBadge">UNCLASSIFIED // TRAINING</span>
            <span className="profileBadge" aria-hidden="true">TR</span>
          </div>
        </header>

        <main id="main-content" className="mainContent">{children}</main>

        <footer className="siteFooter">
          <p>CyberReady is a fictional awareness portal. Do not enter real credentials, personal data, CUI, or classified information.</p>
          <span>Training build 1.0</span>
        </footer>
      </div>
    </div>
  );
}
