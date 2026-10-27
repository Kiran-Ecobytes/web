import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { site } from "@/shared/data/site";
import { useSectionNav } from "@/shared/hooks/useSectionNav";
import { Button } from "./Button";
import { Logo } from "./Logo";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Sell hardware", to: "/sell" },
  { label: "E-waste pickup", to: "/e-waste" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function linkClass(isActive) {
  return `rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors ${
    isActive ? "bg-line-soft text-ink" : "text-slate hover:text-ink"
  }`;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const section = useSectionNav();
  const activePath = section ?? pathname;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <Link to="/" aria-label="Kiran Ecobytes home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <Link key={item.to} to={item.to} className={linkClass(activePath === item.to)} aria-current={activePath === item.to ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={site.contact.phoneHref} variant="ink">
            <Phone size={16} aria-hidden="true" />
            {site.contact.phone}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-line-soft md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-16 flex h-[calc(100dvh-4rem)] flex-col border-t border-line bg-paper md:hidden"
        >
          <nav className="section-shell flex flex-col gap-1 py-4" aria-label="Main">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-sm px-3 py-3 font-display text-2xl font-semibold ${
                  activePath === item.to ? "bg-line-soft text-ink" : "text-ink-soft"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="section-shell mt-auto flex flex-col gap-3 pb-8">
            <Button href={site.contact.phoneHref} variant="ink" size="lg">
              <Phone size={18} aria-hidden="true" />
              Call {site.contact.phone}
            </Button>
            <p className="text-center text-sm text-slate">{site.contact.hours}</p>
          </div>
        </div>
      )}
    </header>
  );
}
