import Image from "next/image";

export interface ProgramItem {
  time: string;
  title: string;
  description?: string;
}

export interface EventLocation {
  name: string;
  address: string;
  mapsUrl: string;
}

export interface EventCTA {
  href: string;
  text: string;
  outline?: boolean;
}

export interface EventDetailsProps {
  title?: string;
  image?: string;
  description?: string;
  program?: ProgramItem[];
  location?: EventLocation;
  meta?: string[];
  ctas?: EventCTA[];
}

export default function EventDetails({
  title,
  image,
  description,
  program = [],
  location,
  meta = [],
  ctas = [],
}: EventDetailsProps) {
  return (
    <section className="lg:container md:max-w-6xl lg:mx-auto mx-4 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left column */}
        <div>
          {image && (
            <div className="rounded-2xl overflow-hidden mb-8">
              <Image
                src={image}
                alt={title ?? "Evento"}
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
          )}

          {meta.length > 0 && (
            <ul className="flex flex-col gap-1 mb-6">
              {meta.map((item) => (
                <li key={item} className="text-sm font-medium text-primary">
                  {item}
                </li>
              ))}
            </ul>
          )}

          {title && (
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">{title}</h2>
          )}

          {description && (
            <p className="text-base lg:text-lg mb-8">{description}</p>
          )}

          {ctas.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-3">
              {ctas.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn ${cta.outline ? "btn-outline btn-primary" : "btn-primary"}`}
                >
                  {cta.text}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Right column */}
        <div>
          {program.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">
                Programação
              </h3>
              <ul className="flex flex-col gap-4">
                {program.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-sm font-mono text-primary min-w-[48px]">
                      {item.time}
                    </span>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      {item.description && (
                        <p className="text-sm opacity-70">{item.description}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {location && (
            <div className="rounded-2xl bg-base-200 p-6">
              <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
                Local
              </h3>
              <p className="font-semibold mb-1">{location.name}</p>
              <p className="text-sm mb-4">{location.address}</p>
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-outline btn-primary"
              >
                Ver no mapa
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
