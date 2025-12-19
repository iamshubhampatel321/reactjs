import { Section } from '../Section';
import { SubSection } from '../SubSection';
import { Definition } from '../Definition';
import { CodeBlock } from '../CodeBlock';
import { Note } from '../Note';

export function Level12() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-red-600 text-white text-sm rounded-full mb-2">
          Level 12
        </div>
        <h1 className="text-3xl text-gray-900 dark:text-white">Modern React Ecosystem</h1>
      </div>

      <Section title="27. TypeScript with React">
        <SubSection title="Setting Up TypeScript">
          <CodeBlock
            title="TypeScript Setup"
            code={`# Create new Vite project with TypeScript
npm create vite@latest my-app -- --template react-ts

# Add TypeScript to existing project
npm install --save-dev typescript @types/react @types/react-dom

# tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`}
          />
        </SubSection>

        <SubSection title="Typing Props & State">
          <Definition>
            TypeScript allows you to define types for props and state, catching errors at compile-time and improving developer experience.
          </Definition>
          <CodeBlock
            title="TypeScript Props Examples"
            code={`import { useState } from 'react';

// Props with interface
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

function Button({ text, onClick, variant = 'primary', disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={\`btn btn-\${variant}\`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

// Props with type
type UserCardProps = {
  user: {
    id: number;
    name: string;
    email: string;
    age?: number;
  };
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
};

function UserCard({ user, onEdit, onDelete }: UserCardProps) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {user.age && <p>Age: {user.age}</p>}
      {onEdit && <button onClick={() => onEdit(user.id)}>Edit</button>}
      {onDelete && <button onClick={() => onDelete(user.id)}>Delete</button>}
    </div>
  );
}

// Children prop
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return <div className={className}>{children}</div>;
}

// State with TypeScript
interface User {
  id: number;
  name: string;
  email: string;
}

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  
  return <div>{/* Component JSX */}</div>;
}

// Generic props
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Usage
function App() {
  const users: User[] = [
    { id: 1, name: 'John', email: 'john@example.com' }
  ];

  return (
    <List
      items={users}
      renderItem={(user) => <span>{user.name}</span>}
    />
  );
}`}
          />
        </SubSection>

        <SubSection title="Typing Hooks">
          <CodeBlock
            title="TypeScript with React Hooks"
            code={`import { useState, useEffect, useContext, useRef, useReducer } from 'react';

// useState
function Counter() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  
  // With initial value inference
  const [items, setItems] = useState([1, 2, 3]); // inferred as number[]
  
  return <div>{count}</div>;
}

// useEffect
function DataFetcher() {
  const [data, setData] = useState<Data | null>(null);
  
  useEffect(() => {
    fetchData().then((result: Data) => {
      setData(result);
    });
  }, []);
  
  return <div>{data?.name}</div>;
}

// useContext
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// useRef
function InputComponent() {
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<number | null>(null);
  
  const focusInput = () => {
    inputRef.current?.focus();
  };
  
  useEffect(() => {
    timerRef.current = window.setTimeout(() => {
      console.log('Timer expired');
    }, 1000);
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  
  return <input ref={inputRef} />;
}

// useReducer
type State = {
  count: number;
  error: string | null;
};

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'set_error'; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: 0 };
    case 'set_error':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, error: null });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

// Custom hooks with TypeScript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

// Usage
function App() {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');
  return <div>{theme}</div>;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface Data {
  name: string;
}

async function fetchData(): Promise<Data> {
  return { name: 'Test' };
}`}
          />
        </SubSection>

        <SubSection title="Event Handlers & Forms">
          <CodeBlock
            title="Typing Events"
            code={`import { useState, ChangeEvent, FormEvent, MouseEvent } from 'react';

function EventsExample() {
  const [value, setValue] = useState<string>('');

  // Input change event
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // Form submit event
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted:', value);
  };

  // Button click event
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('Clicked at:', e.clientX, e.clientY);
  };

  // Textarea change
  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
  };

  // Select change
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <textarea onChange={handleTextareaChange} />
      <select onChange={handleSelectChange}>
        <option value="1">Option 1</option>
      </select>
      <button onClick={handleClick}>Submit</button>
    </form>
  );
}

// Generic event handler
type InputChangeHandler = ChangeEvent<HTMLInputElement>;
type ButtonClickHandler = MouseEvent<HTMLButtonElement>;

const handleInputChange: (e: InputChangeHandler) => void = (e) => {
  console.log(e.target.value);
};

// Form with TypeScript
interface FormData {
  email: string;
  password: string;
  remember: boolean;
}

function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    remember: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await submitForm(formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        name="remember"
        type="checkbox"
        checked={formData.remember}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

async function submitForm(data: FormData): Promise<void> {
  // Submit logic
}`}
          />
        </SubSection>
      </Section>

      <Section title="28. React + Backend Integration">
        <SubSection title="API Integration Best Practices">
          <CodeBlock
            title="Structured API Layer"
            code={`// api/client.ts - API client setup
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

class ApiClient {
  private baseURL: string;
  private headers: HeadersInit;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = \`\${this.baseURL}\${endpoint}\`;
    const config: RequestInit = {
      ...options,
      headers: {
        ...this.headers,
        ...options.headers,
      },
    };

    const token = localStorage.getItem('token');
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: \`Bearer \${token}\`,
      };
    }

    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(\`API Error: \${response.statusText}\`);
    }

    return response.json();
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);

// api/users.ts - API endpoints
interface User {
  id: number;
  name: string;
  email: string;
}

export const usersApi = {
  getAll: () => apiClient.get<User[]>('/users'),
  getById: (id: number) => apiClient.get<User>(\`/users/\${id}\`),
  create: (user: Omit<User, 'id'>) => apiClient.post<User>('/users', user),
  update: (id: number, user: Partial<User>) =>
    apiClient.put<User>(\`/users/\${id}\`, user),
  delete: (id: number) => apiClient.delete<void>(\`/users/\${id}\`),
};

// hooks/useUsers.ts - Custom hook for data fetching
import { useState, useEffect } from 'react';
import { usersApi } from '../api/users';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    usersApi
      .getAll()
      .then(setUsers)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const createUser = async (userData: Omit<User, 'id'>) => {
    const newUser = await usersApi.create(userData);
    setUsers([...users, newUser]);
  };

  const updateUser = async (id: number, userData: Partial<User>) => {
    const updated = await usersApi.update(id, userData);
    setUsers(users.map(u => (u.id === id ? updated : u)));
  };

  const deleteUser = async (id: number) => {
    await usersApi.delete(id);
    setUsers(users.filter(u => u.id !== id));
  };

  return {
    users,
    loading,
    error,
    createUser,
    updateUser,
    deleteUser,
  };
}

// Component usage
function UserList() {
  const { users, loading, error, deleteUser } = useUsers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}`}
          />
        </SubSection>
      </Section>

      <Section title="29. Next Steps">
        <SubSection title="Next.js Basics">
          <Definition>
            Next.js is a React framework that provides server-side rendering (SSR), static site generation (SSG), API routes, and many other production-ready features.
          </Definition>
          <CodeBlock
            title="Next.js Overview"
            code={`# Create Next.js app
npx create-next-app@latest my-app

# Project structure
my-app/
├── app/                  # App directory (Next.js 13+)
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── about/
│   │   └── page.tsx     # About page
│   └── api/
│       └── route.ts     # API route
├── public/              # Static files
├── components/          # React components
└── package.json

// app/page.tsx - Server Component (default)
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js</h1>
    </div>
  );
}

// app/about/page.tsx
export default function AboutPage() {
  return <h1>About Page</h1>;
}

// app/layout.tsx - Root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// Client Component (with 'use client')
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

// Data fetching in Server Component
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  
  return <div>{data.title}</div>;
}

// Dynamic routes: app/posts/[id]/page.tsx
export default function PostPage({ params }: { params: { id: string } }) {
  return <h1>Post {params.id}</h1>;
}

// API route: app/api/users/route.ts
export async function GET() {
  const users = await fetchUsers();
  return Response.json(users);
}

export async function POST(request: Request) {
  const data = await request.json();
  const user = await createUser(data);
  return Response.json(user);
}

// Key Next.js features:
// ✅ File-based routing
// ✅ Server-side rendering (SSR)
// ✅ Static site generation (SSG)
// ✅ API routes
// ✅ Image optimization
// ✅ Built-in CSS support
// ✅ TypeScript support
// ✅ Fast refresh

async function fetchUsers() { return []; }
async function createUser(data: any) { return data; }`}
          />
        </SubSection>

        <SubSection title="Server-Side Rendering (SSR)">
          <CodeBlock
            title="SSR vs SSG vs CSR"
            code={`// SSR - Server-Side Rendering
// Page is rendered on the server for each request
// app/ssr-page/page.tsx
export const dynamic = 'force-dynamic';

async function getData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'no-store' // Don't cache
  });
  return res.json();
}

export default async function SSRPage() {
  const data = await getData();
  return <div>{data.content}</div>;
}

// SSG - Static Site Generation
// Page is generated at build time
// app/ssg-page/page.tsx
async function getStaticData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function SSGPage() {
  const data = await getStaticData();
  return <div>{data.content}</div>;
}

// ISR - Incremental Static Regeneration
// Regenerate page after a specific interval
export const revalidate = 60; // Revalidate every 60 seconds

async function getISRData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function ISRPage() {
  const data = await getISRData();
  return <div>{data.content}</div>;
}

// CSR - Client-Side Rendering
// Traditional React rendering
'use client';

import { useState, useEffect } from 'react';

export default function CSRPage() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(setData);
  }, []);
  
  if (!data) return <div>Loading...</div>;
  return <div>{data.content}</div>;
}

// When to use each:
// SSR: Dynamic content, user-specific data, SEO important
// SSG: Static content, blog posts, marketing pages
// ISR: Semi-static content that changes occasionally
// CSR: Highly interactive apps, dashboards, authenticated pages`}
          />
        </SubSection>

        <SubSection title="Continue Learning">
          <Note type="info">
            <strong>Recommended Next Steps:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Build real projects to solidify your knowledge</li>
              <li>Explore React libraries: React Query, Zustand, Jotai</li>
              <li>Learn testing: Jest, React Testing Library, Cypress</li>
              <li>Study design patterns and architecture</li>
              <li>Contribute to open-source React projects</li>
              <li>Learn Next.js 14+ App Router in depth</li>
              <li>Explore React Native for mobile development</li>
              <li>Study performance optimization techniques</li>
              <li>Learn GraphQL with Apollo Client</li>
              <li>Practice building full-stack applications</li>
            </ul>
          </Note>
        </SubSection>
      </Section>

      <Note type="success">
        <strong>Congratulations! 🎉</strong>
        <p className="mt-2">
          You've completed all 12 levels of the React.js Learning Hub! You now have comprehensive knowledge from React basics to production deployment and modern ecosystem tools. Keep building, keep learning, and keep coding!
        </p>
      </Note>
    </div>
  );
}