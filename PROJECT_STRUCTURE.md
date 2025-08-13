# ALA Law Firm Website - Project Structure

This is the optimized project structure for the Alka Law Associates (ALA) website built with Next.js.

## Project Structure

```
ala-app/
├── public/                 # Static assets
│   ├── favicon.ico        # Site favicon
│   ├── hero.png          # Hero section image
│   └── logo.svg          # Company logo
├── src/
│   ├── assets/           # Additional assets
│   │   └── ALA.svg      # ALA logo variant
│   ├── components/       # Reusable React components
│   │   ├── ContactModal.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Services.jsx
│   │   ├── TeamMember.jsx
│   │   └── TeamMemberCard.jsx
│   ├── pages/           # Next.js pages and API routes
│   │   ├── api/         # API endpoints
│   │   │   └── contact.js
│   │   ├── _app.js      # App component
│   │   ├── _document.js # Document component
│   │   └── index.js     # Home page
│   └── styles/          # Global styles
│       └── globals.css
├── .gitignore          # Git ignore rules
├── eslint.config.mjs   # ESLint configuration
├── jsconfig.json       # JavaScript project config
├── next.config.mjs     # Next.js configuration
├── package.json        # Dependencies and scripts
├── postcss.config.mjs  # PostCSS configuration
├── README.md           # Project documentation
└── tailwind.config.js  # Tailwind CSS configuration
```

## Key Features

- **Clean Architecture**: Well-organized component structure
- **Next.js Framework**: Server-side rendering and optimization
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-friendly layout
- **Contact Form**: API integration for contact submissions
- **Team Section**: Professional team member showcase
- **Services Section**: Legal service offerings

## Optimizations Applied

1. ✅ Removed build artifacts (`.next/` directory)
2. ✅ Removed empty directories (`layout/`, `ui/`)
3. ✅ Removed duplicate files (`index-new.js`)
4. ✅ Removed unused API routes (`hello.js`)
5. ✅ Removed unused assets (Next.js default SVGs)
6. ✅ Enhanced .gitignore with additional rules
7. ✅ Maintained clean dependency structure

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## File Purpose

- **Components**: Modular, reusable UI components
- **Pages**: Next.js routing and page components
- **API**: Backend endpoints for form submissions
- **Styles**: Global CSS and styling
- **Config Files**: Build tools and project configuration

This structure follows Next.js best practices and maintains clean separation of concerns.
