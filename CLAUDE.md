# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build**: `npm run build` (production build with Turbopack)
- **Start**: `npm start` (starts production server)
- **Lint**: `npm run lint` (ESLint with Next.js configuration)

## Project Structure

This is a Next.js 15 portfolio project using the App Router with TypeScript and Tailwind CSS v4.

### Key Architecture

- **Framework**: Next.js 15 with App Router (`src/app/` directory)
- **Styling**: Tailwind CSS v4 with custom theme configuration in `globals.css`
- **Fonts**: Geist Sans and Geist Mono loaded from Google Fonts
- **TypeScript**: Strict mode enabled with path aliases (`@/*` → `./src/*`)
- **Build tool**: Turbopack enabled for both dev and build commands

### Project Layout

```
src/
  app/
    layout.tsx    # Root layout with font configuration
    page.tsx      # Homepage component
    globals.css   # Tailwind imports and theme variables
public/           # Static assets (SVG icons)
```

### Styling System

- Uses Tailwind CSS v4 with inline theme configuration
- Custom CSS variables for background/foreground colors with dark mode support
- Font variables configured for Geist Sans (`--font-geist-sans`) and Geist Mono (`--font-geist-mono`)
- Responsive design with `sm:` breakpoints

### Development Notes

- All builds use Turbopack for performance
- TypeScript strict mode is enabled
- ESLint configured with Next.js and TypeScript presets
- Path aliases configured for clean imports (`@/` prefix)