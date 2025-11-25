# My Portfolio

A modern, performant portfolio website built with Astro, React, and Tailwind CSS. Features smooth animations, type-safe forms, and optimized static generation.

## 🚀 Quick Start

```bash
# Clone the repository
git clone git@github.com:jstcode99/my-portafolio.git
```

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

```
## 📁 Project Structure

```bash
/
├── public/                 # Static assets (favicons, images)
├── src/
│   ├── assets/            # Project assets (icons, SVGs)
│   ├── components/        # React & Astro components
│   ├── layouts/           # Page layout components
│   ├── pages/             # Astro pages and routes
│   ├── styles/            # Global styles and CSS
│   ├── config/            # Configuration files
│   ├── types/             # TypeScript type definitions
│   ├── schemas/           # Zod validation schemas
│   └── services/          # API and service functions
├── astro.config.mjs       # Astro configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🛠️ Tech Stack

### Core Framework
- **Astro** (v5.15.9) - Static site generator with partial hydration
- **React** (v19.2.0) - UI library for interactive components
- **TypeScript** - Type safety and better developer experience

### Styling & UI
- **Tailwind CSS** (v4.1.17) - Utility-first CSS framework
- **Motion** (v12.23.24) - Production-ready animations

### Forms & Validation
- **React Hook Form** (v7.66.1) - Performant form validation
- **Zod** (v4.1.13) - TypeScript-first schema validation
- **@hookform/resolvers** - Integration between React Hook Form and Zod

### Interactive Components
- **Swiper** (v12.0.3) - Modern touch slider
- **Lottie React** (v2.4.1) - Lottie animation player
- **React Ambient Light** (v0.0.1) - Ambient light effects

### Services & APIs
- **EmailJS** (v4.4.1) - Client-side email service

## ⚙️ Configuration
Path Aliases
The project uses TypeScript path aliases for clean imports:

```typescript
"paths": {
  "@assets/*": ["./src/assets/*"],
  "@styles/*": ["./src/styles/*"],
  "@pages/*": ["./src/pages/*"],
  "@components/*": ["./src/components/*"],
  "@layouts/*": ["./src/layouts/*"],
  "@config/*": ["./src/config/*"],
  "@types/*": ["./src/types/*"],
  "@schemas/*": ["./src/schemas/*"],
  "@services/*": ["./src/services/*"]
}
```

### 🤝 Contributing
Fork the project

1. Create your feature branch (git checkout -b feature/amazing-feature)

2. Commit your changes (git commit -m 'Add some amazing feature')

3. Push to the branch (git push origin feature/amazing-feature)

4. Open a Pull Request

### 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

### 📞 Support
If you have any questions or need help with setup, please open an issue or contact the development team.