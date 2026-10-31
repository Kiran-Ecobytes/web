import { ChevronDown } from "lucide-react";
import { faqSchema } from "@/shared/utils/schema";
import { JsonLd } from "./JsonLd";
import { SectionHeading } from "./SectionHeading";

export function FaqSection({
  items,
  title = "Questions we get most",
  lede = "If yours is not here, message us. We reply during working hours, usually within the hour.",
  vertical = "ink",
  className = "",
}) {
  return (
    <section className={`section-shell py-16 sm:py-20 ${className}`}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <SectionHeading title={title} lede={lede} vertical={vertical} />
        <div className="divide-y divide-line border-y border-line">
          {items.map((faq) => (
            <details key={faq.q} className="group">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left font-display text-lg font-semibold text-ink">
                {faq.q}
                <ChevronDown
                  size={20}
                  className="shrink-0 text-slate transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-2xl pb-5 text-[15px] leading-relaxed text-slate">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqSchema(items)} />
    </section>
  );
}
