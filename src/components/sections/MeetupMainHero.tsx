export interface MeetupAsideBlock {
  title: string;
  body: string;
  link?: { href: string; text: string };
}

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
  aside?: MeetupAsideBlock[];
}

export default function MeetupMainHero({
  badge,
  title,
  description,
  tags = [],
  cta,
  ctas,
  image,
  aside = [],
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
                {allCtas.map((item, index) => {
                  const external = item.href.startsWith("http");
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className={item.outline ? "btn btn-outline btn-primary" : "btn btn-primary"}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {item.text}
                    </a>
                  );
                })}
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
      {aside.length > 0 && (
        <div className="mt-8 rounded-2xl border border-black/10 bg-base-200/50 px-6 py-5 md:px-8 md:py-6">
          <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">
            Na comunidade
          </p>
          <ul className="space-y-5 text-sm text-base-content/80 leading-relaxed">
            {aside.map((block) => (
              <li key={block.title}>
                <p className="font-semibold text-base-content">{block.title}</p>
                <p className="mt-1">{block.body}</p>
                {block.link && (
                  <a
                    href={block.link.href}
                    className="mt-2 inline-block text-sm font-medium text-primary underline-offset-2 hover:underline"
                    {...(block.link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {block.link.text}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
