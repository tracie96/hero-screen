# Hero Screen - coup. Landing Page

## Tech Stack

### Core Technologies
- **Vite 5.0.8** - Next generation frontend tooling and build system
- **React 18.2.0** - UI library for building component-based interfaces
- **TypeScript 5.2.2** - Type safety and enhanced developer experience
- **Tailwind CSS 3.4.0** - Utility-first CSS framework for styling

### Additional Libraries
- **Framer Motion 10.16.16** - Animation library for React (used for animated bird elements)
- **PostCSS 8.4.32** - CSS processing tool
- **Autoprefixer 10.4.16** - CSS vendor prefixing

### Development Tools
- **ESLint** - Code linting and quality checks
- **@vitejs/plugin-react** - Vite plugin for React support
- **TypeScript ESLint** - TypeScript-specific linting rules

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will start the development server at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
hero-screen/
├── index.html              # Main HTML file
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
└── src/
    ├── main.tsx            # React entry point
    ├── App.tsx             # Main App component
    ├── index.css           # Global styles with Tailwind
    ├── vite-env.d.ts       # Vite type definitions
    └── components/
        ├── Header.tsx      # Header component
        ├── Hero.tsx        # Hero section container
        ├── HeroContent.tsx # Hero content
        ├── BackgroundElements.tsx # Birds and clouds
        └── ScrollIndicator.tsx # Scroll indicator
```

## Assumptions & Implementation Notes

### Design & Styling
- **Custom Font**: The project uses "General Sans" variable font family, loaded via `@font-face` in `index.css`. The font supports weights 200-700 and includes both normal and italic variants.
- **Color Scheme**: Uses a custom blue color (`#007AFF` defined as `blue-darker` in Tailwind config) and a gradient background (light blue tones from `#F0F8FF` to `#D6E9FF`).
- **Responsive Design**: Mobile-first approach with breakpoints using Tailwind's `max-md:` and `max-sm:` utilities. Background decorative elements (birds) are hidden on mobile devices.

### Component Architecture
- **SVG Assets**: All SVG files are imported as ES modules and used with `<img>` tags. This approach allows Vite to handle asset optimization.
- **Z-Index Layering**: Uses a custom z-index system:
  - `z-[1]` - Background elements (decorations, birds)
  - `z-[2]` - Main content (header, hero content, scroll indicator)
- **Animation Strategy**: 
  - Custom Tailwind animations for simple effects (float, bounce, slide-up)
  - Framer Motion for complex animated elements (flying birds with diagonal paths)
  - CSS keyframes defined in Tailwind config for reusable animations

### Technical Decisions
- **No State Management**: The application is purely presentational with no global state management library (no Redux, Zustand, etc.) as it's a static hero section.
- **Component Structure**: Components are organized by feature/functionality rather than by type (e.g., all components in a single `components/` folder).
- **Asset Organization**: SVG assets are stored in `src/assets/` and fonts in `src/assets/fonts/`.
- **Development Server**: Configured to run on port 3000 with auto-open browser enabled.

### Browser Compatibility
- Assumes modern browser support for:
  - CSS custom properties
  - ES6+ JavaScript features
  - CSS Grid and Flexbox
  - Variable fonts (for General Sans)