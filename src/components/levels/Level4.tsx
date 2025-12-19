import { Section } from '../Section';
import { SubSection } from '../SubSection';
import { Definition } from '../Definition';
import { CodeBlock } from '../CodeBlock';
import { Note } from '../Note';

export function Level4() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-blue-500 text-white text-sm rounded-full mb-2">
          Level 4
        </div>
        <h1 className="text-3xl text-gray-900 dark:text-white">Styling & Assets</h1>
      </div>

      <Section title="10. Styling in React">
        <SubSection title="Inline Styles">
          <Definition>
            Inline styles in React are specified as JavaScript objects with camelCased properties. They're applied directly to elements using the style prop.
          </Definition>
          <CodeBlock
            title="Inline Styles Example"
            code={`function InlineStylesExample() {
  // Style as object
  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  // Dynamic styles
  const isActive = true;
  const dynamicStyle = {
    backgroundColor: isActive ? '#28a745' : '#dc3545',
    opacity: isActive ? 1 : 0.5
  };

  return (
    <div>
      <h1 style={headingStyle}>Hello World</h1>
      <button style={buttonStyle}>Click Me</button>
      <div style={dynamicStyle}>Dynamic Div</div>
      
      {/* Inline object */}
      <p style={{ color: 'red', fontSize: '18px' }}>
        Red text
      </p>
    </div>
  );
}

// Note: Use camelCase for CSS properties
// background-color → backgroundColor
// font-size → fontSize
// z-index → zIndex`}
          />
        </SubSection>

        <SubSection title="CSS Files">
          <Definition>
            Traditional CSS files can be imported into React components. Styles are global by default.
          </Definition>
          <CodeBlock
            title="styles.css"
            code={`.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}

.button.primary {
  background-color: #007bff;
}

.button.danger {
  background-color: #dc3545;
}`}
          />
          <CodeBlock
            title="Component.tsx"
            code={`import './styles.css';

function Component() {
  return (
    <div className="container">
      <button className="button primary">Primary</button>
      <button className="button danger">Danger</button>
    </div>
  );
}`}
          />
        </SubSection>

        <SubSection title="CSS Modules">
          <Definition>
            CSS Modules provide locally scoped CSS by automatically generating unique class names. They prevent naming conflicts and keep styles modular.
          </Definition>
          <CodeBlock
            title="Button.module.css"
            code={`.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.primary {
  background-color: #007bff;
  color: white;
}

.secondary {
  background-color: #6c757d;
  color: white;
}

.large {
  padding: 15px 30px;
  font-size: 18px;
}`}
          />
          <CodeBlock
            title="Button.tsx"
            code={`import styles from './Button.module.css';

function Button({ variant = 'primary', size, children }) {
  // Combine multiple classes
  const buttonClasses = [
    styles.button,
    styles[variant],
    size === 'large' && styles.large
  ].filter(Boolean).join(' ');

  return (
    <button className={buttonClasses}>
      {children}
    </button>
  );
}

// Or use template literals
function AnotherButton() {
  const isPrimary = true;
  
  return (
    <button className={\`\${styles.button} \${isPrimary ? styles.primary : styles.secondary}\`}>
      Click Me
    </button>
  );
}`}
          />
        </SubSection>

        <SubSection title="Tailwind CSS">
          <Definition>
            Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup.
          </Definition>
          <CodeBlock
            title="Tailwind CSS Example"
            code={`function TailwindExample() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Container with padding and max width */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Card with background, rounded corners, and shadow */}
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Heading
        </h1>
        
        <p className="text-gray-600 leading-relaxed mb-6">
          This is a paragraph with some text.
        </p>
        
        {/* Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded">Item 1</div>
          <div className="bg-green-100 p-4 rounded">Item 2</div>
          <div className="bg-red-100 p-4 rounded">Item 3</div>
        </div>
        
        {/* Button with hover and active states */}
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-6 py-2 rounded transition-colors">
          Click Me
        </button>
        
        {/* Conditional classes */}
        <div className={\`p-4 rounded \${isActive ? 'bg-green-500' : 'bg-gray-300'}\`}>
          Status: {isActive ? 'Active' : 'Inactive'}
        </div>
      </div>
    </div>
  );
}

// Responsive Design
function ResponsiveExample() {
  return (
    <div>
      {/* Mobile first: base = mobile, then sm, md, lg, xl */}
      <div className="text-sm md:text-base lg:text-lg xl:text-xl">
        Responsive text
      </div>
      
      <div className="hidden md:block">
        Hidden on mobile, visible on tablet+
      </div>
      
      <div className="block md:hidden">
        Visible on mobile, hidden on tablet+
      </div>
    </div>
  );
}`}
          />
        </SubSection>

        <SubSection title="Conditional Styling">
          <CodeBlock
            title="Conditional Styling Techniques"
            code={`import { useState } from 'react';

function ConditionalStyling() {
  const [isActive, setIsActive] = useState(false);
  const [theme, setTheme] = useState('light');
  const [status, setStatus] = useState('success');

  return (
    <div>
      {/* Method 1: Ternary operator */}
      <button className={\`btn \${isActive ? 'active' : 'inactive'}\`}>
        Button
      </button>

      {/* Method 2: Logical AND */}
      <div className={\`card \${isActive && 'highlighted'}\`}>
        Card content
      </div>

      {/* Method 3: Template literals with multiple conditions */}
      <div className={\`
        container
        \${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}
        \${status === 'error' && 'border-red-500'}
      \`}>
        Content
      </div>

      {/* Method 4: Object-based (using classnames library pattern) */}
      <div className={[
        'base-class',
        isActive && 'active-class',
        theme === 'dark' && 'dark-class'
      ].filter(Boolean).join(' ')}>
        Element
      </div>

      {/* Method 5: Function to generate class names */}
      <div className={getButtonClasses(isActive, status)}>
        Button
      </div>
    </div>
  );
}

function getButtonClasses(active, status) {
  let classes = 'btn';
  if (active) classes += ' active';
  if (status === 'error') classes += ' error';
  if (status === 'success') classes += ' success';
  return classes;
}`}
          />
        </SubSection>
      </Section>

      <Section title="11. Assets Management">
        <SubSection title="Images">
          <CodeBlock
            title="Image Handling in React"
            code={`// Method 1: Import images (recommended for src/ folder)
import logo from './assets/logo.png';
import avatar from './assets/avatar.jpg';

function ImageExample() {
  return (
    <div>
      <img src={logo} alt="Logo" />
      <img src={avatar} alt="Avatar" width="100" />
    </div>
  );
}

// Method 2: Public folder (for static assets)
function PublicImages() {
  return (
    <div>
      {/* Files in public/ folder */}
      <img src="/images/hero.jpg" alt="Hero" />
      <img src="/favicon.ico" alt="Icon" />
    </div>
  );
}

// Method 3: Dynamic imports
function DynamicImages({ imageName }) {
  const [image, setImage] = useState(null);
  
  useEffect(() => {
    import(\`./assets/\${imageName}.png\`)
      .then(img => setImage(img.default))
      .catch(err => console.error(err));
  }, [imageName]);
  
  return image ? <img src={image} alt={imageName} /> : null;
}

// Method 4: Background images
function BackgroundImage() {
  const bgStyle = {
    backgroundImage: \`url(\${logo})\`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px'
  };
  
  return <div style={bgStyle}>Content</div>;
}

// Responsive images
function ResponsiveImage() {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet="/images/large.jpg" />
      <source media="(min-width: 768px)" srcSet="/images/medium.jpg" />
      <img src="/images/small.jpg" alt="Responsive" />
    </picture>
  );
}`}
          />
        </SubSection>

        <SubSection title="Icons">
          <CodeBlock
            title="Icon Libraries"
            code={`// Using lucide-react (recommended)
import { Home, User, Settings, Menu, X, ChevronRight } from 'lucide-react';

function IconExample() {
  return (
    <div>
      {/* Basic usage */}
      <Home />
      <User />
      <Settings />
      
      {/* With size */}
      <Home size={24} />
      <User size={32} />
      
      {/* With color */}
      <Home color="blue" />
      <Settings color="#ff0000" />
      
      {/* With stroke width */}
      <Menu strokeWidth={1.5} />
      
      {/* In buttons */}
      <button>
        <Home size={20} />
        <span>Home</span>
      </button>
      
      {/* With Tailwind classes */}
      <Home className="w-6 h-6 text-blue-500" />
      <User className="w-8 h-8 text-gray-700" />
    </div>
  );
}

// Custom SVG icons
function CustomSVG() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" />
    </svg>
  );
}

// Icon component wrapper
function Icon({ name, size = 24, color = 'currentColor' }) {
  const icons = {
    home: Home,
    user: User,
    settings: Settings
  };
  
  const IconComponent = icons[name];
  return <IconComponent size={size} color={color} />;
}

// Usage: <Icon name="home" size={20} />`}
          />
        </SubSection>

        <SubSection title="Fonts">
          <CodeBlock
            title="Custom Fonts"
            code={`/* In your CSS file (globals.css) */

/* Method 1: Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

/* Method 2: Local fonts */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/CustomFont-Regular.woff2') format('woff2'),
       url('/fonts/CustomFont-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/CustomFont-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

.custom-font {
  font-family: 'CustomFont', sans-serif;
}

/* Tailwind config (if using Tailwind) */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        custom: ['CustomFont', 'sans-serif'],
      }
    }
  }
}`}
          />
          <CodeBlock
            title="Font Usage in Components"
            code={`function FontExample() {
  return (
    <div>
      {/* Default font */}
      <p>This uses the default font</p>
      
      {/* Custom font via className */}
      <p className="font-custom">Custom font</p>
      
      {/* Inline style */}
      <p style={{ fontFamily: 'CustomFont, sans-serif' }}>
        Inline custom font
      </p>
      
      {/* Tailwind font utilities */}
      <p className="font-sans">Sans-serif font</p>
      <p className="font-serif">Serif font</p>
      <p className="font-mono">Monospace font</p>
    </div>
  );
}`}
          />
        </SubSection>

        <SubSection title="Public vs src Folder Usage">
          <Note type="info">
            <strong>When to use each folder:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>src/assets/</strong> - Images, fonts, icons used in components (processed by bundler)</li>
              <li><strong>public/</strong> - Static files that need to be served as-is (not processed)</li>
            </ul>
          </Note>
          <CodeBlock
            title="Folder Structure & Usage"
            code={`project/
├── public/
│   ├── favicon.ico          # Browser tab icon
│   ├── robots.txt           # SEO file
│   ├── manifest.json        # PWA manifest
│   ├── images/
│   │   └── og-image.jpg     # Social media preview
│   └── fonts/
│       └── custom-font.woff # Custom fonts
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   └── hero.jpg
│   │   ├── icons/
│   │   │   └── custom-icon.svg
│   │   └── fonts/
│   │       └── local-font.woff2
│   └── components/
│       └── MyComponent.tsx

// Using assets from src/
import logo from './assets/images/logo.png';

function Component() {
  return <img src={logo} alt="Logo" />;
}

// Using assets from public/
function PublicAssets() {
  return (
    <div>
      <link rel="icon" href="/favicon.ico" />
      <img src="/images/og-image.jpg" alt="OG" />
    </div>
  );
}

// Dynamic public paths
function DynamicPublic({ imageName }) {
  return <img src={\`/images/\${imageName}.jpg\`} alt={imageName} />;
}

// ✅ Use src/ when:
// - Images imported in components
// - Need bundler optimization
// - Want hash names for caching

// ✅ Use public/ when:
// - Referenced in index.html
// - Need exact filename
// - External scripts/resources
// - Files used by tools (robots.txt, manifest.json)`}
          />
        </SubSection>
      </Section>

      <Note type="success">
        Level 4 completed! You now know how to style React applications and manage assets. Move on to Level 5 to learn about routing and navigation.
      </Note>
    </div>
  );
}