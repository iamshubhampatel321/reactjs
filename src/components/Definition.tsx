interface DefinitionProps {
  children: React.ReactNode;
}

export function Definition({ children }: DefinitionProps) {
  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-4 rounded-r">
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{children}</p>
    </div>
  );
}