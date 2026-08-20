# NISM Learn

An interactive, chapter-by-chapter study app for the NISM Series-X Investment Adviser certifications, built from the workbook content in `NISM-Series-X-A Investment Adviser Level 1 knowledge/`.

Plain HTML/CSS/JS — no build step, no dependencies to install.

## Running it locally

Open this with a local web server, **not** by double-clicking `index.html`. Progress is saved in the browser's `localStorage`, and that only persists reliably when the app is served over `http://localhost` — opening the file directly (`file://...`) is blocked or unreliable for storage in some browsers (Firefox blocks it outright).

### Option A — Python (simplest, already set up)

From the `NISM App` folder:

```bash
python -m http.server 8877
```

Then open **http://localhost:8877** in your browser.

A launch config for this is already saved at `.claude/launch.json` under the name `nism-app`, if you're driving this through Claude Code's browser preview tool.

### Option B — Node

If you have Node installed and prefer not to use Python:

```bash
npx serve . -l 8877
```

Then open **http://localhost:8877**.

### Option C — VS Code Live Server

If you use VS Code, install the "Live Server" extension, right-click `index.html`, and choose **Open with Live Server**.

## Stopping the server

Press `Ctrl+C` in the terminal running the server.

## Your progress

Quiz scores and chapter completion are stored only in your browser's local storage on this device (key `nismLearnProgressV1`) — nothing is sent anywhere. Clearing your browser's site data for `localhost:8877` will reset your progress.
