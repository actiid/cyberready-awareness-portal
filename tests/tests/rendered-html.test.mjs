import assert from "node:assert/strict";
import test from "node:test";

const routes = [
  ["/", "CyberReady", "Small habits"],
  ["/phishing-quiz", "Phishing Quiz", "Spot the bait"],
  ["/password-checker", "Password Strength Checker", "Never enter a real password"],
  ["/mfa-guide", "MFA Guide", "Something you know"],
  ["/secure-browsing", "Secure Browsing Tips", "Read the whole domain"],
  ["/data-classification", "Data Classification", "Controlled Unclassified Information"],
  ["/report-incident", "Report a Security Incident", "This form is a simulation"],
];

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

for (const [pathname, titleText, pageText] of routes) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, new RegExp(titleText, "i"));
    assert.match(html, new RegExp(pageText, "i"));
  });
}
