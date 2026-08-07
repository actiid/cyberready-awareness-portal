import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { ModuleCompleteButton } from "../components/ModuleCompleteButton";

export const metadata: Metadata = {
  title: "Secure Browsing Tips",
  description: "Safer habits for links, downloads, browsers, and remote work.",
};

const tips = [
  ["01", "Start from a trusted path", "Use a known bookmark, approved portal, or manually typed address for important systems. Search results and ads can imitate official services."],
  ["02", "Read the whole domain", "Check the text immediately before the first single slash. A padlock means the connection is encrypted; it does not prove the site is honest."],
  ["03", "Treat downloads as code", "Files can contain harmful programs or macros. Download only from approved sources and let security tools finish scanning."],
  ["04", "Update and restart", "Browser updates repair known weaknesses. A pending restart can mean the fix is downloaded but not yet active."],
  ["05", "Separate work and personal use", "Use the managed work profile, approved extensions, and agency storage. Personal syncing can move data into unapproved accounts."],
  ["06", "Use approved remote access", "Public Wi-Fi is not a reason to bypass policy. Use your agency VPN or zero-trust access method and avoid discussing sensitive work in public."],
];

export default function SecureBrowsingPage() {
  return (
    <>
      <PageIntro
        number="04"
        eyebrow="Navigate with care"
        title="Secure Browsing Tips"
        description="A secure browser cannot make every website safe. Your choices still decide what opens, downloads, and leaves the network."
        duration="5 minutes"
      />

      <section className="urlLesson">
        <div className="browserChrome">
          <span /><span /><span />
          <div className="addressBar"><b aria-hidden="true">⌕</b><span>https://login.agency.gov.example.security-check.example/</span></div>
        </div>
        <div className="urlAnalysis">
          <span className="dangerPointer">Actual domain</span>
          <strong>security-check.example</strong>
          <p>The words “agency.gov” appear inside the address, but they are not the real domain. Read from the first slash backward and identify the registered domain.</p>
        </div>
      </section>

      <section className="contentSection">
        <div className="sectionHeading compact"><div><span className="eyebrow">Six everyday habits</span><h2>Browse like the system matters</h2></div></div>
        <div className="tipGrid">
          {tips.map(([number, title, copy]) => (
            <article className="tipCard" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <div className="warningBanner calm"><span aria-hidden="true">i</span><div><strong>A certificate warning is a stop sign.</strong><p>Do not click through it on a government system. Capture the error and contact the service desk through a known channel.</p></div></div>

      <div className="lessonCompleteRow"><div><strong>Safer route selected.</strong><p>Use these checks before trusting a site, file, or network.</p></div><ModuleCompleteButton moduleId="browsing" /></div>
    </>
  );
}
