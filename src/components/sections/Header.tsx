import Icon from "../ui/Icon";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Nav {
  logo?: {
    src?: string;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
    buttons: CTA[];
  };
}

export default function Header({
  logo = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Sobre", url: "/sobre" },
      { label: "Woman & Queer Tech", url: "/woman-queer-tech" },
      { label: "Podcast", url: "/podcast" },
      { label: "Conf", url: "/conf" },
      { label: "GitHub", url: "/github" },
    ],
    buttons: [],
  },
}: Nav) {
  return (
    <nav className="drawer drawer-end">
      <input id="mobile-drawer-nav" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content container lg:px-0 px-4 flex gap-8 items-center justify-between py-4">
        <a href="/">
          <img src={logo.src || ""} width={140} height={28} alt={logo.alt} />
        </a>

        <div className="hidden items-center justify-between lg:flex w-full">
          <ul className="flex">
            {navigation.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  aria-label={link.label}
                  className="link no-underline hover:underline p-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-3">
            {navigation.buttons?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href ?? "#"}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                rel={item?.href.includes("http") ? "noreferrer" : undefined}
                className={`font-normal btn btn-primary ${
                  item.outline && "btn-outline"
                }`}
              >
                {item?.text}
              </a>
            ))}
          </ul>
        </div>

        <label
          htmlFor="mobile-drawer-nav"
          className="flex lg:hidden btn btn-ghost drawer-button"
        >
          <Icon id="Bars3" size={24} strokeWidth={0.1} />
        </label>
      </div>

      <aside className="drawer-side z-50">
        <label
          htmlFor="mobile-drawer-nav"
          aria-label="close sidebar"
          className="drawer-overlay"
        />

        <div className="flex flex-col gap-8 min-h-full w-80 bg-base-100 text-base-content">
          <a className="p-4" href="/">
            <img src={logo.src || ""} width={100} height={28} alt={logo.alt} />
          </a>

          <ul className="menu">
            {navigation?.links.map((link) => (
              <li key={link.label}>
                <a href={link.url} aria-label={link.label}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="p-4 flex items-center gap-3">
            {navigation.buttons?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href ?? "#"}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                rel={item?.href.includes("http") ? "noreferrer" : undefined}
                className={`font-normal btn btn-primary ${
                  item.outline && "btn-outline"
                }`}
              >
                {item?.text}
              </a>
            ))}
          </ul>
        </div>
      </aside>
    </nav>
  );
}
