import { BookOpen, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center">
          <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
          <div>
            <h1 className="text-xl text-gray-900 dark:text-white">React.js Learning Hub</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">From Basics to Production</p>
          </div>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>
    </header>
  );
}