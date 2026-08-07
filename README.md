# CyberReady security awareness training portal

CyberReady is a fictional internal cybersecurity awareness training portal designed around practical government IT scenarios.

The project is completely local: the pages, styles, interactive tools, and social-preview image are stored in this folder. The quiz, password checker, progress tracker, and incident practice form do not send data to a server.

## Included pages

- Training dashboard
- Phishing Quiz
- Password Strength Checker
- MFA Guide
- Secure Browsing Tips
- Data Classification
- Report a Security Incident

## Safety boundaries

- Do not enter real passwords, personal information, CUI, classified data, or real incident details.
- The incident form is a simulation and does not contact a SOC or service desk.
- Government policies differ. Agency policy and approved tools always take priority over this general training content.

## Run the website on your computer

You need Node.js version 22.13 or newer and pnpm.

1. Open a terminal in this project folder.
2. Install the project packages once:

   ```powershell
   pnpm install
   ```

3. Start the local website:

   ```powershell
   pnpm dev
   ```

4. Open the local address printed in the terminal (normally `http://localhost:5173`).
5. Stop it by returning to the terminal and pressing `Ctrl+C`.

To check that the full website can be built:

```powershell
pnpm build
```

## The important files

```text
app/
├── page.tsx                         Dashboard route
├── globals.css                      All visual styling
├── layout.tsx                       Shared page shell and metadata
├── components/                      Reusable and interactive pieces
├── lib/modules.ts                   The six lesson definitions
├── phishing-quiz/page.tsx           Quiz route
├── password-checker/page.tsx        Password route
├── mfa-guide/page.tsx               MFA route
├── secure-browsing/page.tsx         Browsing route
├── data-classification/page.tsx     Classification route
└── report-incident/page.tsx         Reporting route

public/
└── og.png                           Local social-preview image
```

## Repository setup

The `.gitignore` file excludes generated and machine-specific folders such as `node_modules`, `dist`, `work`, and `.vinext`. Commit the source files and lockfile; another computer can recreate the development packages with `pnpm install`.
