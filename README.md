# Perplexity Comet Website Clone

A pixel-perfect clone of the Perplexity Comet browser landing page, built with vanilla HTML, CSS, and JavaScript.

## 🚀 Project Overview

This project is a complete recreation of the [Comet by Perplexity](https://comet.perplexity.ai/) landing page, featuring:

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, minimalist design with smooth animations and transitions
- **Interactive Elements**: FAQ accordion, smooth scrolling, and hover effects
- **Accessibility**: Keyboard navigation support and semantic HTML structure
- **Performance Optimized**: Lazy loading, image error handling, and optimized CSS

## 📁 Project Structure

```
/
├── index.html          # Main HTML file with complete page structure
├── css/
│   └── style.css       # All styling and responsive design
├── js/
│   └── main.js         # Interactive functionality and error handling
├── README.md           # Project documentation
└── .gitignore          # Git ignore file
```

## 🛠️ Features

### Core Functionality
- **Hero Section**: Main title, subtitle, and call-to-action button
- **Feature Sections**: Three main sections showcasing Comet as "powerful", "professional", and "personal"
- **Use Cases**: Interactive grid showing different ways to use Comet
- **FAQ Section**: Expandable/collapsible frequently asked questions
- **Footer**: Social links and legal information

### Technical Features
- **Image Error Handling**: Automatic fallback for broken images
- **Smooth Scrolling**: Enhanced navigation experience
- **Scroll Animations**: Fade-in effects as sections come into view
- **Sticky Header**: Header that adapts on scroll
- **Keyboard Navigation**: Full keyboard accessibility support
- **Performance Monitoring**: Built-in performance tracking

## 🎨 Design Features

### Visual Elements
- **Typography**: Inter font family for modern, clean text
- **Color Scheme**: Warm beige background (#f5f3f0) with dark text
- **Spacing**: Consistent padding and margins throughout
- **Shadows**: Subtle box shadows for depth and modern feel
- **Transitions**: Smooth hover effects and animations

### Responsive Breakpoints
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted grid layouts)
- **Mobile**: Below 768px (single column, optimized spacing)

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. That's it! The website is ready to use

### Local Development
For local development with live reload:
```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx serve .

# Or simply open index.html directly in your browser
```

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Modifying Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-bg: #f5f3f0;
    --text-color: #333;
    --accent-color: #2d3748;
}
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `css/style.css`
3. Add any interactive functionality in `js/main.js`

### Image Replacement
Replace image URLs in `index.html` with your own images, or download the original images to a local `assets/images/` folder.

## 🎯 Performance Optimizations

- **Lazy Loading**: Images load only when needed
- **CSS Optimization**: Efficient selectors and minimal reflows
- **JavaScript**: Event delegation and debounced scroll handlers
- **Image Optimization**: Proper alt tags and error handling
- **Font Loading**: Optimized Google Fonts loading

## 🔍 SEO Features

- Semantic HTML5 structure
- Proper heading hierarchy (h1, h2, h3)
- Meta tags for viewport and charset
- Alt attributes for all images
- Descriptive link text

## 🛡️ Error Handling

- **Image Fallbacks**: Broken images are replaced with placeholder text
- **JavaScript Errors**: Wrapped in try-catch blocks with console logging
- **Network Issues**: Graceful degradation for slow connections
- **Browser Compatibility**: Feature detection for modern APIs

## 🚀 Deployment

### GitHub Pages
1. Push code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the project folder to [Netlify](https://netlify.com)
2. Your site will be deployed instantly with a custom URL

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

## 📈 Future Enhancements

- [ ] Add dark mode toggle
- [ ] Implement service worker for offline functionality
- [ ] Add more interactive animations
- [ ] Create a blog section
- [ ] Add contact form functionality
- [ ] Implement search functionality
- [ ] Add multi-language support

## 🐛 Known Issues

- Some images may load slowly on first visit
- FAQ animations may not work in older browsers
- Service worker is registered but not implemented

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for educational purposes only. The original design belongs to Perplexity AI.

## 🙏 Acknowledgments

- Original design by [Perplexity AI](https://perplexity.ai)
- Inter font by [Google Fonts](https://fonts.google.com)
- Images from the original Comet website

## 📞 Support

If you encounter any issues or have questions:
1. Check the browser console for error messages
2. Ensure all files are in the correct directory structure
3. Verify that images are loading properly
4. Test in a different browser

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**
