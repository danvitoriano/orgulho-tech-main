export interface Tier {
  emoji: string;
  title: string;
  priceRange: string;
  benefits: string[];
}

export interface TierCTA {
  label: string;
  href: string;
  outline?: boolean;
}

export interface SponsorshipTiersProps {
  badge?: string;
  title?: string;
  description?: string;
  meta?: string[];
  ctas?: { href: string; text: string; outline?: boolean }[];
  tiers?: Tier[];
  note?: string;
  contacts?: TierCTA[];
}

export default function SponsorshipTiers({
  badge,
  title,
  description,
  meta = [],
  ctas = [],
  tiers = [],
  note,
  contacts = [],
}: SponsorshipTiersProps) {
  return (
    <section className="lg:container md:max-w-6xl lg:mx-auto mx-4 py-16 lg:py-24">
      <div className="mb-12">
        {badge && (
          <span className="badge badge-primary badge-lg mb-6">{badge}</span>
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
          <p className="text-base lg:text-lg mb-8 max-w-2xl">{description}</p>
        )}

        {ctas.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-3">
            {ctas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                target={cta.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className={`btn ${cta.outline ? "btn-outline btn-primary" : "btn-primary"}`}
              >
                {cta.text}
              </a>
            ))}
          </div>
        )}
      </div>

      {tiers.length > 0 && (
        <div className="mb-10">
          <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">
            Cotas de patrocínio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.title}
                className="rounded-2xl border border-primary/30 p-8"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{tier.emoji}</span>
                  <h4 className="text-xl font-bold">{tier.title}</h4>
                </div>
                <p className="text-primary font-semibold mb-4">
                  {tier.priceRange}
                </p>
                <ul className="flex flex-col gap-2">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {note && (
        <div className="rounded-2xl bg-base-200 border-l-4 border-primary p-6 mb-10">
          <p className="text-base">{note}</p>
        </div>
      )}

      {contacts.length > 0 && (
        <div className="rounded-2xl bg-primary text-primary-content p-10 text-center">
          <h3 className="text-xl font-semibold mb-6">Entre em contato</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {contacts.map((contact) => (
              <a
                key={contact.href}
                href={contact.href}
                target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className={`btn ${contact.outline ? "btn-outline" : "btn-outline"}`}
              >
                {contact.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
