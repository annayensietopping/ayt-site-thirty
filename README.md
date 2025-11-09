# Anna Topping - Personal Website

A modern, responsive personal website built with HTML and Tailwind CSS.

## notes to self
hosted in netlify

## Features

- Clean, modern design with Tailwind CSS
- Responsive navigation header with menu buttons
- Landing page with hero section
- About me section with photo
- Smooth scrolling navigation
- Mobile-friendly responsive design

## Setup

1. Install dependencies:
```bash
npm install
```

2. Build the CSS:
```bash
npm run build-css
```

3. Open `index.html` in your browser, or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

## Development

To watch for CSS changes during development:
```bash
npm run watch-css
```

## Customization

- Replace the placeholder image in `index.html` with your actual photo
- Update the "About Me" content with your personal information
- Modify the contact email address
- Customize colors and styling in `tailwind.config.js`

## Project Structure

```
.
├── index.html          # Main HTML file
├── src/
│   └── input.css       # Tailwind source CSS
├── dist/
│   └── output.css      # Compiled CSS (generated)
├── tailwind.config.js  # Tailwind configuration
└── package.json        # Project dependencies
```

