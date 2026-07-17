# **Encotech Website (Frontend)**

The official public-facing website for Encotec, built with React, Vite, TypeScript, Tailwind CSS, and integrated with the Encotec CMS for dynamic content and server-side SEO rendering.

**Live Website:** [https://encotech-six.vercel.app](https://encotech-six.vercel.app)  
**Live CMS Dashboard:** [https://cms-encotec.tgtpartner.com](https://cms-encotec.tgtpartner.com)

---

[![Status: Active](https://img.shields.io/badge/Status-Active-brightgreen.svg)]()
[![Node.js](https://img.shields.io/badge/Node.js-18.x-blue.svg)]()
[![Vite](https://img.shields.io/badge/Vite-v5-646CFF.svg)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3-38B2AC.svg)]()
[![Zustand](https://img.shields.io/badge/Zustand-State-black.svg)]()

<br />

The Encotec frontend is a fast, responsive Single Page Application (SPA) designed to showcase Encotec's global engineering and project management services. It integrates a custom Vercel serverless pre-renderer to dynamically inject SEO meta tags, structured JSON-LD schema, and customized `sitemap.xml` and `robots.txt` files straight from the CMS database before serving pages to crawler bots.

---

## 📑 Table of Contents

- [Core Principles & Features](#-core-principles--features)
- [System Architecture](#-system-architecture)
- [Folder Structure](#-folder-structure)
- [Developer Setup](#-developer-setup)
- [Production Deployment](#-production-deployment)
- [Serverless SEO Engine](#-serverless-seo-engine)

---

## ✨ Core Principles & Features

- **Dynamic Content Injection**: Pulls page sections, testimonials, locations, and services directly from the PostgreSQL-backed CMS.
- **Dynamic SEO Rendering**: Automatically returns fully populated meta titles, descriptions, open graph cards, and schema definitions.
- **Premium Fluid Motion**: Subtle micro-interactions, spring transitions, and interactive map displays using Framer Motion and Lucide icons.
- **Contact CRM Integration**: Connects contact forms directly to the CMS lead logging CRM endpoints.

---

## 🚀 System Architecture

Built for Speed, SEO, and Premium User Experience.

- **Client App**: React 18 SPA compiled using Vite and bundled into static files.
- **Styles**: Tailwind CSS utility framework for custom grid layouts and responsive designs.
- **Serverless API Layer**: Host platform serverless functions (e.g. Vercel Functions) to handle dynamic routing, sitemap, robots rules, and pre-rendering.
- **State Store**: Zustand store to sync and cache data fetched from the CMS backend.

---

## 📂 Folder Structure

```text
encotech/
├── api/                       # Serverless routing and pre-render endpoints
│   ├── render.ts              # Pre-renders HTML with dynamic SEO meta and schema tags
│   ├── robots.ts              # Fetches and returns robots.txt rules from CMS
│   └── sitemap.ts             # Fetches and returns dynamic sitemap.xml from CMS
├── public/                    # Root static assets and images
├── scripts/                   # Post-build helpers
│   └── copy-template.js       # Copies index.html template and prepares for serverless rewrite
├── src/
│   ├── components/            # Layout blocks, headers, footer, maps, and UI elements
│   ├── pages/                 # Website route views
│   ├── store/                 # Zustand store and data sync controls
│   ├── App.tsx                # Client router and main entry
│   └── main.tsx               # DOM renderer entry point
├── vercel.json                # Vercel configuration for rewrite routing to Serverless SEO engine
├── vite.config.ts             # Vite compiler definitions
└── README.md                  # Project documentation (You are here!)
```

---

## 💻 Developer Setup

Follow the steps below to serve the website locally.

### 1. Requirements
Ensure the target machine has:
- **Node.js** (v18.0.0 or later)
- **npm** (v9.0.0 or later)

### 2. Install Dependencies
Clone the repository and install the npm packages:
```bash
git clone <repository-url>
cd encotech
npm install
```

### 3. Environment Allocation
Generate a `.env` file at the root of the project:
```env
# URL of the hosted CMS API or local development server
VITE_CMS_API_URL="" # e.g. http://localhost:3000
```

### 4. Run the Application
Start the local development server:
```bash
npm run dev
```
The website is now running at `http://localhost:5173`.

---

## 🚀 Production Deployment

When deploying to production (such as Vercel), configure the environment variable in your project settings:

* **`VITE_CMS_API_URL`**: Your live CMS endpoint (e.g. `https://cms.yourdomain.com`).

---

## ⚙️ Serverless SEO Engine

To allow client-side react routers (SPAs) to be read correctly by SEO bots, the build compiles the React application and routes all incoming requests (`/` and wildcard `/:path*`) to a Serverless function (`api/render.ts`).

1. **Vite Build**: The build script runs `vite build` followed by `node scripts/copy-template.js`.
2. **Template Conversion**: The script copies `dist/index.html` to `api/template.html` and deletes the static index file.
3. **Route Rewriting**: `vercel.json` rewrites all routing queries to the Serverless handler.
4. **Dynamic Metadata Injection**: When a request comes in, the function queries the CMS for the path, replaces meta comments inside `template.html` with current titles, social graphs, and structured JSON-LD schemas, and returns the response.

---

<p align="center">
  <b>© 2026 Encotec Engineering</b><br>
  Strictly Private and Confidential Codebase.
</p>
