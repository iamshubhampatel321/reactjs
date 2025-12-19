interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-blue-600 dark:border-blue-400">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}