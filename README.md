# Funique Earthverse 3D Landing Page

A modern, interactive 3D landing page built with Next.js, React, Three.js, and shadcn/ui for Funique Earthverse - an XR immersive exploration education platform.

## Features

- 🎨 **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- 🌐 **Bilingual Support**: Chinese and English language switching
- 🎭 **3D Interactive Elements**: Three.js powered 3D models and particle effects
- 📱 **Responsive Design**: Fully responsive across all devices
- ⚡ **Performance Optimized**: Next.js 14 with App Router
- 🎬 **Smooth Animations**: Framer Motion for elegant transitions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React + shadcn/ui
- **3D Rendering**: Three.js + @react-three/fiber + @react-three/drei
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
LandingPage/
├── app/
│   ├── layout.tsx          # Root layout with language provider
│   ├── page.tsx            # Main page combining all sections
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── sections/          # Page sections
│   ├── 3d/                # Three.js components
│   └── LanguageToggle.tsx # Language switcher
├── contexts/
│   └── LanguageContext.tsx # Language context provider
├── lib/
│   ├── translations.ts    # Translation content
│   └── utils.ts           # Utility functions
└── public/
    └── models/            # 3D model files (placeholders)
```

## Sections

1. **Hero Section**: Full-screen banner with 3D particle background and bee model
2. **About Section**: Brand positioning and core technology highlights
3. **Content Catalog**: XR content catalog with interactive 3D model viewer
4. **Platform Section**: Funique+ platform and business cooperation
5. **Solutions Section**: Educational solutions and pricing
6. **Contact Section**: Contact form and footer

## Customization

### Adding 3D Models

Place your 3D model files (`.glb`, `.gltf`) in the `public/models/` directory and update the model loading logic in the 3D components.

### Modifying Translations

Edit `lib/translations.ts` to update content in both languages.

### Styling

Modify `app/globals.css` and component files to customize the design.

## Build for Production

```bash
npm run build
npm start
```

## License

© 2024 Funique Earthverse. All rights reserved.

