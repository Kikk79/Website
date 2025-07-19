# TechSphere Website

This project contains a simple marketing website for the fictional IT company **TechSphere**. It was bootstrapped with [Vite](https://vitejs.dev/) and uses **React** with **TypeScript** and **Tailwind CSS**.

## Available Scripts

- `npm install` – install dependencies
- `npm run dev` – start a local development server
- `npm run build` – create a production build in the `dist/` folder
- `npm run preview` – preview the production build
- `npm run lint` – run ESLint

## Deployment Notes

The `vite.config.ts` file sets `base: './'` so the site can be opened from the `dist/` folder without a custom server. Simply run `npm run build` and open `dist/index.html` in your browser.
