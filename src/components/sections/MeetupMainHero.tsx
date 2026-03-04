export default function MeetupMainHero() {
  return (
    <section className="lg:container md:max-w-6xl lg:mx-auto mx-4 pt-10 lg:pt-14">
      <div className="rounded-[2rem] overflow-hidden border border-secondary bg-[#fff7eb]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-1 text-xs tracking-wide">
              WOMAN &amp; QUEER TECH
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[0.95] font-semibold">
              Meetup Woman &amp; Queer
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-2xl">
              No mês internacional das mulheres, vamos reunir as comunidades Orgulho Tech,
              Devs 40+ e Elas Programam em São Paulo, com participação presencial na Blip,
              em São Paulo, e transmissão online. Dia 19/3 (quinta), a partir das 19h.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="badge badge-lg border-0 bg-[#1d2a59] text-white whitespace-normal h-auto py-2 text-center">
                19/3 (quinta), a partir das 19h
              </span>
              <span className="badge badge-lg border-0 bg[#0f766e] text-white whitespace-normal h-auto py-2 text-center max-w-full">
                Na Blip, em São Paulo + transmissão online
              </span>
            </div>
            <div className="mt-8">
              <a href="/meetup" className="btn btn-primary">
                Saiba mais e receba aviso
              </a>
            </div>
          </div>
          <div className="relative min-h-[280px] lg:min-h-[420px] bg-[#1d2a59]">
            <img
              src="/women-queer-tech-hero.png"
              alt="Meetup Woman and Queer"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
