# 🚀 Harshit Gupta - Portfolio

A modern, animated portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🎨 **Modern Design**
- Clean, professional design with smooth animations
- Responsive layout that works on all devices
- Beautiful gradient backgrounds and glass-morphism effects
- Custom color scheme with Tailwind CSS

### 🎭 **Smooth Animations**
- Framer Motion powered animations throughout
- Scroll-triggered animations with `whileInView`
- Hover effects and micro-interactions
- Staggered animations for lists and grids

### 📱 **Responsive Components**
- **Hero Section**: Animated introduction with stats and CTA buttons
- **About Section**: Education details and personal highlights
- **Experience Section**: Work history with timeline
- **Projects Section**: Portfolio showcase with filtering
- **Skills Section**: Technical skills with progress bars
- **Achievements Section**: Awards and recognition
- **Contact Section**: Contact form and social links
- **Navigation**: Sticky navigation with mobile menu
- **Footer**: Comprehensive footer with quick links

### 🛠 **Technical Features**
- **Scroll Progress Bar**: Visual progress indicator
- **Floating Action Button**: Quick access to important actions
- **Loading Components**: Reusable loading spinners
- **Smooth Scrolling**: Navigation between sections
- **Mobile-First Design**: Optimized for all screen sizes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── About.tsx          # About section
│   ├── Achievements.tsx   # Achievements section
│   ├── Contact.tsx        # Contact form and info
│   ├── Experience.tsx     # Work experience timeline
│   ├── FloatingActionButton.tsx # Quick actions FAB
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── LoadingSpinner.tsx # Loading components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Projects.tsx       # Projects showcase
│   ├── ScrollProgress.tsx # Scroll progress bar
│   └── Skills.tsx         # Skills section
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Colors
The portfolio uses a custom color scheme defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    900: '#1e3a8a',
  },
  accent: {
    50: '#fefce8',
    100: '#fef9c3',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
  }
}
```

### Content
Update the content in each component to match your information:
- Personal details in `Hero.tsx`
- Education and highlights in `About.tsx`
- Work experience in `Experience.tsx`
- Projects in `Projects.tsx`
- Skills in `Skills.tsx`
- Achievements in `Achievements.tsx`
- Contact information in `Contact.tsx`

### Social Links
Update social media links in:
- `Navigation.tsx`
- `Contact.tsx`
- `Footer.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animation Features

### Framer Motion Variants
Components use predefined animation variants for consistent animations:

```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}
```

### Scroll Animations
- `whileInView`: Triggers animations when component enters viewport
- `viewport={{ once: true }}`: Ensures animations only play once
- Staggered animations for lists and grids

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The portfolio can be deployed to any platform that supports Next.js static exports.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Dependencies

### Core
- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

### Animations
- **Framer Motion** - Animation library

### Icons
- **Lucide React** - Beautiful icons

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for beautiful icons

---

**Built with ❤️ by Harshit Gupta**

Feel free to use this portfolio as a template for your own projects!
