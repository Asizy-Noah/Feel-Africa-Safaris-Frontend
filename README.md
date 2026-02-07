# Feel Africa Safaris - Website

A premium safari tourism website built with HTML, CSS, JavaScript, Bootstrap, and Slick Carousel.

## Project Structure

```
feel-africa-safaris/
├── index.html              # Main homepage
├── css/
│   ├── styles.css         # Main stylesheet with all custom styles
│   ├── slick.css          # Slick carousel CSS
│   └── slick-theme.css    # Slick carousel theme CSS
├── js/
│   ├── main.js            # Custom JavaScript for interactions
│   └── slick.min.js       # Slick carousel library
├── images/
│   └── logo.png           # Company logo (add your logo here)
├── README.md              # This file
└── .gitignore             # Git ignore file (optional)
```

## Features

- **Responsive Design**: Mobile-first, fully responsive layout
- **Premium Color Scheme**: 
  - Savannah Green (#2F4F2F)
  - Sunset Gold (#E6A23C)
  - Safari Clay (#C4572D)
  - Warm Background (#F6F1E8)
- **Carousel**: Testimonials carousel using Slick.js
- **Bootstrap Integration**: 5.3.0 CDN
- **Smooth Animations**: CSS transitions and hover effects
- **SEO Friendly**: Semantic HTML structure
- **Accessibility**: ARIA labels and keyboard navigation

## Sections

1. **Navigation Bar** - Sticky navbar with logo and menu links
2. **Hero Section** - Eye-catching hero with call-to-action buttons
3. **Why Choose Us** - Feature cards highlighting company benefits
4. **Safari Packages** - Package showcase with pricing and booking
5. **Testimonials** - Carousel of customer reviews (uses Slick.js)
6. **Destinations** - Featured safari destinations
7. **Contact** - Contact form and information
8. **Footer** - Complete footer with links and social media

## Colors Used

CSS variables are defined in the `:root` selector in `css/styles.css`:

```css
--color-primary: #2F4F2F;        /* Savannah Green */
--color-secondary: #E6A23C;      /* Sunset Gold */
--color-accent: #C4572D;         /* Safari Clay */
--color-background: #F6F1E8;     /* Warm paper */
--color-foreground: #1F2937;     /* Dark text */
--color-border: #E5E0D6;
```

## Installation & Setup

1. **Download/Clone** the project files
2. **Add Your Logo**:
   - Replace `images/logo.png` with your actual Feel Africa Safaris logo
3. **Update Content**:
   - Edit text, descriptions, and contact information in `index.html`
   - Update destination images and tour descriptions
4. **Customize Colors** (Optional):
   - Edit CSS variables in `css/styles.css` if needed
5. **Deploy**:
   - Use a web host or deploy to Vercel, Netlify, GitHub Pages, etc.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

- Bootstrap 5.3.0 (CDN)
- jQuery 3.6.0 (required for Slick)
- Slick Carousel 1.8.1 (included)

## Customization

### Adding More Packages
Copy the package card HTML in the Safari Packages section and update:
- Image source
- Title
- Duration
- Price
- Description

### Styling Changes
All styles use CSS variables and classes. Edit `css/styles.css` to:
- Change colors
- Adjust spacing
- Modify hover effects
- Update responsive breakpoints

### Contact Form
Update the form action in `js/main.js` to integrate with your backend or email service.

## Notes

- All images use placeholder service - replace with real images
- Ensure logo is placed in `images/` folder as `logo.png`
- Test on mobile devices before deployment
- Update all contact information and links as needed

---

Built for Feel Africa Safaris - Premium African Safari Experiences
