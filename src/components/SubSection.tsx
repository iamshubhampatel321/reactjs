interface SubSectionProps {
  title: string;
  children: React.ReactNode;
}

export function SubSection({ title, children }: SubSectionProps) {
  return (
    <div className="mb-6">
      <h3 className="text-xl text-gray-800 dark:text-gray-200 mb-3">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}