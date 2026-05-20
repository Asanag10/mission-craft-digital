# MissionCraft Digital

Thoughtfully crafted websites for mission-driven organizations.

## 🚀 Quick Start

1. Open `index.html` in your web browser to view the site
2. Or run the Python preview server: `python preview_server.py`

## 📁 Project Structure

```text
mission-craft-digital/
├── index.html          # Main website file
├── styles.css          # All styling
├── script.js           # Interactive features
├── preview_server.py   # Local development server
└── README.md           # This file
```

## ✨ Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI** - Clean, professional design with smooth animations
- **Contact Form** - Lead generation ready (demo mode)
- **Portfolio Section** - Showcase your work (GOSC featured)
- **Services Grid** - Comprehensive service offerings
- **SEO Optimized** - Meta tags and semantic HTML
- **Accessibility** - WCAG compliant design

## 🎨 Customization

### Update Business Name

Search and replace the business name in `index.html` with your chosen brand.

### Add Your Logo

Replace the text logo in the header with an image:

```html
<div class="logo">
    <img src="your-logo.png" alt="Your Business Name">
</div>
```

### Update Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #4A90E2;    /* Main brand color */
    --secondary-color: #50C878;   /* Accent color */
    --accent-color: #FF6B6B;      /* Highlight color */
}
```

### Add Portfolio Items

Copy the `.portfolio-item` div in `index.html` and update with your project details.

### Connect Contact Form

Replace the demo form handler in `script.js` with:

- Email service (EmailJS, Formspree, etc.)
- Backend API endpoint
- WordPress form plugin

## 🌐 Deployment Options

### Option 1: Static Hosting (Recommended)

- **Netlify** - Drag & drop deployment
- **Vercel** - GitHub integration
- **GitHub Pages** - Free hosting

### Option 2: WordPress Integration

- Upload files to your theme folder
- Use as a landing page template
- Integrate with WordPress forms

### Option 3: Traditional Hosting

- Upload via FTP to any web host
- Works with cPanel, Plesk, etc.

## 📝 Next Steps

1. **Choose a business name** and update throughout the site
2. **Add your contact information** (email, phone, address)
3. **Customize colors** to match your brand
4. **Add more portfolio items** as you complete projects
5. **Connect the contact form** to receive inquiries
6. **Add testimonials** from satisfied clients
7. **Create a pricing page** (optional)
8. **Set up analytics** (Google Analytics, etc.)

## 🛠️ Technical Details

- **No build process required** - Pure HTML, CSS, JavaScript
- **No dependencies** - Works standalone
- **Modern browsers** - Chrome, Firefox, Safari, Edge
- **Mobile-first** - Optimized for all screen sizes
- **Fast loading** - Minimal file sizes

## 💡 Tips for Success

- **Update regularly** - Keep portfolio and testimonials current
- **SEO optimization** - Add meta descriptions for each page
- **Performance** - Optimize images before uploading
- **Accessibility** - Test with screen readers
- **Analytics** - Track visitor behavior and conversions

## 📧 Form Integration Examples

### EmailJS (Free tier available)

```javascript
emailjs.send("service_id", "template_id", formData)
    .then(() => alert("Message sent!"));
```

### Formspree (Simple setup)

```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

## 🎯 Marketing Your Services

1. **LinkedIn** - Share your portfolio and expertise
2. **Mission-driven directories** - List your services
3. **Local networking** - Connect with organizations
4. **Content marketing** - Blog about websites for mission-driven organizations
5. **Referrals** - Ask satisfied clients for recommendations

---

**Ready to launch your mission-driven digital brand!** 🚀
