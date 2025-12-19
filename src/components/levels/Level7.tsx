import { Section } from '../Section';
import { SubSection } from '../SubSection';
import { Definition } from '../Definition';
import { CodeBlock } from '../CodeBlock';
import { Note } from '../Note';

export function Level7() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-amber-700 text-white text-sm rounded-full mb-2">
          Level 7
        </div>
        <h1 className="text-3xl text-gray-900 dark:text-white">State Management</h1>
      </div>

      <Section title="16. Lifting State Up">
        <SubSection title="Parent-Child Communication">
          <Definition>
            Lifting state up means moving state to the closest common ancestor of components that need it. This allows multiple components to share and sync state.
          </Definition>
          <CodeBlock
            title="Lifting State Example"
            code={`import { useState } from 'react';

// ❌ Before: State in each component (not synced)
function BadExample() {
  return (
    <div>
      <TemperatureInput scale="c" />
      <TemperatureInput scale="f" />
    </div>
  );
}

// ✅ After: State lifted to parent (synced)
function Calculator() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (temp) => {
    setScale('c');
    setTemperature(temp);
  };

  const handleFahrenheitChange = (temp) => {
    setScale('f');
    setTemperature(temp);
  };

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
}

function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

const scaleNames = { c: 'Celsius', f: 'Fahrenheit' };

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) return '';
  const output = convert(input);
  return Math.round(output * 1000) / 1000;
}`}
          />
        </SubSection>

        <SubSection title="Prop Drilling">
          <Definition>
            Prop drilling is passing props through multiple component levels to reach a deeply nested component. While functional, it can become cumbersome.
          </Definition>
          <CodeBlock
            title="Prop Drilling Problem"
            code={`// ❌ Prop drilling through multiple levels
function App() {
  const [user, setUser] = useState({ name: 'John', role: 'admin' });

  return <Layout user={user} />;
}

function Layout({ user }) {
  return (
    <div>
      <Header user={user} />
      <Main user={user} />
    </div>
  );
}

function Header({ user }) {
  return <Navigation user={user} />;
}

function Navigation({ user }) {
  return <UserMenu user={user} />;
}

function UserMenu({ user }) {
  // Finally using user here!
  return <div>Welcome, {user.name}</div>;
}

// ✅ Solution 1: Context API (see next section)
// ✅ Solution 2: Component composition
function AppComposition() {
  const [user, setUser] = useState({ name: 'John', role: 'admin' });

  return (
    <Layout
      header={<Header user={user} />}
      main={<Main user={user} />}
    />
  );
}

function LayoutComposition({ header, main }) {
  return (
    <div>
      {header}
      {main}
    </div>
  );
}`}
          />
        </SubSection>
      </Section>

      <Section title="17. Context API">
        <SubSection title="Creating Context">
          <Definition>
            Context provides a way to share values between components without explicitly passing props through every level of the tree.
          </Definition>
          <CodeBlock
            title="Context API Setup"
            code={`import { createContext, useContext, useState } from 'react';

// 1. Create Context
const UserContext = createContext(null);
const ThemeContext = createContext('light');

// 2. Create Provider Component
function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin'
  });

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Create custom hook for easy access
function useUser() {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}

// 4. Wrap app with provider
function App() {
  return (
    <UserProvider>
      <Header />
      <Main />
      <Footer />
    </UserProvider>
  );
}

// 5. Use context in any component
function Header() {
  const { user, logout } = useUser();

  return (
    <header>
      <span>Welcome, {user?.name}</span>
      <button onClick={logout}>Logout</button>
    </header>
  );
}

function Main() {
  const { user } = useUser();

  if (!user) {
    return <div>Please log in</div>;
  }

  return <div>Dashboard for {user.name}</div>;
}`}
          />
        </SubSection>

        <SubSection title="Multiple Contexts">
          <CodeBlock
            title="Combining Multiple Contexts"
            code={`import { createContext, useContext, useState } from 'react';

// Theme Context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Auth Context
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    // Login logic
    setUser({ name: 'John' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Language Context
const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// App with multiple providers
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LanguageProvider>
          <Main />
        </LanguageProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

// Or use a compound provider
function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

// Using multiple contexts
function Component() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className={theme}>
      <p>{language === 'en' ? 'Hello' : 'Hola'}, {user?.name}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setLanguage('es')}>Español</button>
    </div>
  );
}`}
          />
        </SubSection>

        <SubSection title="Context Best Practices">
          <CodeBlock
            title="Advanced Context Patterns"
            code={`import { createContext, useContext, useReducer } from 'react';

// Pattern 1: Context + Reducer for complex state
const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const value = {
    items: state.items,
    addItem,
    removeItem,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Pattern 2: Split context for performance
const UserStateContext = createContext();
const UserDispatchContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserStateContext.Provider value={user}>
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  return useContext(UserStateContext);
}

function useUserDispatch() {
  return useContext(UserDispatchContext);
}

// Usage
function UserProfile() {
  const user = useUserState(); // Only re-renders when user changes
  return <div>{user?.name}</div>;
}

function LoginButton() {
  const setUser = useUserDispatch(); // Never re-renders
  return <button onClick={() => setUser({ name: 'John' })}>Login</button>;
}`}
          />
        </SubSection>
      </Section>

      <Note type="success">
        Level 7 completed! You've learned state management with Context API. For larger applications, continue to Level 8 for performance optimization techniques.
      </Note>
    </div>
  );
}