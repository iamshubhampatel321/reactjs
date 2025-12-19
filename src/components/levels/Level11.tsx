import { Section } from '../Section';
import { SubSection } from '../SubSection';
import { Definition } from '../Definition';
import { CodeBlock } from '../CodeBlock';
import { Note } from '../Note';

export function Level11() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-purple-600 text-white text-sm rounded-full mb-2">
          Level 11
        </div>
        <h1 className="text-3xl text-gray-900 dark:text-white">Production & Deployment</h1>
      </div>

      <Section title="25. Build & Deployment">
        <SubSection title="Production Build">
          <Definition>
            A production build optimizes your React app for performance, including minification, bundling, and removing development-only code.
          </Definition>
          <CodeBlock
            title="Building for Production"
            code={`# Vite build command
npm run build

# Create React App build command
npm run build

# Build output (Vite)
dist/
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other-assets]
└── index.html

# Build output (CRA)
build/
├── static/
│   ├── js/
│   ├── css/
│   └── media/
└── index.html

# Preview production build locally (Vite)
npm run preview

# Serve production build (CRA)
npm install -g serve
serve -s build

# Build with environment variables
VITE_API_URL=https://api.production.com npm run build

# Package.json scripts
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:staging": "vite build --mode staging",
    "build:production": "vite build --mode production",
    "preview": "vite preview",
    "analyze": "vite-bundle-visualizer"
  }
}`}
          />
        </SubSection>

        <SubSection title="Deploying to Netlify">
          <CodeBlock
            title="Netlify Deployment"
            code={`# Method 1: Drag and Drop
# 1. Run: npm run build
# 2. Drag the 'dist' or 'build' folder to Netlify

# Method 2: Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify
netlify init

# Deploy
netlify deploy --prod

# Method 3: Git Integration (Recommended)
# 1. Push code to GitHub/GitLab/Bitbucket
# 2. Connect repository in Netlify dashboard
# 3. Configure build settings

# netlify.toml (configuration file)
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"

# Environment variables in Netlify
# Dashboard → Site settings → Environment variables
# Add: VITE_API_URL, VITE_API_KEY, etc.

# Custom domain
# Dashboard → Domain settings → Add custom domain
# Configure DNS: Add CNAME record pointing to your-site.netlify.app`}
          />
        </SubSection>

        <SubSection title="Deploying to Vercel">
          <CodeBlock
            title="Vercel Deployment"
            code={`# Method 1: Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod

# Method 2: Git Integration (Recommended)
# 1. Push to GitHub
# 2. Import project in Vercel dashboard
# 3. Auto-deploys on push

# vercel.json (configuration)
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ],
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" }
      ]
    }
  ]
}

# Environment Variables
# Dashboard → Project Settings → Environment Variables
# Add variables for Production, Preview, Development

# Custom domain
# Dashboard → Domains → Add domain
# Configure DNS

# Performance optimizations (automatic in Vercel)
# - CDN distribution
# - Automatic HTTPS
# - Image optimization
# - Edge caching`}
          />
        </SubSection>

        <SubSection title="Deploying to Firebase">
          <CodeBlock
            title="Firebase Hosting"
            code={`# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init hosting

# Select options:
# - Choose existing project or create new
# - Public directory: dist (or build)
# - Configure as SPA: Yes
# - Set up automatic builds: Optional

# firebase.json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}

# Build and deploy
npm run build
firebase deploy

# Deploy to specific project
firebase deploy --project production

# Deploy with custom message
firebase deploy -m "Version 2.0.0"

# Preview deployment
firebase hosting:channel:deploy preview

# Custom domain
# Firebase Console → Hosting → Connect domain
# Follow DNS configuration steps

# GitHub Actions for auto-deploy
# .github/workflows/deploy.yml
name: Deploy to Firebase
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm ci && npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '\${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '\${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: your-project-id`}
          />
        </SubSection>

        <SubSection title="Other Deployment Options">
          <CodeBlock
            title="Additional Platforms"
            code={`# GitHub Pages
# 1. Install gh-pages
npm install --save-dev gh-pages

# 2. Add to package.json
{
  "homepage": "https://username.github.io/repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

# 3. Deploy
npm run deploy

# AWS S3 + CloudFront
# 1. Create S3 bucket
# 2. Enable static website hosting
# 3. Upload build files
aws s3 sync dist/ s3://your-bucket-name

# 4. Create CloudFront distribution
# 5. Configure custom domain

# Docker deployment
# Dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Build and run
docker build -t my-react-app .
docker run -p 80:80 my-react-app

# Heroku
# 1. Install Heroku CLI
# 2. Create Procfile
web: npm start

# 3. Deploy
heroku create my-app
git push heroku main

# Render
# 1. Connect GitHub repository
# 2. Configure build settings:
#    - Build Command: npm run build
#    - Publish Directory: dist
# 3. Auto-deploys on push`}
          />
        </SubSection>
      </Section>

      <Section title="26. SEO & Optimization">
        <SubSection title="Meta Tags">
          <Definition>
            Meta tags provide metadata about your HTML document, important for SEO and social media sharing.
          </Definition>
          <CodeBlock
            title="Meta Tags in React"
            code={`// index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Basic Meta Tags -->
  <title>My React App - Best App Ever</title>
  <meta name="description" content="A comprehensive React application with amazing features" />
  <meta name="keywords" content="react, javascript, web app, tutorial" />
  <meta name="author" content="Your Name" />
  
  <!-- Open Graph (Facebook, LinkedIn) -->
  <meta property="og:title" content="My React App" />
  <meta property="og:description" content="A comprehensive React application" />
  <meta property="og:image" content="https://example.com/og-image.jpg" />
  <meta property="og:url" content="https://example.com" />
  <meta property="og:type" content="website" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="My React App" />
  <meta name="twitter:description" content="A comprehensive React application" />
  <meta name="twitter:image" content="https://example.com/twitter-image.jpg" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  
  <!-- Theme Color -->
  <meta name="theme-color" content="#000000" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>

// Dynamic meta tags with React Helmet
import { Helmet } from 'react-helmet';

function ProductPage({ product }) {
  return (
    <>
      <Helmet>
        <title>{product.name} - My Shop</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <link rel="canonical" href={\`https://example.com/products/\${product.id}\`} />
      </Helmet>
      
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </div>
    </>
  );
}

// Using Helmet in different components
function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home - My React App</title>
        <meta name="description" content="Welcome to my React app" />
      </Helmet>
      <h1>Home Page</h1>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - My React App</title>
        <meta name="description" content="Learn more about us" />
      </Helmet>
      <h1>About Page</h1>
    </>
  );
}`}
          />
        </SubSection>

        <SubSection title="Performance Best Practices">
          <CodeBlock
            title="Production Optimizations"
            code={`// 1. Code Splitting
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  );
}

// 2. Image Optimization
function OptimizedImage({ src, alt }) {
  return (
    <picture>
      <source srcSet={\`\${src}.webp\`} type="image/webp" />
      <source srcSet={\`\${src}.jpg\`} type="image/jpeg" />
      <img
        src={\`\${src}.jpg\`}
        alt={alt}
        loading="lazy"
        width="800"
        height="600"
      />
    </picture>
  );
}

// 3. Minimize Re-renders
import { memo, useMemo, useCallback } from 'react';

const ExpensiveList = memo(function ExpensiveList({ items, onItemClick }) {
  return items.map(item => (
    <ExpensiveItem key={item.id} item={item} onClick={onItemClick} />
  ));
});

// 4. Virtualization for long lists
import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>{items[index].name}</div>
  );

  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}

// 5. Debounce expensive operations
import { useState, useCallback } from 'react';

function SearchComponent() {
  const [query, setQuery] = useState('');

  const debouncedSearch = useCallback(
    debounce((value) => {
      // Expensive search operation
      searchAPI(value);
    }, 300),
    []
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  return <input value={query} onChange={handleChange} />;
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 6. Service Worker for caching
// vite-plugin-pwa configuration
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ]
});

// 7. Analyze bundle size
// Run: npm run build -- --analyze
// Or use webpack-bundle-analyzer

// 8. Remove console.logs in production
if (import.meta.env.PROD) {
  console.log = () => {};
  console.error = () => {};
  console.warn = () => {};
}

// 9. Enable gzip compression (server config)
// Netlify: Automatic
// Nginx: gzip on;
// Apache: mod_deflate

// 10. Set proper cache headers
// Static assets: Cache for 1 year
// HTML: No cache or short cache

async function searchAPI(query) {
  // API call
}`}
          />
        </SubSection>
      </Section>

      <Note type="success">
        Level 11 complete! You've learned how to deploy React apps to production and optimize for performance. Move to Level 12 for the modern React ecosystem including TypeScript and Next.js.
      </Note>
    </div>
  );
}