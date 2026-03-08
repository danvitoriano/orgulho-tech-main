export interface ConfRetroLocation {
  name: string;
  address?: string;
  mapsUrl?: string;
}

export interface ConfRetroProps {
  badge?: string;
  title?: string;
  description?: string;
  meta?: string[];
  speakers?: string[];
  location?: ConfRetroLocation;
}

export default function ConfRetro({
  badge,
  title,
  description,
  meta = [],
  speakers = [],
  location,
}: ConfRetroProps) {
  return (
    <section className="lg:container md:max-w-6xl lg:mx-auto mx-4 py-16 lg:py-24">
      <div className="mb-12">
        {badge && (
          <span className="badge badge-primary badge-lg mb-6">{badge}</span>
        )}

        {title && (
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">{title}</h2>
        )}

        {description && (
          <p className="text-base lg:text-lg mb-6 max-w-2xl">{description}</p>
        )}

        {meta.length > 0 && (
          <ul className="flex flex-col gap-1">
            {meta.map((item) => (
              <li key={item} className="text-sm font-medium text-primary">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {speakers.length > 0 && (
        <div className="mb-10">
          <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">
            Palestrantes
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {speakers.map((speaker) => (
              <li
                key={speaker}
                className="rounded-2xl bg-base-200 p-4 text-center"
              >
                <p className="font-medium text-sm">{speaker}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {location && (
        <div className="rounded-2xl bg-base-200 p-6 max-w-sm">
          <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
            Local
          </h3>
          <p className="font-semibold mb-1">{location.name}</p>
          {location.address && (
            <p className="text-sm mb-4">{location.address}</p>
          )}
          {location.mapsUrl && (
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-outline btn-primary"
            >
              Ver no mapa
            </a>
          )}
        </div>
      )}
    </section>
  );
}
