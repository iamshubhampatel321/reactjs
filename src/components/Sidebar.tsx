import { NavLink } from 'react-router-dom';
import { Home, Circle } from 'lucide-react';

const levels = [
  { id: 1, name: 'React Fundamentals', color: 'bg-green-500', path: '/level-1' },
  { id: 2, name: 'Props, State & Events', color: 'bg-yellow-500', path: '/level-2' },
  { id: 3, name: 'Hooks & Lifecycle', color: 'bg-orange-500', path: '/level-3' },
  { id: 4, name: 'Styling & Assets', color: 'bg-blue-500', path: '/level-4' },
  { id: 5, name: 'Routing & Navigation', color: 'bg-purple-500', path: '/level-5' },
  { id: 6, name: 'Forms & APIs', color: 'bg-red-500', path: '/level-6' },
  { id: 7, name: 'State Management', color: 'bg-amber-700', path: '/level-7' },
  { id: 8, name: 'Performance', color: 'bg-gray-800', path: '/level-8' },
  { id: 9, name: 'Testing & Debugging', color: 'bg-green-600', path: '/level-9' },
  { id: 10, name: 'Advanced Concepts', color: 'bg-blue-600', path: '/level-10' },
  { id: 11, name: 'Deployment', color: 'bg-purple-600', path: '/level-11' },
  { id: 12, name: 'Modern Ecosystem', color: 'bg-red-600', path: '/level-12' },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
      <nav className="p-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              isActive
                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`
          }
        >
          <Home className="w-5 h-5" />
          <span>Dashboard</span>
        </NavLink>

        <div className="mt-6">
          <h2 className="px-4 mb-3 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Learning Path
          </h2>
          {levels.map((level) => (
            <NavLink
              key={level.id}
              to={level.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`
              }
            >
              <Circle className={`w-3 h-3 ${level.color} rounded-full`} />
              <span className="text-sm">Level {level.id}: {level.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </aside>
  );
}