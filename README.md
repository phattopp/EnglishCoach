# The English Coach - Modern Website

A premium, static website for The English Coach, designed for performance and ease of hosting.

## Features
- **Modern Design**: Responsive layout, glassmorphism effects, and premium typography.
- **Static Architecture**: HTML5, CSS3, Vanilla JS. No backend required.
- **Bilingual**: Instant German/English switching via JavaScript.
- **Eco-Friendly**: Lightweight and fast-loading.

## Hosting
This site is ready for **Cloudflare Pages**, **Netlify**, or **GitHub Pages**.

### Cloudflare Pages Setup
1. Connect your GitHub repository.
2. Select the `EnglishCoach` directory as the root (if monorepo) or just push the contents of this folder to a new repo.
3. Build command: `None` (it's static).
4. Output directory: `.` (root) or leave blank.

## Local Development
To preview locally:
```bash
# Python 3
python3 -m http.server 8000

# Or just open index.html in your browser
```

## Structure
- `index.html`: Main entry point.
- `css/`: Stylesheets.
- `js/`: Logic (Language switcher, Menu).
- `images/`: Assets (Copied from legacy).

## Contact Form
The contact buttons use `mailto:` links to keep the site purely static. For a functional form, integration with Formspree or Netlify Forms is recommended.
