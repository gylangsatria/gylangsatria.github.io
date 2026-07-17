# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- Giscus comment widget integrated into post layout — allows visitors to leave comments and reactions via GitHub Discussions
- Giscus category set to "Announcements" so only maintainers and giscus bot can create new discussion threads
- Automatic theme sync between blog's manual dark/light toggle and giscus iframe via `postMessage`
- CSS styling for `.giscus-wrapper` — consistent border, spacing, and responsive layout matching the blog design
- `data-giscus-theme` attribute on `<html>` set by the theme toggle script in `default.html` for early theme detection

### Added

- Favicon (`/assets/favicon.ico`) integrated into blog layout via `<link>` tags in `head.html`
- WinPoin latest posts section on homepage — fetches 6 latest articles from WinPoin via WordPress REST API and renders them as individual cards with thumbnail, title, excerpt, date, and source badge
- `js/winpoin-posts.js` — client-side script to fetch and display WinPoin posts
- CSS styles for Winpoin card grid (`.winpoin-grid`, `.winpoin-card`, etc.) with responsive layout and hover effects
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
