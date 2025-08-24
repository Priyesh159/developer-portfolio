# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.0 developer portfolio project using the App Router, TypeScript, and Tailwind CSS. It's a fresh create-next-app template configured with modern tooling including Turbopack for faster development builds.

## Common Development Commands

```bash
# Development server with Turbopack (faster builds)
npm run dev

# Production build with Turbopack
npm run build

# Start production server
npm start

# Lint code using ESLint
npm run lint
```

## Architecture & Structure

- **Framework**: Next.js 15.5.0 with App Router architecture
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist and Geist Mono fonts from Google Fonts
- **TypeScript**: Strict mode enabled with path aliases (`@/*` -> `./src/*`)

### Key Directories

- `src/app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with font configuration
  - `page.tsx` - Home page component
  - `globals.css` - Global Tailwind CSS styles
- `public/` - Static assets (SVG icons)

### Configuration Files

- `next.config.ts` - Next.js configuration (currently minimal)
- `tsconfig.json` - TypeScript configuration with strict mode and path aliases
- `eslint.config.mjs` - ESLint configuration extending Next.js rules
- `postcss.config.mjs` - PostCSS configuration for Tailwind

## Development Notes

- Uses Turbopack for both development and production builds (faster than Webpack)
- TypeScript strict mode is enabled - all new code should be properly typed
- ESLint is configured with Next.js and TypeScript rules
- The project uses CSS-in-JS via Tailwind classes for styling
- Font optimization is handled automatically via `next/font/google`