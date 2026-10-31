import { Link } from "react-router-dom";
import { CalendarCheck, Phone } from "lucide-react";
import {
  Button,
  FaqSection,
  JsonLd,
  PageIntro,
  Photo,
  SectionHeading,
  ServiceAreas,
  WhatsAppIcon,
} from "@/shared/components";
import { site } from "@/shared/data/site";
import { shopPhotos } from "@/shared/data/photos";
import { usePageMeta } from "@/shared/hooks";
import { CtaBand } from "@/features/home";
import { PickupForm } from "@/features/ewaste";
import { breadcrumbSchema, serviceSchema } from "@/shared/utils/schema";
import { whatsappUrl } from "@/shared/utils/whatsapp";

const PATH = "/office-it-clearance";

const WHATSAPP_URL = whatsappUrl("Hi Kiran Ecobytes, we need an office IT clearance. Can you help?");

const CLIENTS = [...site.ewasteAudience, "IT teams clearing a storeroom"];

const INCLUDED = [
  {
    title: "An itemised inventory",
    body: "Everything is counted, packed and loaded by our team. Bulk pickups come with an itemised list.",
  },
  {
    title: "Data destruction",
    body: "Every storage device is wiped or physically destroyed, with a serial-numbered record for your audit file.",
  },
  {
    title: "Payment for what has value",
    body: "Working laptops, desktops and parts are bought through our buyback side, with a single quote and an invoice for the lot.",
  },
  {
    title: "A disposal certificate",
    body: "Every item collected is listed on the certificate, so your asset register and compliance file are closed.",
  },
  {
    title: "Recurring collection",
    body: "For a steady stream of retired hardware, a pickup schedule that fits yours, with paperwork every time.",
  },
];

const SCHEMAS = [
  serviceSchema({
    name: "Office IT clearance and corporate e-waste disposal",
    serviceType: "IT asset disposition",
    path: PATH,
    description:
      "Retired workstations, monitors, servers and cabling inventoried, collected in bulk, data destroyed and closed with a disposal certificate for offices, schools and housing societies.",
  }),
  breadcrumbSchema("Office IT clearance", PATH),
];

function OfficeClearancePage() {
  usePageMeta(PATH);

  return (
    <>
      <PageIntro
        vertical="verdigris"
        title="Office IT clearance and corporate e-waste disposal in Bengaluru"
        lede="Retired workstations, monitors, servers and cabling. We inventory, pack, collect in bulk, destroy the data and issue a disposal certificate. Anything with resale value earns you money."
      >
        <Button to={`${PATH}#book`} variant="verdigris" size="lg">
          <CalendarCheck size={18} aria-hidden="true" />
          Book a clearance
        </Button>
        <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="outline" size="lg">
          <WhatsAppIcon size={18} />
          WhatsApp us
        </Button>
        <Button href={site.contact.phoneHref} variant="outline" size="lg">
          <Phone size={18} aria-hidden="true" />
          {site.contact.phone}
        </Button>
      </PageIntro>

      <section className="bg-surface">
        <div className="section-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <PickupForm defaultWho="Business" />

          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">Who we clear for</h2>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {CLIENTS.map((client) => (
                  <li key={client} className="py-3 text-[15px] text-ink-soft">
                    {client}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">What we clear</h2>
              <dl className="mt-4 divide-y divide-line border-y border-line">
                {site.ewasteGroups.map((group) => (
                  <div key={group.title} className="grid gap-1 py-4 sm:grid-cols-[160px_1fr] sm:gap-6">
                    <dt className="font-display font-semibold text-ink">{group.title}</dt>
                    <dd className="text-[15px] leading-relaxed text-slate">{group.items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          vertical="verdigris"
          title="What every clearance includes"
          lede="One vendor from the first list to the last certificate."
        />
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDED.map((item) => (
            <li key={item.title} className="border-t border-line pt-6">
              <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate">{item.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-slate">
          See how drives are handled on the{" "}
          <Link to="/data-destruction" className="font-medium text-ink underline underline-offset-4">
            data destruction
          </Link>{" "}
          page, or get a price for working machines on{" "}
          <Link to="/sell" className="font-medium text-ink underline underline-offset-4">
            sell hardware
          </Link>
          .
        </p>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="section-shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading vertical="verdigris" title="How it works" />
            <ol className="mt-8 space-y-6">
              {site.ewasteSteps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-verdigris-100 font-display text-sm font-bold text-verdigris-700">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-slate">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <Photo src={shopPhotos.optiplexCpus} alt="Dell Optiplex desktops and monitors stacked together" />
        </div>
      </section>

      <ServiceAreas vertical="verdigris" />
      <FaqSection
        items={site.clearanceFaqs}
        title="Office clearance: common questions"
        vertical="verdigris"
        className="pt-0 sm:pt-0"
      />
      <CtaBand />
      {SCHEMAS.map((schema) => (
        <JsonLd key={schema["@type"]} data={schema} />
      ))}
    </>
  );
}

export default OfficeClearancePage;
