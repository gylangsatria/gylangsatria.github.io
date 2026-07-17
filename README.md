# Gylang's Blog

A personal blog documenting experiments, breakdowns, and lessons learned the hard way. Built with Jekyll and hosted on GitHub Pages.

## Tech Stack

- **Static site generator**: Jekyll
- **Hosting**: GitHub Pages
- **Syntax highlighting**: highlight.js
- **Plugins**: jekyll-feed, jekyll-sitemap, jekyll-seo-tag, jekyll-paginate

## Features

- Light/dark theme toggle with persistent preference (localStorage)
- Responsive design with mobile-first navigation
- Bootstrap-style hamburger menu on mobile
- SEO tags, sitemap, and RSS feed
- Syntax highlighting for multiple languages
- Post navigation with previous/next links
- Social sharing links
- Giscus-powered comments section on every post with automatic theme sync
- Dark/light theme sync between blog UI and giscus iframe

## Local Development

### Prerequisites

- Ruby and Bundler installed
- Jekyll and dependencies

### Setup

```bash
bundle install
```

### Run

```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`.

### Build

```bash
bundle exec jekyll build
```

## Project Structure

```
.
├── _config.yml          # Site configuration
├── _includes/           # Reusable HTML partials
│   ├── head.html
│   ├── navlinks.html
│   └── sharelinks.html
├── _layouts/            # Page layouts
│   ├── default.html
│   └── post.html
├── _posts/              # Blog posts (Markdown)
├── assets/              # Images and other static files
├── css/
│   └── override.css     # Custom styles
├── js/
│   └── highlightjs/     # Syntax highlighting library
├── sitemap.xml          # XML sitemap for search engines
├── robots.txt           # Crawling instructions
└── CHANGELOG.md         # Release history
```

## Deployment

Push to the `main` branch. GitHub Actions automatically builds and deploys the site to GitHub Pages.

## License

This project is open source. Feel free to use it as a reference or inspiration for your own blog.
