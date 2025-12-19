import { Section } from '../Section';
import { SubSection } from '../SubSection';
import { Definition } from '../Definition';
import { CodeBlock } from '../CodeBlock';
import { Note } from '../Note';

export function Level9() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-green-600 text-white text-sm rounded-full mb-2">
          Level 9
        </div>
        <h1 className="text-3xl text-gray-900 dark:text-white">Testing & Debugging</h1>
      </div>

      <Section title="20. Debugging React Apps">
        <SubSection title="React Developer Tools">
          <Definition>
            React Developer Tools is a browser extension that allows you to inspect React component hierarchies, props, state, and hooks in the browser.
          </Definition>
          <CodeBlock
            title="Using React DevTools"
            code={`// Install React DevTools extension for your browser
// Chrome: https://chrome.google.com/webstore (search "React Developer Tools")
// Firefox: https://addons.mozilla.org/firefox/ (search "React Developer Tools")

// Features:
// 1. Components Tab
//    - View component tree
//    - Inspect props and state
//    - See hooks values
//    - Filter components

// 2. Profiler Tab
//    - Record rendering performance
//    - See which components re-render
//    - Identify performance bottlenecks

// Using DevTools Programmatically:
function DebugComponent() {
  const [count, setCount] = useState(0);

  // Add display name for better debugging
  DebugComponent.displayName = 'DebugComponent';

  // Log props in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Component Props:', { count });
    }
  }, [count]);

  return <div>Count: {count}</div>;
}

// Useful DevTools shortcuts:
// - Right-click on element → "Inspect React"
// - $r in console = currently selected component
// - Component name appears in DevTools tree`}
          />
        </SubSection>

        <SubSection title="Console Debugging">
          <CodeBlock
            title="Debugging Techniques"
            code={`import { useState, useEffect } from 'react';

function DebuggingExample() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // 1. Console.log debugging
  console.log('Component rendered', { data, error });

  // 2. Conditional logging
  useEffect(() => {
    if (data) {
      console.log('Data loaded:', data);
    }
  }, [data]);

  // 3. Table logging for arrays/objects
  const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 }
  ];
  console.table(users);

  // 4. Grouping logs
  console.group('User Info');
  console.log('Name:', 'John');
  console.log('Age:', 25);
  console.groupEnd();

  // 5. Time measurement
  console.time('API Call');
  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      console.timeEnd('API Call');
      setData(data);
    });

  // 6. Trace function calls
  function deepFunction() {
    console.trace('Function call stack');
  }

  // 7. Custom logging hook
  function useLogger(value, name) {
    useEffect(() => {
      console.log(\`[\${name}] changed:\`, value);
    }, [value, name]);
  }

  useLogger(data, 'data');

  // 8. Debugging state updates
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Before:', count);
    setCount(count + 1);
    console.log('After (still old):', count); // Still old value!
  };

  useEffect(() => {
    console.log('Count updated to:', count); // New value here
  }, [count]);

  // 9. Error boundaries for debugging
  return (
    <ErrorBoundary>
      <div>{data?.name}</div>
    </ErrorBoundary>
  );
}

// Custom debug component
function Debug({ data }) {
  if (process.env.NODE_ENV === 'development') {
    return (
      <pre style={{ background: '#f0f0f0', padding: '10px' }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    );
  }
  return null;
}`}
          />
        </SubSection>

        <SubSection title="Error Boundaries">
          <Definition>
            Error Boundaries are React components that catch JavaScript errors in their child component tree, log errors, and display a fallback UI.
          </Definition>
          <CodeBlock
            title="Error Boundary Implementation"
            code={`import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // Send to error tracking service
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>Something went wrong</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo?.componentStack}
          </details>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <Header />
      <ErrorBoundary>
        <Sidebar />
      </ErrorBoundary>
      <ErrorBoundary>
        <MainContent />
      </ErrorBoundary>
    </ErrorBoundary>
  );
}

// Component that might throw error
function BuggyComponent() {
  const [count, setCount] = useState(0);

  if (count === 5) {
    throw new Error('Crashed at 5!');
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Wrapped component
function SafeComponent() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}`}
          />
        </SubSection>
      </Section>

      <Section title="21. Testing">
        <SubSection title="Unit Testing with Jest">
          <Definition>
            Jest is a JavaScript testing framework that works great with React. It provides test runners, assertions, and mocking capabilities.
          </Definition>
          <CodeBlock
            title="Jest Test Examples"
            code={`// sum.js
export function sum(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// sum.test.js
import { sum, multiply } from './sum';

describe('Math functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds -1 + 1 to equal 0', () => {
    expect(sum(-1, 1)).toBe(0);
  });

  test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});

// Testing objects and arrays
test('object assignment', () => {
  const data = { one: 1 };
  data.two = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('array contains item', () => {
  const items = ['apple', 'banana', 'orange'];
  expect(items).toContain('banana');
  expect(items).toHaveLength(3);
});

// Testing truthiness
test('null is falsy', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeFalsy();
  expect(n).not.toBeTruthy();
});

// Testing numbers
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// Testing strings
test('string matching', () => {
  expect('team').not.toMatch(/I/);
  expect('Christoph').toMatch(/stop/);
});

// Async testing
test('fetches data successfully', async () => {
  const data = await fetchData();
  expect(data).toBe('data');
});

// Testing promises
test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

async function fetchData() {
  return 'data';
}`}
          />
        </SubSection>

        <SubSection title="React Testing Library">
          <Definition>
            React Testing Library is a set of helpers that let you test React components without relying on implementation details. It encourages better testing practices.
          </Definition>
          <CodeBlock
            title="Component Testing"
            code={`import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

// Component to test
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Tests
describe('Counter Component', () => {
  test('renders initial count', () => {
    render(<Counter />);
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });

  test('increments count', () => {
    render(<Counter />);
    const incrementBtn = screen.getByText(/increment/i);
    
    fireEvent.click(incrementBtn);
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
    
    fireEvent.click(incrementBtn);
    expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();
  });

  test('decrements count', () => {
    render(<Counter />);
    const decrementBtn = screen.getByText(/decrement/i);
    
    fireEvent.click(decrementBtn);
    expect(screen.getByText(/Count: -1/i)).toBeInTheDocument();
  });

  test('resets count', () => {
    render(<Counter />);
    const incrementBtn = screen.getByText(/increment/i);
    const resetBtn = screen.getByText(/reset/i);
    
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();
    
    fireEvent.click(resetBtn);
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });
});

// Testing form submission
function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

test('submits form with correct data', async () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);

  const emailInput = screen.getByPlaceholderText(/email/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const submitBtn = screen.getByText(/login/i);

  await userEvent.type(emailInput, 'test@example.com');
  await userEvent.type(passwordInput, 'password123');
  await userEvent.click(submitBtn);

  expect(handleSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123'
  });
});

// Testing async operations
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}

test('loads and displays user', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ name: 'John Doe' })
    })
  );

  render(<UserProfile userId={1} />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
  });

  expect(fetch).toHaveBeenCalledWith('/api/users/1');
});`}
          />
        </SubSection>

        <SubSection title="Mocking APIs">
          <CodeBlock
            title="API Mocking Strategies"
            code={`import { render, screen, waitFor } from '@testing-library/react';

// Mock fetch globally
global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

// Component that fetches data
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Test successful API call
test('fetches and displays users', async () => {
  const mockUsers = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];

  fetch.mockResolvedValueOnce({
    json: async () => mockUsers
  });

  render(<UserList />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(/john/i)).toBeInTheDocument();
    expect(screen.getByText(/jane/i)).toBeInTheDocument();
  });
});

// Test API error
test('displays error message on fetch failure', async () => {
  fetch.mockRejectedValueOnce(new Error('API Error'));

  render(<UserList />);

  await waitFor(() => {
    expect(screen.getByText(/error: api error/i)).toBeInTheDocument();
  });
});

// Mock module
jest.mock('./api', () => ({
  fetchUsers: jest.fn(() => Promise.resolve([
    { id: 1, name: 'John' }
  ]))
}));

// Mock axios
jest.mock('axios');
import axios from 'axios';

test('fetches data with axios', async () => {
  const mockData = { data: [{ id: 1, name: 'John' }] };
  axios.get.mockResolvedValue(mockData);

  // Test component that uses axios
  render(<Component />);

  await waitFor(() => {
    expect(screen.getByText(/john/i)).toBeInTheDocument();
  });
});`}
          />
        </SubSection>
      </Section>

      <Note type="success">
        Level 9 complete! You've learned testing and debugging techniques. Continue to Level 10 for advanced React patterns and concepts.
      </Note>
    </div>
  );
}