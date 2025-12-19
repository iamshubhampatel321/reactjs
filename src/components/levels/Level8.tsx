import { Section } from '../Section';
import { SubSection } from '../SubSection';
import { Definition } from '../Definition';
import { CodeBlock } from '../CodeBlock';
import { Note } from '../Note';

export function Level8() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-gray-800 text-white text-sm rounded-full mb-2">
          Level 8
        </div>
        <h1 className="text-3xl text-gray-900 dark:text-white">Performance Optimization</h1>
      </div>

      <Section title="19. Performance Concepts">
        <SubSection title="Re-rendering Issues">
          <Definition>
            React re-renders components when state or props change. Understanding and controlling re-renders is key to building performant applications.
          </Definition>
          <CodeBlock
            title="Understanding Re-renders"
            code={`import { useState } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  
  console.log('Parent rendered');

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
      {/* ❌ Child re-renders even though it doesn't use count */}
      <ExpensiveChild />
    </div>
  );
}

function ExpensiveChild() {
  console.log('ExpensiveChild rendered');
  
  // Expensive calculation
  const result = Array.from({ length: 1000000 })
    .reduce((acc, _, i) => acc + i, 0);
  
  return <div>Result: {result}</div>;
}

// When to optimize:
// - Component renders frequently
// - Component has expensive computations
// - Large lists or trees
// - Complex UI components

// Common causes of unnecessary re-renders:
// 1. Parent component re-renders
// 2. Creating new objects/arrays in render
// 3. Inline function definitions
// 4. Context value changes`}
          />
        </SubSection>

        <SubSection title="React.memo">
          <Definition>
            React.memo is a higher-order component that memoizes a component, preventing re-renders if props haven't changed.
          </Definition>
          <CodeBlock
            title="React.memo Usage"
            code={`import { memo, useState } from 'react';

// ✅ Memoized component - only re-renders if props change
const ExpensiveComponent = memo(function ExpensiveComponent({ value }) {
  console.log('ExpensiveComponent rendered');
  
  const result = heavyCalculation(value);
  
  return <div>Result: {result}</div>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(100);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      
      {/* ExpensiveComponent won't re-render when count changes */}
      <ExpensiveComponent value={value} />
      
      <button onClick={() => setValue(value + 1)}>
        Change Value
      </button>
    </div>
  );
}

// Custom comparison function
const UserCard = memo(
  function UserCard({ user }) {
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => {
    // Return true if props are equal (skip re-render)
    return prevProps.user.id === nextProps.user.id;
  }
);

// When to use React.memo:
// ✅ Pure functional components
// ✅ Components that render often with same props
// ✅ Components with expensive rendering logic
// ❌ Components that always receive different props
// ❌ Very simple components (overhead not worth it)

function heavyCalculation(num) {
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += num;
  }
  return result;
}`}
          />
        </SubSection>

        <SubSection title="useMemo">
          <Definition>
            useMemo memoizes the result of an expensive calculation, only recalculating when dependencies change.
          </Definition>
          <CodeBlock
            title="useMemo Examples"
            code={`import { useState, useMemo } from 'react';

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // ❌ Without useMemo - recalculates every render
  const expensiveValue = expensiveCalculation(count);

  // ✅ With useMemo - only recalculates when count changes
  const memoizedValue = useMemo(() => {
    console.log('Calculating...');
    return expensiveCalculation(count);
  }, [count]);

  // Memoize filtered/sorted lists
  const sortedItems = useMemo(() => {
    console.log('Sorting items...');
    return [...items].sort((a, b) => a.price - b.price);
  }, [items]);

  // Memoize object creation
  const config = useMemo(() => ({
    theme: 'dark',
    locale: 'en',
    userId: count
  }), [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Practical example: Search and filter
function ProductList({ products }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredAndSortedProducts = useMemo(() => {
    console.log('Filtering and sorting...');
    
    let result = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    result.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price') return a.price - b.price;
      return 0;
    });

    return result;
  }, [products, searchTerm, sortBy]);

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>
      {filteredAndSortedProducts.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

function expensiveCalculation(num) {
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += num;
  }
  return result;
}`}
          />
        </SubSection>

        <SubSection title="useCallback">
          <Definition>
            useCallback returns a memoized callback function that only changes if dependencies change. Useful for preventing unnecessary re-renders of child components.
          </Definition>
          <CodeBlock
            title="useCallback Examples"
            code={`import { useState, useCallback, memo } from 'react';

function UseCallbackExample() {
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
  const handleAddItem = useCallback((item) => {
    setItems(prevItems => [...prevItems, item]);
  }, []); // No dependencies needed with functional update

  // Callback accessing state
  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Use functional update to avoid dependency

  return (
    <div>
      <p>Count: {count}</p>
      <MemoizedButton onClick={handleClickMemo} />
      <MemoizedButton onClick={handleIncrement} />
    </div>
  );
}

// Memoized child component
const MemoizedButton = memo(({ onClick, children }) => {
  console.log('Button rendered');
  return <button onClick={onClick}>{children || 'Click me'}</button>;
});

// Practical example: Todo list
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = useCallback((text) => {
    setTodos(prev => [...prev, { id: Date.now(), text, completed: false }]);
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const filteredTodos = useMemo(() => {
    if (filter === 'active') return todos.filter(t => !t.completed);
    if (filter === 'completed') return todos.filter(t => t.completed);
    return todos;
  }, [todos, filter]);

  return (
    <div>
      <TodoInput onAdd={addTodo} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

const TodoInput = memo(({ onAdd }) => {
  const [text, setText] = useState('');
  
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => { onAdd(text); setText(''); }}>Add</button>
    </div>
  );
});

const TodoList = memo(({ todos, onToggle, onDelete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
});

const TodoItem = memo(({ todo, onToggle, onDelete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
});`}
          />
        </SubSection>

        <SubSection title="Lazy Loading & Code Splitting">
          <Definition>
            Lazy loading and code splitting allow you to split your app into smaller chunks and load them on demand, improving initial load time.
          </Definition>
          <CodeBlock
            title="Lazy Loading with Suspense"
            code={`import { lazy, Suspense, useState } from 'react';

// Lazy load components
const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));
const Settings = lazy(() => import('./Settings'));

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('dashboard')}>Dashboard</button>
        <button onClick={() => setCurrentPage('profile')}>Profile</button>
        <button onClick={() => setCurrentPage('settings')}>Settings</button>
      </nav>

      <Suspense fallback={<LoadingSpinner />}>
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'profile' && <Profile />}
        {currentPage === 'settings' && <Settings />}
      </Suspense>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="spinner">
      <div className="spinner-icon"></div>
      <p>Loading...</p>
    </div>
  );
}

// Lazy loading with React Router
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function AppWithRouter() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}

// Conditional lazy loading
function ConditionalLazy() {
  const [showHeavyComponent, setShowHeavyComponent] = useState(false);

  const HeavyComponent = lazy(() => import('./HeavyComponent'));

  return (
    <div>
      <button onClick={() => setShowHeavyComponent(true)}>
        Load Component
      </button>

      {showHeavyComponent && (
        <Suspense fallback={<div>Loading heavy component...</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}

// Preloading strategy
const AdminPanel = lazy(() => import('./AdminPanel'));

function preloadAdminPanel() {
  // Preload when user hovers over button
  import('./AdminPanel');
}

function NavBar() {
  return (
    <button
      onMouseEnter={preloadAdminPanel}
      onClick={() => navigate('/admin')}
    >
      Admin
    </button>
  );
}`}
          />
        </SubSection>
      </Section>

      <Note type="success">
        Level 8 complete! You've learned performance optimization techniques. Move to Level 9 to learn about testing and debugging React applications.
      </Note>
    </div>
  );
}