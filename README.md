# Accredian Enterprise Clone

A responsive frontend clone of the Accredian Enterprise website built using Next.js, Tailwind CSS, functional components, hooks, and mock API integration.

## Live Demo
https://accredian-clone-65xs92bkp-piyushnetke04s-projects.vercel.app 

## GitHub Repository
https://github.com/PiyushNetke04/Accredian-Clone

---

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Functional Components
- React Hooks (`useState`, `useEffect`)
- JSON Server (Mock API)
- Vercel (Deployment)

---

## Features Implemented

- Responsive Navbar with smooth scrolling
- Hero Section
- Stats Section
- Clients Section
- Accredian Edge Section
- Course Segmentation
- CAT Framework Section
- How It Works Section
- FAQ Accordion
- Testimonials Slider
- Contact Banner
- Footer
- Lead Capture Form
- Mock API Integration using JSON Server

---

# Setup Instructions

## Clone repository

```bash
git clone https://github.com/PiyushNetke04/Accredian-Clone
```

## Move into project folder

```bash
cd accredian-clone-js
```

## Install dependencies

```bash
npm install
```

## Run frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:3000
```

---

## Run mock API server

```bash
npx json-server --watch db.json --port 5000
```

Mock API runs on:

```bash
http://localhost:5000
```

---

# Approach Taken

I approached this assignment by first breaking the original website into sections/components such as:

- Navbar
- Hero
- Stats
- Clients
- FAQ
- Testimonials
- Footer etc.

I initially focused on replicating the UI structure and layout accurately using Next.js and Tailwind CSS.

After completing the UI clone, I improved interactivity by adding:

- smooth scrolling navigation
- FAQ dropdown functionality
- testimonial slider functionality

Finally, I implemented mock API integration using JSON Server and created a lead capture form that stores submitted user data.

---

# AI Usage Explanation

AI was primarily used for:

- Debugging errors
- Tailwind styling suggestions
- Improving UI alignment
- Fixing component structure issues
- Guidance for mock API integration
- Lead form integration troubleshooting

AI helped speed up development, but all components were manually integrated, tested, styled, and adjusted based on the original design.

---

# What I Modified Manually

I manually:

- Built all components
- Adjusted layouts to closely match the original website
- Fixed responsiveness issues
- Customized styling after comparing with the original site
- Debugged multiple runtime issues
- Integrated all sections together
- Tested form submission functionality
- Made UI improvements after reviewing visual mismatches

---

# Improvements I Would Make With More Time

- Convert mock API to production backend/API routes
- Improve mobile responsiveness further
- Add better animations using Framer Motion
- Improve accessibility
- Optimize performance and image loading
- Make testimonial section more dynamic
- Add backend database integration
