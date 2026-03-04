export interface EventDetailsProps {
  title?: string;
  image?: string;
  description?: string;
  meta?: string[];
  program?: {
    time?: string;
    title: string;
    description?: string;
  }[];
  speakers?: {
    name: string;
    role?: string;
  }[];
  location?: {
    name: string;
    address: string;
    mapsUrl?: string;
  };
  ctas?: {
    href: string;
    text: string;
    outline?: boolean;
  }[];
}

export default function EventDetails({
  title,
  image,
  description,
  meta = [],
  program = [],
  speakers = [],
  location,
  ctas = [],
}: EventDetailsProps) {
  return (
    <section className="lg:container md:max-w-6xl lg:mx-auto mx-4 py-12 lg:py-16">
      {(title || image) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
          {title && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              {title}
            </h1>
          )}
          {image && (
            <img
              src={image}
              alt={title ?? ""}
              className="w-full rounded-2xl object-cover max-h-80 lg:max-h-96"
              loading="eager"
            />
          )}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          {description && (
            <div>
              <h2 className="text-2xl font-semibold mb-3">Sobre o evento</h2>
              <p className="text-lg leading-relaxed">{description}</p>
            </div>
          )}

          {program.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-5">Programação</h2>
              <ol className="space-y-4">
                {program.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    {item.time && (
                      <span className="shrink-0 font-mono text-sm font-semibold w-14 pt-1 text-gray-500">
                        {item.time}
                      </span>
                    )}
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      {item.description && (
                        <p className="text-sm text-gray-600 mt-0.5">{item.description}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {speakers.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-5">Palestrantes</h2>
              <ul className="space-y-3">
                {speakers.map((speaker, index) => (
                  <li key={index}>
                    <p className="font-semibold">{speaker.name}</p>
                    {speaker.role && (
                      <p className="text-sm text-gray-600">{speaker.role}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {meta.length > 0 && (
            <div className="rounded-2xl border border-gray-200 p-6 space-y-1">
              {meta.map((item, index) => (
                <p key={index} className="text-sm font-medium">{item}</p>
              ))}
            </div>
          )}

          {location && (
            <div className="rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-2">Local</h2>
              <p className="font-medium">{location.name}</p>
              <p className="text-sm text-gray-600 mt-1">{location.address}</p>
              {location.mapsUrl && (
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm font-medium underline underline-offset-2"
                >
                  Ver no mapa
                </a>
              )}
            </div>
          )}

          {ctas.length > 0 && (
            <div className="flex flex-col gap-3">
              {ctas.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-primary w-full ${item.outline ? "btn-outline" : ""}`}
                >
                  {item.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
