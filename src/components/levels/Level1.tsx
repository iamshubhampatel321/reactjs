import { Section } from '../Section';
import { SubSection } from '../SubSection';
import { Definition } from '../Definition';
import { CodeBlock } from '../CodeBlock';
import { Note } from '../Note';

export function Level1() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-green-500 text-white text-sm rounded-full mb-2">
          Level 1
        </div>
        <h1 className="text-3xl text-gray-900 dark:text-white">React Fundamentals</h1>
      </div>

      <Section title="1. What is React?">
        <Definition>
          React is a JavaScript library for building user interfaces. It lets you create reusable UI components that update efficiently when your data changes.
        </Definition>
        
        <SubSection title="Key Benefits">
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li><strong>Component-Based:</strong> Build encapsulated, reusable components</li>
            <li><strong>Declarative:</strong> Describe what you want, React handles the how</li>
            <li><strong>Fast Updates:</strong> Virtual DOM ensures efficient rendering</li>
          </ul>
        </SubSection>

        <CodeBlock
          title="Your First React Component"
          code={`function Welcome() {
  return <h1>Hello, React!</h1>;
}

// Use it in your app
function App() {
  return <Welcome />;
}`}
        />
      </Section>

      <Section title="2. JSX Basics">
        <Definition>
          JSX lets you write HTML-like code in JavaScript. It's not HTML - it's JavaScript that looks like HTML.
        </Definition>

        <CodeBlock
          title="JSX Examples"
          code={`// Variables in JSX
const name = "Alice";
const greeting = <h1>Hello, {name}!</h1>;

// Expressions in JSX
const age = 25;
const message = <p>Next year you'll be {age + 1}</p>;

// Conditional rendering
const isLoggedIn = true;
const button = (
  <button>
    {isLoggedIn ? 'Logout' : 'Login'}
  </button>
);`}
        />

        <Note type="warning">
          JSX must have one parent element. Use <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-900 dark:text-gray-100 text-sm">&lt;&gt;...&lt;/&gt;</code> (Fragment) to wrap multiple elements without adding extra DOM nodes.
        </Note>

        <CodeBlock
          title="JSX Rules"
          code={`// ✅ Correct - Single parent
function Good() {
  return (
    <>
      <h1>Title</h1>
      <p>Content</p>
    </>
  );
}

// ❌ Wrong - Multiple parents
function Bad() {
  return (
    <h1>Title</h1>
    <p>Content</p>
  );
}`}
        />
      </Section>

      <Section title="3. Components">
        <Definition>
          Components are JavaScript functions that return JSX. They're the building blocks of React apps.
        </Definition>

        <CodeBlock
          title="Simple Component"
          code={`function Button() {
  return <button>Click Me</button>;
}

// Component with props
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Using components
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Button />
    </div>
  );
}`}
        />

        <Note>
          Component names must start with a capital letter. React treats lowercase names as HTML tags.
        </Note>

        <SubSection title="Props - Passing Data">
          <Definition>
            Props (properties) let you pass data from parent to child components.
          </Definition>
          
          <CodeBlock
            title="Props Example"
            code={`function UserCard({ name, age, job }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
    </div>
  );
}

// Using the component
function App() {
  return (
    <UserCard 
      name="John Doe" 
      age={30} 
      job="Developer" 
    />
  );
}`}
          />
        </SubSection>

        <SubSection title="Lists and Keys">
          <CodeBlock
            title="Rendering Lists"
            code={`function TodoList() {
  const todos = ['Learn React', 'Build Project', 'Deploy App'];
  
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

// Better: Use unique IDs as keys
function UserList() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}
          />
        </SubSection>
      </Section>

      <Section title="4. Events">
        <Definition>
          React events are named using camelCase and you pass functions, not strings.
        </Definition>

        <CodeBlock
          title="Event Handling"
          code={`function Button() {
  function handleClick() {
    alert('Button clicked!');
  }
  
  return <button onClick={handleClick}>Click Me</button>;
}

// Inline handler
function Counter() {
  let count = 0;
  
  return (
    <button onClick={() => {
      count = count + 1;
      alert(\`Count: \${count}\`);
    }}>
      Click: {count}
    </button>
  );
}

// Event object
function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    alert('Form submitted!');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}`}
        />
      </Section>

      <Section title="5. Project Setup">
        <SubSection title="Quick Start with Vite">
          <CodeBlock
            title="Create New React App"
            code={`# Create new project
npm create vite@latest my-app -- --template react

# Navigate and install
cd my-app
npm install

# Start development server
npm run dev`}
          />
        </SubSection>

        <SubSection title="Basic File Structure">
          <CodeBlock
            title="Essential Files"
            code={`my-app/
├── src/
│   ├── App.jsx         # Main component
│   ├── main.jsx        # Entry point
│   └── index.css       # Styles
├── index.html          # HTML template
└── package.json        # Dependencies`}
          />
        </SubSection>
      </Section>

      <Note type="success">
        <strong>Level 1 Complete!</strong> You now understand React basics, JSX, components, props, and events. Next: Learn about state and hooks in Level 2.
      </Note>
    </div>
  );
}