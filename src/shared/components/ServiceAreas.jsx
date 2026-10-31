import { MapPin } from "lucide-react";
import { site } from "@/shared/data/site";
import { SectionHeading } from "./SectionHeading";

export function ServiceAreas({ title, lede, vertical = "ink" }) {
  return (
    <section className="section-shell py-16 sm:py-20">
      <SectionHeading
        vertical={vertical}
        title={title ?? `Free pickup across ${site.contact.city}`}
        lede={lede ?? `We collect from homes and offices anywhere in ${site.contact.city}. Outside the city we confirm before scheduling.`}
      />
      <ul className="mt-8 flex flex-wrap gap-2.5">
        {site.serviceAreas.map((area) => (
          <li
            key={area}
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-2 text-[15px] text-ink-soft"
          >
            <MapPin size={15} className="text-slate" aria-hidden="true" />
            {area}
          </li>
        ))}
      </ul>
    </section>
  );
}
