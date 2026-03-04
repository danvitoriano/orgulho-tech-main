export interface MeetupMainHeroProps {
  badge?: string;
  title?: string;
  description?: string;
  tags?: string[];
  cta?: {
    href: string;
    text: string;
  };
  ctas?: {
    href: string;
    text: string;
    outline?: boolean;
  }[];
  image?: {
    src: string;
    alt: string;
  };
}

export default function MeetupMainHero({
  badge,
  title,
  description,
  tags = [],
  cta,
  ctas,
  image,
}: MeetupMainHeroProps) {
  const allCtas = ctas ?? (cta ? [{ ...cta, outline: false }] : []);
  return (
    <section className="lg:container md:max-w-6xl lg:mx-auto mx-4 pt-10 lg:pt-14">
      <div className="rounded-[2rem] overflow-hidden border border-secondary bg-[#fff7eb]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-7 md:p-10 lg:p-12">
            {badge && (
              <div className="inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-1 text-xs tracking-wide">
                {badge}
              </div>
            )}
            {title && (
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[0.95] font-semibold">
                {title}
              </h1>
            )}
            {description && (
              <p className="mt-5 text-base md:text-lg leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
            {tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="badge badge-lg border-0 bg-[#1d2a59] text-white whitespace-normal h-auto py-2 text-center"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {allCtas.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {allCtas.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={item.outline ? "btn btn-outline btn-primary" : "btn btn-primary"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            )}
          </div>
          {image && (
            <div className="relative min-h-[280px] lg:min-h-[420px] bg-[#1d2a59]">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
