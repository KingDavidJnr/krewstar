# Krewstar Web UI

### **Creating commercials and campaigns that deliver real business impact.**

This project is a high-performance rebuild of the [Krewstar](https://krewstar.framer.website/) Framer site, ported to **React + Vite** for complete control, self-hosting flexibility on Vercel, and custom domain mapping.

---

## The Tech Stack

To replicate the "premium" feel of a Framer site while maintaining the speed of a hand-coded React app, this project utilizes:

* **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) (SWC for lightning-fast builds).
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS for a sleek dark-mode UI).
* **Animation:** [Framer Motion](https://www.framer.com/motion/) (Smooth page transitions and micro-interactions).
* **Routing:** [React Router v6](https://reactrouter.com/) (Client-side multi-page navigation).
* **Icons:** [Lucide React](https://lucide.dev/) (Clean, consistent iconography).

---

## ✨ Key Features

* **Multi-Page Architecture:** Includes dedicated routes for `Home`, `About Us`, `Work`, and `Services`.
* **Framer-Grade Motion:** Utilizes `AnimatePresence` for buttery-smooth entries and exits when switching pages.
* **Responsive Navigation:** A custom glassmorphism Navbar that transforms into a sleek hamburger menu on mobile devices.
* **Vercel Optimized:** Includes a `vercel.json` configuration to handle client-side routing and prevent 404 errors on refresh.
* **Production Ready:** Built with a "Mobile-First" approach, ensuring the high-impact visuals look great on any screen size.

---

## 🛠️ Getting Started

### 1. Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/KingDavidJnr/krewstar.git
cd krewstar
npm install

```

### 2. Development

Start the local development server:

```bash
npm run dev

```

The app will be available at `http://localhost:5173`.

### 3. Build for Production

Create an optimized build for deployment:

```bash
npm run build

```

---

## Project Structure

```text
src/
├── components/     # Reusable UI (Navbar, Footer, PageTransitions)
├── pages/          # Full page views (Home, About, Work, Services)
├── styles/         # Global Tailwind CSS configurations
└── App.jsx         # Main routing and layout logic

```

---

## Deployment

This project is configured for one-click deployment to **Vercel**.

1. Push your code to GitHub.
2. Import the project into the Vercel Dashboard.
3. Vercel will automatically detect the Vite setup and deploy.
4. Map your custom domain in the **Settings > Domains** tab.

---

> **About Krewstar:** We are a production partner and creative agency that creates commercials and campaigns that deliver real business impact.

---