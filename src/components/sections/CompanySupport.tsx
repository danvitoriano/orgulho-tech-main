export interface SupportOption {
  title: string;
  description: string;
}

export interface ContactPerson {
  name: string;
  email: string;
  website: string;
}

export interface CompanySupportProps {
  title?: string;
  description?: string;
  stats?: { value: string; label: string }[];
  options?: SupportOption[];
  mediaKit?: string;
  contacts?: ContactPerson[];
}

export default function CompanySupport({
  title = "Sua empresa quer apoiar?",
  description,
  stats = [],
  options = [],
  mediaKit,
  contacts = [],
}: CompanySupportProps) {
  return (
    <section className="lg:container md:max-w-6xl lg:mx-auto mx-4 py-16 lg:py-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-4">{title}</h2>
        {description && (
          <p className="text-base lg:text-lg max-w-2xl mx-auto">{description}</p>
        )}
      </div>

      {stats.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-base-200 p-6 text-center"
            >
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      )}

      {options.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {options.map((option) => (
            <div
              key={option.title}
              className="rounded-2xl border border-primary/30 p-8"
            >
              <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
                {option.title}
              </h3>
              <p className="text-base">{option.description}</p>
            </div>
          ))}
        </div>
      )}

      {mediaKit && (
        <div className="rounded-2xl bg-base-200 border-l-4 border-primary p-6 mb-10 text-center">
          <p className="text-base">{mediaKit}</p>
        </div>
      )}

      {contacts.length > 0 && (
        <div className="rounded-2xl bg-primary text-primary-content p-10">
          <h3 className="text-xl font-semibold text-center mb-8">Entre em contato</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            {contacts.map((contact) => (
              <div key={contact.email}>
                <p className="font-bold text-base mb-1">{contact.name}</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="block text-sm underline opacity-80 hover:opacity-100"
                >
                  {contact.email}
                </a>
                <a
                  href={`https://${contact.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm opacity-80 hover:opacity-100"
                >
                  {contact.website}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
