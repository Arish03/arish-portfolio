type PageHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

export default function PageHeader({
  label,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="mb-16 flex flex-col items-center text-center">
      <span className="inline-block rounded-full border px-4 py-1 text-sm text-muted-foreground">
        {label}
      </span>

      <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h1>

      {description && (
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
