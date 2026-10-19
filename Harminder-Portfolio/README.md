# Harminder Singh Saini — portfolio

Dark terminal portfolio for Harminder Singh Saini. React, Vite, Tailwind, and Framer Motion.

```bash
npm install
npm run dev
npm run build
```

All copy, roles, metrics, projects, skills, and links live in `src/data/profile.js`. Sections render from that file.

To add a portrait later, set `avatar.src` in `src/data/profile.js` (for example `"/portrait.jpg"`). While it is `null`, the site shows the HS terminal placeholder. `src/components/Avatar.jsx` is the only place that renders it.

The resume download is `public/Harminder_Saini_Resume.pdf`.
