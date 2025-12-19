import { Section } from '../Section';
import { SubSection } from '../SubSection';
import { Definition } from '../Definition';
import { CodeBlock } from '../CodeBlock';
import { Note } from '../Note';

export function Level6() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-red-500 text-white text-sm rounded-full mb-2">
          Level 6
        </div>
        <h1 className="text-3xl text-gray-900 dark:text-white">Forms & APIs</h1>
      </div>

      <Section title="13. Forms in React">
        <SubSection title="Controlled Forms">
          <Definition>
            Controlled forms are forms where form data is handled by React state. The React state becomes the "single source of truth" for form values.
          </Definition>
          <CodeBlock
            title="Controlled Form Example"
            code={`import { useState } from 'react';

function ControlledForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    age: '',
    country: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select...</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
        </select>
      </div>

      <div>
        <label>
          <input
            name="terms"
            type="checkbox"
            checked={formData.terms}
            onChange={handleChange}
          />
          I agree to terms
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}`}
          />
        </SubSection>

        <SubSection title="Handling Multiple Inputs">
          <CodeBlock
            title="Dynamic Form Handling"
            code={`import { useState } from 'react';

function MultiInputForm() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      zipCode: ''
    },
    hobbies: []
  });

  // Generic change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Nested object handler
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value
      }
    }));
  };

  // Array handler (checkboxes)
  const handleHobbyChange = (hobby) => {
    setFormState(prev => ({
      ...prev,
      hobbies: prev.hobbies.includes(hobby)
        ? prev.hobbies.filter(h => h !== hobby)
        : [...prev.hobbies, hobby]
    }));
  };

  return (
    <form>
      <input
        name="firstName"
        value={formState.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      
      <input
        name="lastName"
        value={formState.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      
      <input
        name="email"
        value={formState.email}
        onChange={handleChange}
        placeholder="Email"
      />
      
      <input
        name="street"
        value={formState.address.street}
        onChange={handleAddressChange}
        placeholder="Street"
      />
      
      <input
        name="city"
        value={formState.address.city}
        onChange={handleAddressChange}
        placeholder="City"
      />
      
      <label>
        <input
          type="checkbox"
          checked={formState.hobbies.includes('reading')}
          onChange={() => handleHobbyChange('reading')}
        />
        Reading
      </label>
      
      <label>
        <input
          type="checkbox"
          checked={formState.hobbies.includes('sports')}
          onChange={() => handleHobbyChange('sports')}
        />
        Sports
      </label>
    </form>
  );
}`}
          />
        </SubSection>

        <SubSection title="Form Submission">
          <CodeBlock
            title="Form Submit Patterns"
            code={`import { useState } from 'react';

function FormSubmission() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset states
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      setSuccess(true);
      console.log('Success:', data);
      
      // Reset form
      setFormData({ email: '', password: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">Login successful!</div>}
      
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({
          ...prev,
          email: e.target.value
        }))}
        disabled={loading}
      />
      
      <input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData(prev => ({
          ...prev,
          password: e.target.value
        }))}
        disabled={loading}
      />
      
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}`}
          />
        </SubSection>

        <SubSection title="Form Reset">
          <CodeBlock
            title="Reset Form Methods"
            code={`import { useState } from 'react';

function FormReset() {
  const initialState = {
    name: '',
    email: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    
    // Method 1: Reset to initial state
    setFormData(initialState);
  };

  const handleReset = () => {
    // Method 2: Manual reset
    setFormData(initialState);
  };

  const handleClear = (e) => {
    // Method 3: Use form reset
    e.target.form.reset();
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
      <button type="reset" onClick={handleClear}>Clear</button>
    </form>
  );
}`}
          />
        </SubSection>

        <SubSection title="Validation Basics">
          <CodeBlock
            title="Basic Form Validation"
            code={`import { useState } from 'react';

function FormValidation() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (name, value) => {
    let error = '';

    switch (name) {
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/\\S+@\\S+\\.\\S+/.test(value)) {
          error = 'Email is invalid';
        }
        break;
      
      case 'password':
        if (!value) {
          error = 'Password is required';
        } else if (value.length < 8) {
          error = 'Password must be at least 8 characters';
        }
        break;
      
      case 'confirmPassword':
        if (value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change if field was touched
    if (touched[name]) {
      const error = validate(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validate(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validate(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    setTouched({
      email: true,
      password: true,
      confirmPassword: true
    });
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form is valid, submitting...');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && (
          <span className="error">{errors.email}</span>
        )}
      </div>

      <div>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password && (
          <span className="error">{errors.password}</span>
        )}
      </div>

      <div>
        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.confirmPassword && errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}`}
          />
        </SubSection>
      </Section>

      <Section title="14. Advanced Form Handling">
        <SubSection title="React Hook Form">
          <Definition>
            React Hook Form is a performant, flexible library for handling forms with easy validation. It reduces re-renders and simplifies form logic.
          </Definition>
          <CodeBlock
            title="React Hook Form Basics"
            code={`import { useForm } from 'react-hook-form@7.55.0';

function HookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
  };

  // Watch specific field
  const watchPassword = watch('password');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          placeholder="Email"
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }
          })}
          type="password"
          placeholder="Password"
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <input
          {...register('confirmPassword', {
            required: 'Please confirm password',
            validate: value =>
              value === watchPassword || 'Passwords do not match'
          })}
          type="password"
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      </div>

      <div>
        <input
          {...register('age', {
            required: 'Age is required',
            min: { value: 18, message: 'Must be 18+' },
            max: { value: 100, message: 'Must be under 100' }
          })}
          type="number"
          placeholder="Age"
        />
        {errors.age && <span>{errors.age.message}</span>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}`}
          />
        </SubSection>

        <SubSection title="Advanced Validation">
          <CodeBlock
            title="Custom Validation Rules"
            code={`import { useForm } from 'react-hook-form@7.55.0';

function AdvancedValidation() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Custom validation function
  const validateUsername = async (value) => {
    const response = await fetch(\`/api/check-username?username=\${value}\`);
    const data = await response.json();
    return data.available || 'Username already taken';
  };

  const validatePassword = (value) => {
    if (!/[A-Z]/.test(value)) {
      return 'Password must contain uppercase letter';
    }
    if (!/[a-z]/.test(value)) {
      return 'Password must contain lowercase letter';
    }
    if (!/[0-9]/.test(value)) {
      return 'Password must contain number';
    }
    if (!/[!@#$%^&*]/.test(value)) {
      return 'Password must contain special character';
    }
    return true;
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register('username', {
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters'
            },
            validate: validateUsername
          })}
          placeholder="Username"
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>

      <div>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            },
            validate: validatePassword
          })}
          type="password"
          placeholder="Password"
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <input
          {...register('website', {
            pattern: {
              value: /^https?:\\/\\/.+/,
              message: 'URL must start with http:// or https://'
            }
          })}
          placeholder="Website (optional)"
        />
        {errors.website && <span>{errors.website.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}`}
          />
        </SubSection>
      </Section>

      <Section title="15. API Integration">
        <SubSection title="Fetch API">
          <Definition>
            The Fetch API provides a JavaScript interface for accessing and manipulating HTTP requests and responses.
          </Definition>
          <CodeBlock
            title="Fetch API Examples"
            code={`import { useState, useEffect } from 'react';

function FetchExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{JSON.stringify(data)}</div>;
}

// POST request
function PostExample() {
  const [response, setResponse] = useState(null);

  const createPost = async () => {
    try {
      const res = await fetch('https://api.example.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'New Post',
          body: 'Post content',
          userId: 1
        })
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={createPost}>Create Post</button>
      {response && <div>{JSON.stringify(response)}</div>}
    </div>
  );
}`}
          />
        </SubSection>

        <SubSection title="Async/Await">
          <CodeBlock
            title="Async/Await Pattern"
            code={`import { useState, useEffect } from 'react';

function AsyncExample() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch with async/await
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.example.com/users');
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Create user
  const createUser = async (userData) => {
    try {
      const response = await fetch('https://api.example.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });

      const newUser = await response.json();
      setUsers([...users, newUser]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Update user
  const updateUser = async (id, userData) => {
    try {
      const response = await fetch(\`https://api.example.com/users/\${id}\`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });

      const updatedUser = await response.json();
      setUsers(users.map(user => 
        user.id === id ? updatedUser : user
      ));
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    try {
      await fetch(\`https://api.example.com/users/\${id}\`, {
        method: 'DELETE'
      });

      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {users.map(user => (
        <div key={user.id}>
          {user.name}
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}`}
          />
        </SubSection>

        <SubSection title="Loading States">
          <CodeBlock
            title="Handling Loading States"
            code={`import { useState, useEffect } from 'react';

function LoadingStates() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="error">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  // Success state with data
  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h2>Data loaded successfully</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// Skeleton loading
function SkeletonLoading() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div className="skeleton">
        <div className="skeleton-header"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
      </div>
    );
  }

  return <div>{/* Actual content */}</div>;
}`}
          />
        </SubSection>
      </Section>

      <Note type="success">
        Level 6 completed! You've mastered forms, validation, and API integration. Move to Level 7 to learn about state management patterns.
      </Note>
    </div>
  );
}