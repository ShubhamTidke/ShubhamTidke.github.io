# Shubham Tidke — Portfolio

Personal portfolio website built with React and Vite.  
Live at: **[ShubhamTidke.github.io](https://ShubhamTidke.github.io)**

## Tech Stack

| Layer | Tool |
|---|---|
| UI | React 18 |
| Build | Vite 6 |
| Styling | Tailwind CSS 3 |
| Icons | react-icons |
| Deploy | GitHub Pages (`gh-pages`) |

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky nav with Resume button and icon links
│   ├── Hero.jsx            # Typewriter animation, CTA buttons
│   ├── Experience.jsx      # Vertical timeline of work history
│   ├── Projects.jsx        # Card grid with hackathon badges and demo links
│   ├── Skills.jsx          # Grouped skill chips by category
│   ├── Education.jsx       # Degree cards with coursework
│   ├── Footer.jsx          # Social links and copyright
│   ├── SectionHeading.jsx  # Shared animated section title
│   └── TechPill.jsx        # Shared technology chip/badge
├── hooks/
│   ├── useInView.js        # IntersectionObserver — triggers scroll animations
│   └── useTypewriter.js    # Cycles through strings with type/erase animation
└── data/
    └── portfolio.js        # All content in one place — edit this to update the site
```

## Getting Started

**Prerequisites:** Node.js 18+ and npm (or use the `React` conda environment)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:5173

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Updating Content

All site content lives in **`src/data/portfolio.js`**. No component changes needed for:

- Changing your name, email, location, or links → `personal`
- Adding/editing experience entries → `experience`
- Adding/editing projects or demo links → `projects`
- Updating skills → `skills`
- Updating education or coursework → `education`

## Deployment (GitHub Pages)

This repo is configured to deploy to `https://ShubhamTidke.github.io`.

```bash
# Build and push to the gh-pages branch
npm run deploy
```

Then go to **GitHub → Settings → Pages** and set the source to the `gh-pages` branch.

## License

MIT
