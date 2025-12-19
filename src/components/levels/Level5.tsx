import { Section } from '../Section';
import { SubSection } from '../SubSection';
import { Definition } from '../Definition';
import { CodeBlock } from '../CodeBlock';
import { Note } from '../Note';

export function Level5() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-purple-500 text-white text-sm rounded-full mb-2">
          Level 5
        </div>
        <h1 className="text-3xl text-gray-900 dark:text-white">Routing & Navigation</h1>
      </div>

      <Section title="12. React Router">
        <SubSection title="Installing React Router">
          <CodeBlock
            title="Installation"
            code={`# Install React Router
npm install react-router-dom

# or with yarn
yarn add react-router-dom`}
          />
        </SubSection>

        <SubSection title="BrowserRouter">
          <Definition>
            BrowserRouter uses the HTML5 history API to keep your UI in sync with the URL. It should wrap your entire app.
          </Definition>
          <CodeBlock
            title="Basic Setup"
            code={`import { BrowserRouter, Routes, Route } from 'react-router-dom';

// main.tsx or App.tsx
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}`}
          />
        </SubSection>

        <SubSection title="Routes & Route">
          <Definition>
            Routes acts as a container for all Route components. Each Route defines a path and the component to render when that path matches.
          </Definition>
          <CodeBlock
            title="Advanced Routes"
            code={`import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Exact path */}
        <Route path="/" element={<Home />} />
        
        {/* Multiple routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        
        {/* Route with layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        
        {/* Catch-all route (404) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// Layout component with Outlet
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>Header</header>
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
      <footer>Footer</footer>
    </div>
  );
}`}
          />
        </SubSection>

        <SubSection title="Link & NavLink">
          <Definition>
            Link creates navigation links without page reloads. NavLink is similar but adds styling capabilities for active links.
          </Definition>
          <CodeBlock
            title="Link and NavLink Examples"
            code={`import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      {/* Basic Link */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      
      {/* Link with state */}
      <Link 
        to="/profile" 
        state={{ from: 'navigation' }}
      >
        Profile
      </Link>
      
      {/* NavLink with active styling */}
      <NavLink
        to="/"
        className={({ isActive }) => 
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        Home
      </NavLink>
      
      <NavLink
        to="/dashboard"
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'black',
          fontWeight: isActive ? 'bold' : 'normal'
        })}
      >
        Dashboard
      </NavLink>
      
      {/* NavLink with end prop (exact match) */}
      <NavLink to="/" end>
        Home
      </NavLink>
    </nav>
  );
}

// Practical Navigation Component
function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto flex gap-4 p-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            \`px-3 py-2 rounded \${isActive ? 'bg-blue-700' : 'hover:bg-blue-500'}\`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            \`px-3 py-2 rounded \${isActive ? 'bg-blue-700' : 'hover:bg-blue-500'}\`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            \`px-3 py-2 rounded \${isActive ? 'bg-blue-700' : 'hover:bg-blue-500'}\`
          }
        >
          About
        </NavLink>
      </nav>
    </header>
  );
}`}
          />
        </SubSection>

        <SubSection title="useParams">
          <Definition>
            useParams hook returns an object of key/value pairs of URL parameters. Useful for dynamic routes.
          </Definition>
          <CodeBlock
            title="Dynamic Routes with useParams"
            code={`import { Routes, Route, useParams, Link } from 'react-router-dom';

function App() {
  return (
    <Routes>
      {/* Dynamic route with parameter */}
      <Route path="/user/:id" element={<UserProfile />} />
      <Route path="/post/:postId" element={<Post />} />
      
      {/* Multiple parameters */}
      <Route path="/blog/:category/:slug" element={<BlogPost />} />
      
      {/* Optional parameter */}
      <Route path="/products/:category?" element={<Products />} />
    </Routes>
  );
}

// Using useParams
function UserProfile() {
  const { id } = useParams();
  
  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
    </div>
  );
}

function BlogPost() {
  const { category, slug } = useParams();
  
  return (
    <div>
      <h1>{slug}</h1>
      <p>Category: {category}</p>
    </div>
  );
}

// Practical example with data fetching
function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(\`/api/posts/\${postId}\`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      });
  }, [postId]);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

// List with links to dynamic routes
function UserList() {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ];
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link to={{\`/user/\${user.id}\`}}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
}`}
          />
        </SubSection>

        <SubSection title="useNavigate">
          <Definition>
            useNavigate hook returns a function that lets you navigate programmatically, useful for redirects after actions like form submissions.
          </Definition>
          <CodeBlock
            title="Programmatic Navigation"
            code={`import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const success = await login(email, password);
    
    if (success) {
      // Navigate to dashboard
      navigate('/dashboard');
      
      // Navigate with replace (can't go back)
      // navigate('/dashboard', { replace: true });
      
      // Navigate with state
      // navigate('/dashboard', { state: { from: 'login' } });
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

// Navigation examples
function NavigationExamples() {
  const navigate = useNavigate();
  
  return (
    <div>
      {/* Go to specific route */}
      <button onClick={() => navigate('/home')}>
        Go Home
      </button>
      
      {/* Go back */}
      <button onClick={() => navigate(-1)}>
        Go Back
      </button>
      
      {/* Go forward */}
      <button onClick={() => navigate(1)}>
        Go Forward
      </button>
      
      {/* Navigate with state */}
      <button onClick={() => 
        navigate('/profile', { state: { from: 'dashboard' } })
      }>
        View Profile
      </button>
      
      {/* Replace current entry */}
      <button onClick={() => 
        navigate('/success', { replace: true })
      }>
        Submit Form
      </button>
    </div>
  );
}

async function login(email, password) {
  // Mock login
  return true;
}`}
          />
        </SubSection>

        <SubSection title="Nested Routes">
          <Definition>
            Nested routes allow you to render routes inside other routes, creating hierarchical layouts and URL structures.
          </Definition>
          <CodeBlock
            title="Nested Routes Example"
            code={`import { Routes, Route, Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* Parent route with nested children */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="posts" element={<Posts />}>
          <Route index element={<PostList />} />
          <Route path=":id" element={<PostDetail />} />
        </Route>
      </Route>
    </Routes>
  );
}

// Parent component with Outlet
function DashboardLayout() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <nav>
          <Link to="/dashboard">Home</Link>
          <Link to="/dashboard/profile">Profile</Link>
          <Link to="/dashboard/settings">Settings</Link>
          <Link to="/dashboard/posts">Posts</Link>
        </nav>
      </aside>
      
      <main className="content">
        {/* Child routes render here */}
        <Outlet />
      </main>
    </div>
  );
}

function DashboardHome() {
  return <h1>Dashboard Home</h1>;
}

function Profile() {
  return <h1>User Profile</h1>;
}

function Settings() {
  return <h1>Settings</h1>;
}

// Nested children
function Posts() {
  return (
    <div>
      <h2>Posts</h2>
      <Outlet />
    </div>
  );
}

function PostList() {
  return <div>List of posts...</div>;
}

function PostDetail() {
  const { id } = useParams();
  return <div>Post {id} details...</div>;
}`}
          />
        </SubSection>

        <SubSection title="Protected Routes">
          <Definition>
            Protected routes restrict access to certain pages based on authentication or authorization status.
          </Definition>
          <CodeBlock
            title="Protected Route Implementation"
            code={`import { Navigate, Outlet } from 'react-router-dom';

// Protected Route Component
function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth(); // Custom hook
  
  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }
  
  return children ? children : <Outlet />;
}

// Role-based Protected Route
function RoleBasedRoute({ allowedRoles, children }) {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }
  
  return children ? children : <Outlet />;
}

// Usage in App
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      
      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      
      {/* Admin only routes */}
      <Route element={<RoleBasedRoute allowedRoles={['admin']} />}>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/users" element={<UserManagement />} />
      </Route>
      
      {/* Alternative: Direct wrapping */}
      <Route 
        path="/settings" 
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}

// Custom auth hook
function useAuth() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('token');
    if (token) {
      // Validate token and get user
      setUser({ id: 1, role: 'user' });
    }
  }, []);
  
  return user;
}`}
          />
        </SubSection>

        <SubSection title="404 Page Handling">
          <CodeBlock
            title="404 Not Found Page"
            code={`import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Catch all unmatched routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// 404 Page Component
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

// Alternative with useNavigate
function NotFoundAlt() {
  const navigate = useNavigate();
  
  return (
    <div className="not-found">
      <h1>404 - Not Found</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  );
}`}
          />
        </SubSection>
      </Section>

      <Note type="success">
        Level 5 complete! You've mastered React Router and navigation. Continue to Level 6 to learn about forms, validation, and API integration.
      </Note>
    </div>
  );
}