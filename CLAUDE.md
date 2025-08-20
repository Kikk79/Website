# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a marketing website for the fictional IT company "TechSphere", built as a modern React application with TypeScript and Tailwind CSS. It's a single-page application (SPA) with client-side routing that showcases services, company information, and contact details.

## Development Commands

- `npm install` – Install dependencies
- `npm run dev` – Start development server (usually on http://localhost:5173)
- `npm run build` – Create production build in `dist/` folder
- `npm run preview` – Preview the production build locally
- `npm run lint` – Run ESLint for code quality checks

## Architecture

### Application Structure
- **Entry point**: `src/main.tsx` - React app initialization
- **Root component**: `src/App.tsx` - Contains React Router setup with all route definitions
- **Layout system**: `src/components/Layout.tsx` - Provides consistent Navbar and Footer across all pages
- **Pages**: All located in `src/pages/` - Each route has its own page component
- **Reusable components**: All in `src/components/` - Shared UI components

### Routing Structure
The app uses React Router v6 with these routes:
- `/` → HomePage
- `/services` → ServicesPage  
- `/about` → AboutPage
- `/contact` → ContactPage
- `*` → NotFoundPage (404 fallback)

### Styling System
- **Framework**: Tailwind CSS with custom configuration
- **CSS Variables**: Primary color palette defined in `src/index.css` using CSS custom properties
- **Component Classes**: Custom utility classes defined in `@layer components` for buttons, cards, and layout
- **Design System**: Consistent spacing, typography, and component patterns throughout

### Key Technical Details
- **Build Tool**: Vite with React plugin
- **Base Path**: Configured as `'./'` for static deployment compatibility
- **TypeScript**: Strict mode enabled with separate configs for app and build tools
- **Icons**: Uses Lucide React (excluded from Vite optimizations)
- **Font**: Inter font family as primary sans-serif

### Component Architecture
- **Layout Pattern**: All pages wrapped in Layout component with Navbar/Footer
- **Component Separation**: Clear separation between page components and reusable UI components
- **Props Interface**: TypeScript interfaces defined for all component props

## Development Notes

The site is designed for static deployment - the production build can be served directly from the `dist/` folder without a server due to the `base: './'` configuration in Vite.