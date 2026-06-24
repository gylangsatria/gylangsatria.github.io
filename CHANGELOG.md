# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- Sitemap (`sitemap.xml`) covering all pages and posts for Google indexing
- `robots.txt` pointing to the sitemap location
- Light/dark theme toggle with localStorage persistence
- Bootstrap-style mobile hamburger menu (minimal icon, clean dropdown panel)
- Duplicate theme toggle button inside the mobile nav panel so switching is always accessible
- CSS custom properties for both light and dark color schemes
- Meta `color-scheme` and `theme-color` tags for native browser theme support
- `README.md` with project overview, setup instructions, and structure
- `CHANGELOG.md` for release history tracking
- Back-to-top floating button with smooth scroll and scroll detection
- Post navigation links (`navlinks.html`) as a direct child of `article.post` for consistent width

### Changed

- Refactored all static color values in `override.css` to use CSS variables for seamless theme switching
- Replaced the card-style hamburger button with a transparent Bootstrap-like toggler
- Replaced individually-bordered nav items with clean text links and subtle hover highlights
- Hid the desktop theme toggle on mobile in favor of the nav panel version
- Updated theme toggle JavaScript to support multiple toggle buttons simultaneously

### Fixed

- Mobile navigation panel now spans edge-to-edge within the page shell container
