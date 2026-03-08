export interface Tier {
  emoji: string;
  title: string;
  includesPrevious?: string;
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
    <section>
      {/* Hero header — fundo gradiente full-width */}
      <div className="bg-gradient-to-br from-violet-700 via-fuchsia-600 to-pink-500 text-white py-20 lg:py-32 relative overflow-hidden">
        {/* Decoração de fundo */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="lg:container md:max-w-6xl lg:mx-auto mx-4 relative z-10">
          {badge && (
            <span className="inline-block border border-white/50 text-white text-sm font-medium px-4 py-1 rounded-full mb-8">{badge}</span>
          )}

          {title && (
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              {title}
            </h2>
          )}

          {meta.length > 0 && (
            <ul className="flex flex-col gap-2 mb-8">
              {meta.map((item) => (
                <li key={item} className="text-base font-medium opacity-90">
                  {item}
                </li>
              ))}
            </ul>
          )}

          {description && (
            <p className="text-lg lg:text-xl mb-10 max-w-2xl opacity-90 leading-relaxed">
              {description}
            </p>
          )}

          {ctas.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-3">
              {ctas.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  target={cta.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className={`btn btn-lg ${
                    cta.outline
                      ? "btn-outline border-white text-white hover:bg-white/10"
                      : "bg-white text-violet-700 border-white hover:bg-white/90"
                  }`}
                >
                  {cta.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tiers e contatos — container normal */}
      <div className="lg:container md:max-w-6xl lg:mx-auto mx-4 py-16 lg:py-24">
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
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{tier.emoji}</span>
                  <h4 className="text-xl font-bold">{tier.title}</h4>
                </div>
                {tier.includesPrevious && (
                  <p className="text-xs font-medium text-primary/70 uppercase tracking-wider mb-4 pb-4 border-b border-primary/20">
                    + todos os benefícios {tier.includesPrevious}
                  </p>
                )}
                <ul className="flex flex-col gap-2">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <span className="text-primary mt-0.5">—</span>
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
                className="btn btn-outline"
              >
                {contact.label}
              </a>
            ))}
          </div>
        </div>
      )}
      </div>
    </section>
  );
}
