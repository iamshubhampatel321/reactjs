import { Section } from '../Section';
import { SubSection } from '../SubSection';
import { Definition } from '../Definition';
import { CodeBlock } from '../CodeBlock';
import { Note } from '../Note';

export function Level3() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-orange-500 text-white text-sm rounded-full mb-2">
          Level 3
        </div>
        <h1 className="text-3xl text-gray-900 dark:text-white">Hooks & Lifecycle</h1>
      </div>

      <Section title="7. React Hooks (Core)">
        <SubSection title="Rules of Hooks">
          <Note type="warning">
            <strong>Two Golden Rules:</strong>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Only call hooks at the top level (not inside loops, conditions, or nested functions)</li>
              <li>Only call hooks from React function components or custom hooks</li>
            </ol>
          </Note>
          <CodeBlock
            title="Hook Rules Examples"
            code={`import { useState, useEffect } from 'react';

function Component() {
  // ✅ Correct - Top level
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // ❌ Wrong - Inside condition
  if (count > 0) {
    const [temp, setTemp] = useState(0); // Error!
  }

  // ❌ Wrong - Inside loop
  for (let i = 0; i < 3; i++) {
    const [item, setItem] = useState(i); // Error!
  }

  // ✅ Correct - useEffect at top level
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return <div>{count}</div>;
}`}
          />
        </SubSection>

        <SubSection title="useState Hook">
          <Definition>
            useState is a Hook that lets you add state to functional components. It returns an array with the current state value and a function to update it.
          </Definition>
          <CodeBlock
            title="useState Advanced Examples"
            code={`import { useState } from 'react';

function StateExamples() {
  // Basic state
  const [count, setCount] = useState(0);

  // State with different types
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  // State with function (lazy initialization)
  const [data, setData] = useState(() => {
    // Expensive computation runs only once
    const saved = localStorage.getItem('data');
    return saved ? JSON.parse(saved) : [];
  });

  // State with object
  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: false
  });

  // Updating object state
  const updateForm = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  // Array operations
  const addItem = (item) => {
    setItems(prev => [...prev, item]);
  };

  const removeItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateItem = (id, newData) => {
    setItems(prev =>
      prev.map(item => item.id === id ? { ...item, ...newData } : item)
    );
  };

  return <div>{/* UI */}</div>;
}`}
          />
        </SubSection>

        <SubSection title="useEffect Hook">
          <Definition>
            useEffect lets you perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
          </Definition>
          <CodeBlock
            title="useEffect Basic Usage"
            code={`import { useState, useEffect } from 'react';

function EffectExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Effect runs after every render
  useEffect(() => {
    console.log('Component rendered');
  });

  // Effect runs only once (on mount)
  useEffect(() => {
    console.log('Component mounted');
    // Good for: API calls, subscriptions, setup
  }, []); // Empty dependency array

  // Effect runs when count changes
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]); // Runs when count updates

  // Effect with multiple dependencies
  useEffect(() => {
    console.log(\`Count: \${count}, Name: \${name}\`);
  }, [count, name]); // Runs when either changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}`}
          />
        </SubSection>

        <SubSection title="useEffect Dependency Array">
          <Note>
            The dependency array tells React when to re-run the effect. Missing dependencies can cause bugs!
          </Note>
          <CodeBlock
            title="Dependency Array Patterns"
            code={`import { useState, useEffect } from 'react';

function DependencyExample() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  // No dependency array - runs after every render
  useEffect(() => {
    console.log('Runs every render');
  });

  // Empty array [] - runs once on mount
  useEffect(() => {
    console.log('Runs once on mount');
    fetchInitialData();
  }, []);

  // With dependencies - runs when deps change
  useEffect(() => {
    if (count > 0) {
      saveCount(count);
    }
  }, [count]);

  // Multiple dependencies
  useEffect(() => {
    if (user) {
      logUserActivity(user, count);
    }
  }, [user, count]);

  // Function dependency (be careful!)
  const fetchData = () => {
    // fetch logic
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]); // This recreates every render!

  return <div>{count}</div>;
}

function fetchInitialData() {}
function saveCount(count) {}
function logUserActivity(user, count) {}`}
          />
        </SubSection>

        <SubSection title="Cleanup Functions">
          <Definition>
            Cleanup functions run before the component unmounts or before the effect runs again. They're used to clean up subscriptions, timers, or other side effects.
          </Definition>
          <CodeBlock
            title="Cleanup Examples"
            code={`import { useState, useEffect } from 'react';

function CleanupExample() {
  const [count, setCount] = useState(0);

  // Timer cleanup
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timer);
      console.log('Timer cleared');
    };
  }, []);

  // Event listener cleanup
  useEffect(() => {
    const handleResize = () => {
      console.log('Window resized');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Subscription cleanup
  useEffect(() => {
    const subscription = subscribeToData((data) => {
      console.log('New data:', data);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Abort fetch on unmount
  useEffect(() => {
    const controller = new AbortController();

    fetch('/api/data', { signal: controller.signal })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return <div>Count: {count}</div>;
}

function subscribeToData(callback) {
  return { unsubscribe: () => {} };
}`}
          />
        </SubSection>

        <SubSection title="Multiple useEffect Hooks">
          <Note type="info">
            You can use multiple useEffect hooks to separate concerns and organize your side effects logically.
          </Note>
          <CodeBlock
            title="Multiple Effects Pattern"
            code={`import { useState, useEffect } from 'react';

function MultipleEffects({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [online, setOnline] = useState(false);

  // Effect 1: Fetch user data
  useEffect(() => {
    fetchUser(userId).then(data => setUser(data));
  }, [userId]);

  // Effect 2: Fetch user posts
  useEffect(() => {
    if (user) {
      fetchPosts(user.id).then(data => setPosts(data));
    }
  }, [user]);

  // Effect 3: Subscribe to online status
  useEffect(() => {
    const subscription = subscribeToStatus(userId, setOnline);
    return () => subscription.unsubscribe();
  }, [userId]);

  // Effect 4: Update document title
  useEffect(() => {
    if (user) {
      document.title = \`\${user.name}'s Profile\`;
    }
  }, [user]);

  // Effect 5: Log analytics
  useEffect(() => {
    logPageView('profile', userId);
  }, [userId]);

  return <div>{/* UI */}</div>;
}

async function fetchUser(id) { return {}; }
async function fetchPosts(id) { return []; }
function subscribeToStatus(id, callback) {
  return { unsubscribe: () => {} };
}
function logPageView(page, id) {}`}
          />
        </SubSection>
      </Section>

      <Section title="8. Component Lifecycle (with Hooks)">
        <SubSection title="Lifecycle Phases">
          <Definition>
            React components go through three lifecycle phases: Mounting (component created), Updating (component re-rendered), and Unmounting (component removed).
          </Definition>
          <CodeBlock
            title="Lifecycle with Hooks"
            code={`import { useState, useEffect } from 'react';

function LifecycleDemo() {
  const [count, setCount] = useState(0);

  // MOUNTING - Runs once when component mounts
  useEffect(() => {
    console.log('✅ Component Mounted');
    
    // Cleanup runs on UNMOUNTING
    return () => {
      console.log('❌ Component Unmounted');
    };
  }, []);

  // UPDATING - Runs when count changes
  useEffect(() => {
    console.log('🔄 Component Updated - count changed:', count);
  }, [count]);

  // EVERY RENDER - Runs after every render
  useEffect(() => {
    console.log('🎨 Component Rendered');
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Update
      </button>
    </div>
  );
}`}
          />
        </SubSection>

        <SubSection title="Lifecycle Equivalents in Hooks">
          <CodeBlock
            title="Class Component vs Hooks Lifecycle"
            code={`import { useState, useEffect } from 'react';

// CLASS COMPONENT LIFECYCLE (Old Way)
class OldComponent extends React.Component {
  componentDidMount() {
    // Runs once after first render
  }

  componentDidUpdate(prevProps, prevState) {
    // Runs after every update
  }

  componentWillUnmount() {
    // Runs before component unmounts
  }

  render() {
    return <div />;
  }
}

// FUNCTIONAL COMPONENT WITH HOOKS (Modern Way)
function ModernComponent({ userId }) {
  const [data, setData] = useState(null);

  // componentDidMount equivalent
  useEffect(() => {
    console.log('Mounted - fetch initial data');
    fetchData();
  }, []);

  // componentDidUpdate equivalent (when userId changes)
  useEffect(() => {
    console.log('Updated - userId changed');
    fetchData();
  }, [userId]);

  // componentWillUnmount equivalent
  useEffect(() => {
    return () => {
      console.log('Unmounting - cleanup');
    };
  }, []);

  // Combined: mount + update + unmount
  useEffect(() => {
    console.log('Mount or userId changed');
    fetchData();

    return () => {
      console.log('Cleanup before next effect or unmount');
    };
  }, [userId]);

  function fetchData() {
    // fetch logic
  }

  return <div>{data}</div>;
}`}
          />
        </SubSection>
      </Section>

      <Section title="9. Additional Hooks">
        <SubSection title="useRef Hook">
          <Definition>
            useRef returns a mutable ref object whose .current property persists across re-renders. It's useful for accessing DOM elements and storing mutable values that don't trigger re-renders.
          </Definition>
          <CodeBlock
            title="useRef Examples"
            code={`import { useRef, useEffect, useState } from 'react';

function RefExamples() {
  const inputRef = useRef(null);
  const countRef = useRef(0);
  const [renders, setRenders] = useState(0);

  // Access DOM element
  const focusInput = () => {
    inputRef.current.focus();
  };

  // Store mutable value (doesn't cause re-render)
  useEffect(() => {
    countRef.current += 1;
    console.log('Render count:', countRef.current);
  });

  // Store previous value
  const prevValueRef = useRef();
  useEffect(() => {
    prevValueRef.current = renders;
  });

  // Store interval/timer ID
  const intervalRef = useRef(null);
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      console.log('Tick');
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
      
      <p>Renders: {renders}</p>
      <p>Previous renders: {prevValueRef.current}</p>
      <button onClick={() => setRenders(r => r + 1)}>
        Re-render
      </button>
      
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}`}
          />
        </SubSection>

        <SubSection title="useContext Hook">
          <Definition>
            useContext lets you subscribe to React context without introducing nesting. It accepts a context object and returns the current context value.
          </Definition>
          <CodeBlock
            title="useContext Example"
            code={`import { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext('light');
const UserContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState({ name: 'John', role: 'admin' });

  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={user}>
        <Toolbar />
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  // Use context
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <button className={\`btn-\${theme}\`}>
      {user.name} - {theme} theme
    </button>
  );
}`}
          />
        </SubSection>

        <SubSection title="useMemo Hook">
          <Definition>
            useMemo memoizes expensive calculations and only recalculates when dependencies change. It helps optimize performance by avoiding unnecessary computations.
          </Definition>
          <CodeBlock
            title="useMemo Example"
            code={`import { useState, useMemo } from 'react';

function MemoExample() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // Expensive calculation
  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  // ❌ Without useMemo - recalculates every render
  const result = expensiveCalculation(count);

  // ✅ With useMemo - only recalculates when count changes
  const memoizedResult = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  // Memoize filtered list
  const expensiveItems = useMemo(() => {
    return items.filter(item => item.active)
                .sort((a, b) => a.price - b.price);
  }, [items]);

  return (
    <div>
      <p>Result: {memoizedResult}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
          />
        </SubSection>

        <SubSection title="useCallback Hook">
          <Definition>
            useCallback returns a memoized callback function that only changes if dependencies change. It's useful for preventing unnecessary re-renders of child components.
          </Definition>
          <CodeBlock
            title="useCallback Example"
            code={`import { useState, useCallback, memo } from 'react';

function CallbackExample() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // ❌ Without useCallback - creates new function every render
  const handleClick = () => {
    console.log('Clicked');
  };

  // ✅ With useCallback - same function unless deps change
  const handleClickMemo = useCallback(() => {
    console.log('Clicked');
  }, []);

  // Callback with dependencies
  const handleDelete = useCallback((id) => {
    setItems(items.filter(item => item.id !== id));
  }, [items]);

  // Callback accessing state
  const increment = useCallback(() => {
    setCount(c => c + 1); // Use functional update
  }, []); // No dependencies needed!

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <ChildComponent onClick={handleClickMemo} />
    </div>
  );
}

// Memoized child component
const ChildComponent = memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
});`}
          />
        </SubSection>

        <SubSection title="Custom Hooks">
          <Definition>
            Custom Hooks are JavaScript functions whose names start with "use" and that may call other Hooks. They let you extract component logic into reusable functions.
          </Definition>
          <CodeBlock
            title="Custom Hook Examples"
            code={`import { useState, useEffect } from 'react';

// Custom hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
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

  return { data, loading, error };
}

// Custom hook for local storage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Custom hook for window size
function useWindowSize() {
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

  return size;
}

// Using custom hooks
function MyComponent() {
  const { data, loading, error } = useFetch('/api/users');
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const { width, height } = useWindowSize();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <p>Window: {width}x{height}</p>
      <p>Theme: {theme}</p>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}`}
          />
        </SubSection>
      </Section>

      <Note type="success">
        Level 3 completed! You've mastered React Hooks and component lifecycle. Continue to Level 4 to learn about styling and assets management.
      </Note>
    </div>
  );
}