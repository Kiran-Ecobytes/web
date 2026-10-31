import { Link } from "react-router-dom";
import { site } from "@/shared/data/site";
import { photoCredits } from "@/shared/data/photos";
import { Logo } from "./Logo";

const PAGES = [
  { label: "Home", to: "/" },
  { label: "Sell hardware", to: "/sell" },
  { label: "E-waste pickup", to: "/e-waste" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const SERVICES = [
  { label: "Laptop and hardware buyback", to: "/sell" },
  { label: "E-waste disposal", to: "/e-waste" },
  { label: "Data destruction", to: "/data-destruction" },
  { label: "Office IT clearance", to: "/office-it-clearance" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="section-shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-slate">
            We buy the laptops and hardware you have outgrown, and handle e-waste from pickup to
            certificate. Two services, one call, anywhere in {site.contact.city}.
          </p>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold text-ink">Pages</h2>
          <ul className="mt-4 space-y-2.5">
            {PAGES.map((page) => (
              <li key={page.to}>
                <Link to={page.to} className="text-[15px] text-slate hover:text-ink">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold text-ink">Services</h2>
          <ul className="mt-4 space-y-2.5">
            {SERVICES.map((service) => (
              <li key={service.to}>
                <Link to={service.to} className="text-[15px] text-slate hover:text-ink">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold text-ink">Reach us</h2>
          <ul className="mt-4 space-y-2.5 text-[15px] text-slate">
            <li>
              <a href={site.contact.phoneHref} className="hover:text-ink">
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="hover:text-ink">
                {site.contact.email}
              </a>
            </li>
            <li>{site.contact.address}</li>
            <li>{site.contact.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line-soft">
        <div className="section-shell flex flex-col gap-2 py-5 text-sm text-slate sm:flex-row sm:items-center sm:justify-between">
          <span>
            {year} {site.brand.name}, {site.contact.city}.
          </span>
          <span>Hardware buyback and end-to-end e-waste disposal.</span>
        </div>
        <div className="section-shell pb-5 text-xs text-slate-light">
          Photos:{" "}
          {photoCredits.map((credit, index) => (
            <span key={credit.href}>
              <a href={credit.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-slate">
                {credit.title}
              </a>{" "}
              by {credit.creator} ({credit.license}){index < photoCredits.length - 1 ? ", " : "."}
            </span>
          ))}{" "}
          Others CC0 via rawpixel and Flickr.
        </div>
      </div>
    </footer>
  );
}
