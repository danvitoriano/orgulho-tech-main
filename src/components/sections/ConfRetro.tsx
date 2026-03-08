export interface ConfRetroLocation {
  name: string;
  address?: string;
  mapsUrl?: string;
}

export interface Speaker {
  name: string;
  company?: string;
  talk?: string;
}

export interface PanelParticipant {
  name: string;
  company?: string;
}

export interface Panel {
  participants: PanelParticipant[];
  activity: string;
}

export interface ConfRetroProps {
  badge?: string;
  title?: string;
  description?: string;
  meta?: string[];
  hosts?: string[];
  videoUrl?: string;
  speakers?: Speaker[];
  panels?: Panel[];
  partners?: { title?: string; description?: string; names: string[] };
  location?: ConfRetroLocation;
}

export default function ConfRetro({
  badge,
  title,
  description,
  meta = [],
  hosts = [],
  videoUrl,
  speakers = [],
  panels = [],
  partners,
  location,
}: ConfRetroProps) {
  return (
    <section className="bg-slate-900 text-white">
    <div className="lg:container md:max-w-6xl lg:mx-auto mx-4 py-16 lg:py-24">
      <div className="mb-12">
        {badge && (
          <span className="inline-block border border-white/30 text-white/80 text-sm font-medium px-4 py-1 rounded-full mb-6">{badge}</span>
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
              <li key={item} className="text-sm font-medium text-white/60">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {hosts.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="text-sm text-white/50 mr-1">Host:</span>
          {hosts.map((host) => (
            <span key={host} className="text-sm font-semibold">{host}</span>
          ))}
        </div>
      )}

      {videoUrl && (
        <div className="mt-10 mb-12">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={videoUrl}
              title="Orgulho Tech Conf 2024"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      )}

      {speakers.length > 0 && (
        <div className="mb-12">
          <h3 className="text-sm font-bold tracking-widest text-white/50 uppercase mb-6">
            Palestras
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {speakers.map((speaker) => (
              <li key={speaker.name} className="rounded-2xl bg-white/10 p-5">
                <p className="font-semibold">{speaker.name}</p>
                {speaker.company && (
                  <p className="text-xs text-white/50 font-medium mt-1">
                    {speaker.company}
                  </p>
                )}
                {speaker.talk && (
                  <p className="text-sm mt-3 opacity-60 italic">
                    &ldquo;{speaker.talk}&rdquo;
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {panels.length > 0 && (
        <div className="mb-12">
          <h3 className="text-sm font-bold tracking-widest text-white/50 uppercase mb-6">
            Painéis e Atividades
          </h3>
          <ul className="flex flex-col gap-4">
            {panels.map((panel, i) => (
              <li key={i} className="rounded-2xl bg-white/10 p-5">
                <p className="font-semibold mb-3">{panel.activity}</p>
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                  {panel.participants.map((p) => (
                    <li key={p.name} className="text-sm">
                      <span>{p.name}</span>
                      {p.company && (
                        <span className="text-white/50 ml-1">({p.company})</span>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}

      {partners && partners.names.length > 0 && (
        <div className="mb-12">
          <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">
            {partners.title ?? "Parceiras Oficiais e Apoiadoras"}
          </h3>
          {partners.description && (
            <p className="text-sm text-base-content/60 mb-6">{partners.description}</p>
          )}
          <ul className="flex flex-wrap gap-3">
            {partners.names.map((name) => (
              <li
                key={name}
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {location && (
        <div className="rounded-2xl bg-white/10 p-6 max-w-sm">
          <h3 className="text-sm font-bold tracking-widest text-white/50 uppercase mb-4">
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
    </div>
    </section>
  );
}
