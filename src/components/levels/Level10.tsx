import { Section } from '../Section';
import { SubSection } from '../SubSection';
import { Definition } from '../Definition';
import { CodeBlock } from '../CodeBlock';
import { Note } from '../Note';

export function Level10() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-2">
          Level 10
        </div>
        <h1 className="text-3xl text-gray-900 dark:text-white">Advanced Concepts</h1>
      </div>

      <Section title="22. Advanced Patterns">
        <SubSection title="Higher Order Components (HOC)">
          <Definition>
            A Higher Order Component is a function that takes a component and returns a new component with additional props or functionality. It's a pattern for reusing component logic.
          </Definition>
          <CodeBlock
            title="HOC Examples"
            code={`import { useState, useEffect } from 'react';

// Basic HOC
function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
}

// HOC with data fetching
function withData(Component, url) {
  return function WithDataComponent(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setData(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }, []);

    return (
      <Component
        {...props}
        data={data}
        loading={loading}
        error={error}
      />
    );
  };
}

// HOC with authentication
function withAuth(Component) {
  return function WithAuthComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
    }, []);

    if (!isAuthenticated) {
      return <div>Please log in to view this content.</div>;
    }

    return <Component {...props} />;
  };
}

// Using HOCs
function UserList({ data, loading, error }) {
  if (error) return <div>Error: {error.message}</div>;
  return (
    <ul>
      {data?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

const UserListWithLoading = withLoading(UserList);
const UserListWithData = withData(UserList, '/api/users');
const SecureUserList = withAuth(UserListWithData);

// Composing multiple HOCs
function compose(...hocs) {
  return (Component) => {
    return hocs.reduceRight((acc, hoc) => hoc(acc), Component);
  };
}

const EnhancedComponent = compose(
  withAuth,
  withLoading,
  withData('/api/users')
)(UserList);

// HOC with additional props
function withDimensions(Component) {
  return function WithDimensionsComponent(props) {
    const [dimensions, setDimensions] = useState({
      width: window.innerWidth,
      height: window.innerHeight
    });

    useEffect(() => {
      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <Component {...props} dimensions={dimensions} />;
  };
}

function ResponsiveComponent({ dimensions }) {
  return (
    <div>
      Width: {dimensions.width}, Height: {dimensions.height}
    </div>
  );
}

const ResponsiveComponentWithDimensions = withDimensions(ResponsiveComponent);`}
          />
        </SubSection>

        <SubSection title="Render Props">
          <Definition>
            Render props is a technique for sharing code between components using a prop whose value is a function that returns a React element.
          </Definition>
          <CodeBlock
            title="Render Props Pattern"
            code={`import { useState, useEffect } from 'react';

// Mouse position tracker with render prop
function Mouse({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return render(position);
}

// Usage
function App() {
  return (
    <div>
      <h1>Move your mouse</h1>
      <Mouse
        render={(position) => (
          <p>
            Mouse position: {position.x}, {position.y}
          </p>
        )}
      />
    </div>
  );
}

// Data fetcher with render prop
function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return render({ data, loading, error });
}

// Usage
function UserList() {
  return (
    <DataFetcher
      url="/api/users"
      render={({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;
        return (
          <ul>
            {data.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        );
      }}
    />
  );
}

// Using children as render prop
function Toggle({ children }) {
  const [on, setOn] = useState(false);

  const toggle = () => setOn(!on);

  return children({ on, toggle });
}

// Usage
function App() {
  return (
    <Toggle>
      {({ on, toggle }) => (
        <div>
          <button onClick={toggle}>
            {on ? 'ON' : 'OFF'}
          </button>
          {on && <p>The button is ON!</p>}
        </div>
      )}
    </Toggle>
  );
}

// Window size tracker
function WindowSize({ children }) {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return children(size);
}

// Usage
function ResponsiveLayout() {
  return (
    <WindowSize>
      {(size) => (
        <div>
          {size.width < 768 ? (
            <MobileLayout />
          ) : (
            <DesktopLayout />
          )}
        </div>
      )}
    </WindowSize>
  );
}`}
          />
        </SubSection>

        <SubSection title="Compound Components">
          <Definition>
            Compound components is a pattern where components work together to form a cohesive UI, sharing implicit state without explicit props passing.
          </Definition>
          <CodeBlock
            title="Compound Components Pattern"
            code={`import { createContext, useContext, useState } from 'react';

// Tabs compound component
const TabsContext = createContext();

function Tabs({ children, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div className="tab-list">{children}</div>;
}

function Tab({ id, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  return (
    <button
      className={\`tab \${activeTab === id ? 'active' : ''}\`}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </button>
  );
}

function TabPanel({ id, children }) {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== id) return null;

  return <div className="tab-panel">{children}</div>;
}

// Attach sub-components
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

// Usage
function App() {
  return (
    <Tabs defaultTab="home">
      <Tabs.List>
        <Tabs.Tab id="home">Home</Tabs.Tab>
        <Tabs.Tab id="profile">Profile</Tabs.Tab>
        <Tabs.Tab id="settings">Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel id="home">
        <h2>Home Content</h2>
      </Tabs.Panel>
      <Tabs.Panel id="profile">
        <h2>Profile Content</h2>
      </Tabs.Panel>
      <Tabs.Panel id="settings">
        <h2>Settings Content</h2>
      </Tabs.Panel>
    </Tabs>
  );
}

// Accordion compound component
const AccordionContext = createContext();

function Accordion({ children }) {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ id, children }) {
  const { openItems, toggleItem } = useContext(AccordionContext);
  const isOpen = openItems.includes(id);

  return (
    <div className="accordion-item">
      {typeof children === 'function' ? children({ isOpen, toggleItem: () => toggleItem(id) }) : children}
    </div>
  );
}

function AccordionHeader({ children, onClick }) {
  return (
    <div className="accordion-header" onClick={onClick}>
      {children}
    </div>
  );
}

function AccordionBody({ isOpen, children }) {
  if (!isOpen) return null;
  return <div className="accordion-body">{children}</div>;
}

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

// Usage
function FAQSection() {
  return (
    <Accordion>
      <Accordion.Item id="1">
        {({ isOpen, toggleItem }) => (
          <>
            <Accordion.Header onClick={toggleItem}>
              What is React?
            </Accordion.Header>
            <Accordion.Body isOpen={isOpen}>
              React is a JavaScript library for building user interfaces.
            </Accordion.Body>
          </>
        )}
      </Accordion.Item>
    </Accordion>
  );
}`}
          />
        </SubSection>
      </Section>

      <Section title="23. Authentication & Authorization">
        <SubSection title="Login & Signup Flow">
          <CodeBlock
            title="Authentication Implementation"
            code={`import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Auth Context
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const token = localStorage.getItem('token');
    if (token) {
      verifyToken(token).then(user => {
        setUser(user);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setUser(data.user);
        return { success: true };
      } else {
        return { success: false, error: data.message };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const signup = async (userData) => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setUser(data.user);
        return { success: true };
      } else {
        return { success: false, error: data.message };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

// Login Component
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(email, password);

    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}

// Signup Component
function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const result = await signup(formData);

    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      {error && <div className="error">{error}</div>}
      
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      
      <input
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
        required
      />
      
      <button type="submit">Sign Up</button>
    </form>
  );
}

async function verifyToken(token) {
  // Verify token with backend
  const response = await fetch('/api/verify', {
    headers: { Authorization: \`Bearer \${token}\` }
  });
  return response.json();
}`}
          />
        </SubSection>

        <SubSection title="Protected Routes">
          <CodeBlock
            title="Role-Based Access Control"
            code={`import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

// Basic protected route
function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

// Role-based protected route
function RoleProtectedRoute({ allowedRoles }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}

// App Routes
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* Admin only routes */}
      <Route element={<RoleProtectedRoute allowedRoles={['admin']} />}>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/users" element={<UserManagement />} />
      </Route>

      {/* Staff and Admin routes */}
      <Route element={<RoleProtectedRoute allowedRoles={['admin', 'staff']} />}>
        <Route path="/reports" element={<Reports />} />
      </Route>

      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  );
}`}
          />
        </SubSection>
      </Section>

      <Section title="24. Environment & Config">
        <SubSection title="Environment Variables">
          <CodeBlock
            title="Using Environment Variables"
            code={`// .env file (root of project)
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_api_key_here
VITE_APP_NAME=My React App
VITE_ENV=development

// .env.production
VITE_API_URL=https://prod-api.example.com
VITE_ENV=production

// .env.development
VITE_API_URL=http://localhost:3000/api
VITE_ENV=development

// Accessing in React (Vite)
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const APP_NAME = import.meta.env.VITE_APP_NAME;
const isDevelopment = import.meta.env.DEV;
const isProduction = import.meta.env.PROD;

// Config file
// src/config.js
export const config = {
  apiUrl: import.meta.env.VITE_API_URL,
  apiKey: import.meta.env.VITE_API_KEY,
  appName: import.meta.env.VITE_APP_NAME,
  environment: import.meta.env.VITE_ENV,
  features: {
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    enableChat: import.meta.env.VITE_ENABLE_CHAT === 'true'
  }
};

// Usage in components
import { config } from './config';

function App() {
  useEffect(() => {
    fetch(\`\${config.apiUrl}/data\`, {
      headers: {
        'Authorization': \`Bearer \${config.apiKey}\`
      }
    });
  }, []);

  return <div>{config.appName}</div>;
}

// Conditional features
function Analytics() {
  if (!config.features.enableAnalytics) {
    return null;
  }

  return <div>Analytics Component</div>;
}

// Environment-specific code
if (import.meta.env.DEV) {
  console.log('Development mode');
}

if (import.meta.env.PROD) {
  // Production-only code
}`}
          />
        </SubSection>
      </Section>

      <Note type="success">
        Level 10 completed! You've mastered advanced React patterns and authentication. Move to Level 11 to learn about deployment and production optimization.
      </Note>
    </div>
  );
}