<div align="center">
  <h1>🎬 Drameeo - Modern OTT Streaming Platform</h1>
  <p>A sleek and responsive streaming platform UI inspired by Netflix, built with React and Tailwind CSS</p>
  
  <!-- <p>
    <a href="https://drameeo-ott-platform.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/🔗_Live_Demo-Visit_Site-brightgreen?style=for-the-badge" alt="Live Demo">
    </a>
    <a href="https://github.com/AlokKumarYadav2410/drameeo-ott-platform" target="_blank">
      <img src="https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github" alt="GitHub">
    </a>
  </p> -->
  
  <!-- ![Preview](src/assets/preview.png) -->

  <!-- <video controls autoplay loop muted>
    <source src="src/assets/drameeo-preview.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video> -->

  ![Drameeo-Preview](src/assets/drameeo-preview.gif)
  
  🔗 **Live Demo**: https://drameeo-ott-platform.vercel.app/
</div>

---

### 🔗 Quick Navigation

- [✨ Features](#-features)
- [🛠️ Tech Stack](#%EF%B8%8F-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
<!-- - [🎞️ Screenshots](#screenshots) -->

---

## 📋 Overview

Drameeo is a modern, fully responsive OTT (Over-The-Top) streaming platform UI that delivers a premium viewing experience across all devices. Built with cutting-edge web technologies, it features a Netflix-inspired design with smooth animations, intuitive navigation, and an immersive user interface.

## ✨ Features

### 🎯 Core Features
- **Responsive Design** - Seamlessly adapts to all screen sizes (mobile, tablet, desktop)
- **Dynamic Sidebar** - Collapsible navigation with smooth transitions and tooltips
- **Hero Section** - Engaging hero banner with gradient overlays and trending badges
- **Continue Watching** - Track and resume your favorite content
- **Personalized Recommendations** - "You Might Like" section with curated suggestions
- **Mobile Menu** - Touch-friendly navigation for mobile devices
- **Dark Theme** - Eye-friendly dark color scheme for extended viewing

### 🎨 UI/UX Features
- Smooth hover effects and animations
- Glassmorphism design elements
- Custom scrollbars
- Lucide React icons for crisp visuals
- Gradient overlays and backdrop filters
- Card-based content layout

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - Modern UI library
- **Vite 7.2.4** - Lightning-fast build tool
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

### Development Tools
- **ESLint** - Code linting and quality assurance
- **@vitejs/plugin-react** - React support for Vite
- **PostCSS** - CSS transformations

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AlokKumarYadav2410/drameeo-ott-platform.git
   cd drameeo-ott-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the app in action

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |

## 📁 Project Structure

```
drameeo-ott-platform/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   │   ├── preview.png
│   │   └── profile-image.jpg
│   ├── components/        # React components
│   │   ├── ContinueWatching.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── YouMightLike.jsx
│   │   ├── Navbar/
│   │   └── Sidebar/
│   ├── data/              # Mock data
│   │   ├── allData.js
│   │   └── sidebarData.js
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── eslint.config.js       # ESLint configuration
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies
└── README.md              # Project documentation
```

<!-- ## Screenshots -->

<!-- ### Mobile View
<img src="src/assets/mobile-view.png" alt="mobilePreview" height="200px"/> <img src="src/assets/mobile-menu.png" alt="mobileMenuPreview" height="200px"/> -->

<!-- ### Desktop View
![Desktop View](src/assets/desktop-view.png) -->

## 🎨 Key Components

### Sidebar Navigation
- Collapsible sidebar with minimize/maximize functionality
- Hover tooltips for minimized state
- Smooth transitions and animations
- Separate menu and library sections

### Hero Section
- Dynamic hero banner with background image
- Gradient overlays for visual depth
- Trending badge with flame icon
- Category tags and metadata display
- Action buttons (Play, Download, More)

### Content Sections
- **Continue Watching**: Horizontal scrollable card carousel
- **You Might Like**: Personalized content recommendations
- Responsive card grid layout

### Mobile Experience
- Hamburger menu with slide-in navigation
- Touch-optimized interactions
- Responsive typography and spacing

## 🌟 Future Enhancements

- [ ] Video player integration
- [ ] User authentication and profiles
- [ ] Search functionality with filters
- [ ] Watchlist and favorites management
- [ ] Multi-language support
- [ ] Content rating and reviews
- [ ] Backend integration with real API
- [ ] Progressive Web App (PWA) capabilities

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ by **Alok Kumar Yadav**

## 🙏 Acknowledgments

- Design inspiration from Netflix
- Icons by [Lucide React](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)

---

<div align="center">
  <p>If you found this project helpful, please consider giving it a ⭐️</p>
  <p>Made with 💻 and ☕</p>
</div>

