export interface BulletSectionProps {
  title?: string;
  description?: string;
  items?: string[];
}

export default function BulletSection({
  title,
  description,
  items = [],
}: BulletSectionProps) {
  return (
    <section className="lg:container md:max-w-6xl lg:mx-auto mx-4 py-16 lg:py-24">
      {title && (
        <h2 className="text-3xl lg:text-4xl font-semibold mb-4">{title}</h2>
      )}
      {description && (
        <p className="text-base lg:text-lg mb-8 max-w-2xl">{description}</p>
      )}
      {items.length > 0 && (
        <ul className="flex flex-col gap-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-base lg:text-lg">
              <span className="text-primary font-bold mt-0.5 shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
