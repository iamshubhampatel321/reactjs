import { Section } from '../Section';
import { SubSection } from '../SubSection';
import { Definition } from '../Definition';
import { CodeBlock } from '../CodeBlock';
import { Note } from '../Note';

export function Level2() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-yellow-500 text-white text-sm rounded-full mb-2">
          Level 2
        </div>
        <h1 className="text-3xl text-gray-900 dark:text-white">Props, State & Events</h1>
      </div>

      <Section title="1. Props">
        <Definition>
          Props (properties) are how you pass data from parent to child components. Think of them as function arguments.
        </Definition>

        <CodeBlock
          title="Props Example"
          code={`// Parent passes props
function App() {
  return (
    <UserCard 
      name="Alice" 
      age={25} 
      isOnline={true} 
    />
  );
}

// Child receives props
function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      {props.isOnline && <span>🟢 Online</span>}
    </div>
  );
}

// Destructuring props (cleaner)
function UserCard({ name, age, isOnline }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {isOnline && <span>🟢 Online</span>}
    </div>
  );
}`}
        />

        <Note type="warning">
          Props are read-only! Never modify them inside a component.
        </Note>

        <SubSection title="Children Prop">
          <Definition>
            The special <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-900 dark:text-gray-100 text-sm">children</code> prop lets you pass content between component tags.
          </Definition>
          
          <CodeBlock
            title="Children Prop"
            code={`function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

// Usage
function App() {
  return (
    <Card title="My Card">
      <p>This is the content</p>
      <button>Click me</button>
    </Card>
  );
}`}
          />
        </SubSection>
      </Section>

      <Section title="2. State">
        <Definition>
          State is data that changes over time. When state changes, React re-renders the component.
        </Definition>

        <CodeBlock
          title="useState Hook"
          code={`import { useState } from 'react';

function Counter() {
  // Declare state variable
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
        />

        <Note>
          Always use the setter function (setCount) to update state. Never modify state directly!
        </Note>

        <SubSection title="Multiple State Variables">
          <CodeBlock
            title="Managing Multiple States"
            code={`function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [agreed, setAgreed] = useState(false);
  
  return (
    <form>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input 
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Age"
      />
      <label>
        <input 
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        I agree
      </label>
    </form>
  );
}`}
          />
        </SubSection>

        <SubSection title="Object State">
          <CodeBlock
            title="State as Object"
            code={`function UserProfile() {
  const [user, setUser] = useState({
    name: 'Alice',
    age: 25,
    city: 'NYC'
  });
  
  // Update object state - must spread previous state
  const updateName = (newName) => {
    setUser({
      ...user,
      name: newName
    });
  };
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.age} - {user.city}</p>
      <button onClick={() => updateName('Bob')}>
        Change Name
      </button>
    </div>
  );
}`}
          />
        </SubSection>
      </Section>

      <Section title="3. Events">
        <Definition>
          React handles events similar to HTML, but with camelCase names and function references.
        </Definition>

        <CodeBlock
          title="Common Events"
          code={`function EventExamples() {
  const [text, setText] = useState('');
  
  // Click event
  const handleClick = () => {
    alert('Clicked!');
  };
  
  // Input change event
  const handleChange = (event) => {
    setText(event.target.value);
  };
  
  // Form submit event
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log('Submitted:', text);
  };
  
  // Mouse events
  const handleMouseEnter = () => {
    console.log('Mouse entered');
  };
  
  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>
      
      <input 
        value={text}
        onChange={handleChange}
        onFocus={() => console.log('Input focused')}
      />
      
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      
      <div onMouseEnter={handleMouseEnter}>
        Hover over me
      </div>
    </div>
  );
}`}
        />

        <SubSection title="Passing Arguments to Event Handlers">
          <CodeBlock
            title="Event Handler with Arguments"
            code={`function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build App' }
  ]);
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}`}
          />
        </SubSection>
      </Section>

      <Section title="4. Practical Example">
        <CodeBlock
          title="Complete Counter App"
          code={`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  
  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);
  
  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      
      <div>
        <label>
          Step:
          <input 
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div>
      
      <div>
        <button onClick={decrement}>-{step}</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+{step}</button>
      </div>
    </div>
  );
}

export default Counter;`}
        />
      </Section>

      <Note type="success">
        <strong>Level 2 Complete!</strong> You now understand props, state, and event handling - the core of React interactivity. Next: Learn about Hooks in Level 3.
      </Note>
    </div>
  );
}
