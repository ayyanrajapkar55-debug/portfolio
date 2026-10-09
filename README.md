# Ayyan Rajapkar — Personal Developer Portfolio

A minimal, high-contrast, responsive developer portfolio for Ayyan Rajapkar (Third-Year B.Tech Computer Science student, CMPN A).

Designed and built from scratch with semantic HTML5, modern CSS custom properties, vanilla JavaScript, and automated GitHub Actions deployment.

---

## 🌟 Highlights & Features

- **Architectural Clarity**: Pure vanilla stack (`HTML5`, `CSS3`, `JavaScript ES6+`) with zero heavyweight dependencies or framework runtime overhead.
- **Custom Aesthetic**: Bespoke dark developer palette with deep obsidian canvas (`#080C14`), elevated surfaces, hairline borders, and precision teal/cyan accents.
- **Three Connected Pages**:
  - `index.html`: Hero introduction, SIH achievements, featured project highlights, core capabilities, and contact CTAs.
  - `projects.html`: Interactive project catalog with live category filtering (`All`, `Frontend & Web`, `Python & Systems`, `Algorithms & AI`) and CSS-crafted technical visual cards.
  - `about.html`: Academic background (B.Tech Computer Science / CMPN A), Smart India Hackathon milestones (SIH 2026 Round 2 & SIH 2025), categorized technical toolkit, and active growth roadmap.
- **Micro-Interactions & UX**:
  - One-click copy email button with an accessible floating toast feedback notification.
  - Responsive mobile drawer navigation with escape key listener and outside click handling.
  - Smooth scroll-reveal animations respecting the `prefers-reduced-motion` media query.
  - Fully accessible keyboard focus states (`:focus-visible`) and semantic skip navigation links.
- **CI/CD Automation**: GitHub Actions workflow (`.github/workflows/deploy.yml`) for automated asset verification and zero-config deployment to GitHub Pages.

---

## 📁 Repository Structure

```text
├── index.html                  # Home page
├── projects.html               # Projects showcase with interactive filtering
├── about.html                  # Background, hackathon milestones, toolkit
├── css/
│   └── style.css               # Design tokens, components, responsive layout
├── js/
│   └── main.js                 # Navigation, filtering, clipboard, reveal animations
├── assets/
│   └── favicon.svg             # Monogram developer icon
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated deployment workflow
└── README.md
```

---

## 🚀 Running & Previewing Locally

Because the project is built with standard web technologies, no build steps (`npm install` or compilation) are required.

### Option 1: Python HTTP Server (Recommended)

Run either of the following from the root directory:

```bash
# Python 3
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your web browser.

### Option 2: Node.js `npx serve`

```bash
npx serve .
```

### Option 3: VS Code Live Server

Right-click `index.html` in VS Code and click **"Open with Live Server"**.

---

## 🛠️ GitHub Pages Deployment

To activate automatic hosting on GitHub Pages:
1. Push code to the `main` branch.
2. In your GitHub repository, navigate to **Settings** &rarr; **Pages**.
3. Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
4. Pushes to `main` will automatically build and publish the site.

---

## 📬 Contact & Links

- **GitHub**: [@ayyanrajapkar55-debug](https://github.com/ayyanrajapkar55-debug)
- **Email**: [ayyanrajapkar55@gmail.com](mailto:ayyanrajapkar55@gmail.com)
