import { Info } from 'lucide-react';

interface NoteProps {
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'success';
}

export function Note({ children, type = 'info' }: NoteProps) {
  const styles = {
    info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-300',
    success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-300',
  };

  return (
    <div className={`border rounded-lg p-4 ${styles[type]}`}>
      <div className="flex gap-3">
        <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
}