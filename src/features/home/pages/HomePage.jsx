import { JsonLd, QuickRequest } from "@/shared/components";
import { site } from "@/shared/data/site";
import { SITE_URL } from "@/shared/config";
import { usePageMeta } from "@/shared/hooks";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { WhatWeBuy } from "../components/WhatWeBuy";
import { EwasteOverview } from "../components/EwasteOverview";
import { Storeroom } from "../components/Storeroom";
import { TrustPoints } from "../components/TrustPoints";
import { Faq } from "../components/Faq";
import { CtaBand } from "../components/CtaBand";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: site.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const SERVICES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Laptop and computer hardware buyback",
      serviceType: "Used electronics purchase",
      areaServed: "Bengaluru",
      provider: { "@type": "LocalBusiness", name: "Kiran Ecobytes" },
      url: `${SITE_URL}/sell`,
      description:
        "We buy used laptops, desktops, workstations, mini PCs, RAM, SSDs, hard drives, servers and parts from individuals and businesses.",
    },
    {
      "@type": "Service",
      position: 2,
      name: "End-to-end e-waste disposal",
      serviceType: "Electronic waste collection and recycling",
      areaServed: "Bengaluru",
      provider: { "@type": "LocalBusiness", name: "Kiran Ecobytes" },
      url: `${SITE_URL}/e-waste`,
      description:
        "Assessment, doorstep collection, data destruction, recycling through authorised partners and a disposal certificate.",
    },
  ],
};

function HomePage() {
  usePageMeta("/");

  return (
    <>
      <Hero />
      <HowItWorks />
      <WhatWeBuy />
      <EwasteOverview />
      <Storeroom />
      <TrustPoints />
      <section data-nav="/contact" className="section-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="max-w-md">
            <span className="mb-5 block h-1 w-12 rounded-full bg-ink" aria-hidden="true" />
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Tell us what you have
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              One form for both. Pick what you need, add a line about what you have, and we reply
              with a price or a pickup slot.
            </p>
          </div>
          <QuickRequest />
        </div>
      </section>
      <Faq />
      <CtaBand />
      <JsonLd id="faq-jsonld" data={FAQ_SCHEMA} />
      <JsonLd id="services-jsonld" data={SERVICES_SCHEMA} />
    </>
  );
}

export default HomePage;
