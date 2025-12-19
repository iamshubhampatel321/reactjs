import { Link } from 'react-router-dom';
import { BookOpen, Code, Rocket, Award } from 'lucide-react';

const levels = [
  {
    id: 1,
    title: 'React Fundamentals',
    description: 'Learn the basics: JSX, Components, and Virtual DOM',
    color: 'bg-green-500',
    icon: BookOpen,
  },
  {
    id: 2,
    title: 'Props, State & Events',
    description: 'Master data flow and user interactions',
    color: 'bg-yellow-500',
    icon: Code,
  },
  {
    id: 3,
    title: 'Hooks & Lifecycle',
    description: 'Deep dive into React Hooks and component lifecycle',
    color: 'bg-orange-500',
    icon: Rocket,
  },
  {
    id: 4,
    title: 'Styling & Assets',
    description: 'Style your apps with CSS, Tailwind, and manage assets',
    color: 'bg-blue-500',
    icon: Award,
  },
  {
    id: 5,
    title: 'Routing & Navigation',
    description: 'Build multi-page apps with React Router',
    color: 'bg-purple-500',
    icon: BookOpen,
  },
  {
    id: 6,
    title: 'Forms & APIs',
    description: 'Handle forms, validation, and API integration',
    color: 'bg-red-500',
    icon: Code,
  },
  {
    id: 7,
    title: 'State Management',
    description: 'Context API, Redux, and advanced state patterns',
    color: 'bg-amber-700',
    icon: Rocket,
  },
  {
    id: 8,
    title: 'Performance',
    description: 'Optimize your React apps for production',
    color: 'bg-gray-800',
    icon: Award,
  },
  {
    id: 9,
    title: 'Testing & Debugging',
    description: 'Test and debug React applications',
    color: 'bg-green-600',
    icon: BookOpen,
  },
  {
    id: 10,
    title: 'Advanced Concepts',
    description: 'HOCs, Render Props, and Authentication',
    color: 'bg-blue-600',
    icon: Code,
  },
  {
    id: 11,
    title: 'Deployment',
    description: 'Deploy to production and optimize for SEO',
    color: 'bg-purple-600',
    icon: Rocket,
  },
  {
    id: 12,
    title: 'Modern Ecosystem',
    description: 'TypeScript, Next.js, and modern React',
    color: 'bg-red-600',
    icon: Award,
  },
];

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl text-gray-900 dark:text-white mb-2">Welcome to React.js Learning Hub</h1>
        <p className="text-gray-600 dark:text-gray-400">
          A comprehensive guide from basics to production-ready applications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level) => {
          const Icon = level.icon;
          return (
            <Link
              key={level.id}
              to={`/level-${level.id}`}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className={`${level.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Level {level.id}</div>
                  <h3 className="text-lg text-gray-900 dark:text-white mb-2">{level.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{level.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h2 className="text-xl text-gray-900 dark:text-white mb-3">How to Use This Guide</h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>Follow the levels sequentially for best learning experience</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>Each section includes definitions and code examples</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>Click the copy button on any code block to copy to clipboard</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>Practice the examples in your own projects</span>
          </li>
        </ul>
      </div>
    </div>
  );
}