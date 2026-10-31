import { Link } from "react-router-dom";
import { Phone, Send } from "lucide-react";
import {
  Button,
  FaqSection,
  JsonLd,
  PageIntro,
  Photo,
  QuickRequest,
  SectionHeading,
  ServiceAreas,
  WhatsAppIcon,
} from "@/shared/components";
import { site } from "@/shared/data/site";
import { photos } from "@/shared/data/photos";
import { usePageMeta } from "@/shared/hooks";
import { CtaBand } from "@/features/home";
import { breadcrumbSchema, serviceSchema } from "@/shared/utils/schema";
import { whatsappUrl } from "@/shared/utils/whatsapp";

const PATH = "/data-destruction";

const WHATSAPP_URL = whatsappUrl("Hi Kiran Ecobytes, I have drives that need wiping or destroying. Can you help?");

const COVERED = [
  { title: "Hard drives", body: "Internal and external drives, working or for scrap." },
  { title: "SSDs", body: "SATA, M.2 and NVMe drives, loose or still inside a machine." },
  { title: "Laptops and desktops", body: "The drives inside retired laptops, desktops, workstations and mini PCs." },
  { title: "Servers and storage", body: "Rack servers and NAS boxes, cleared before they are reused or recycled." },
];

const AUDIENCES = [
  {
    title: "For individuals",
    body: "Selling or clearing out a laptop at home. The drive is erased in front of you before we pay, so your files leave with you.",
  },
  {
    title: "For businesses",
    body: "Offices, IT teams, colleges and labs. Every drive gets a serial-numbered record for your audit file.",
  },
];

const STEPS = [
  {
    title: "Tell us what you have",
    body: "Send a list or photos on WhatsApp. For offices, a spreadsheet of asset tags helps us prepare the paperwork.",
  },
  {
    title: "We collect, or you drop in",
    body: `Free pickup across ${site.contact.city} at a time that suits you. Walk-ins are welcome too.`,
  },
  {
    title: "Wiped or destroyed",
    body: "Every storage device is wiped or physically destroyed before it is reused or recycled.",
  },
  {
    title: "A record for your file",
    body: "Businesses get a serial-numbered record for each device. E-waste pickups close with an itemised disposal certificate.",
  },
];

const SCHEMAS = [
  serviceSchema({
    name: "Hard drive and SSD data destruction",
    serviceType: "Data destruction",
    path: PATH,
    description:
      "Hard drives, SSDs, laptops and servers wiped or physically destroyed before reuse or recycling, with a serial-numbered record for every device for businesses.",
  }),
  breadcrumbSchema("Data destruction", PATH),
];

function DataDestructionPage() {
  usePageMeta(PATH);

  return (
    <>
      <PageIntro
        vertical="verdigris"
        title="Hard drive and SSD data destruction in Bengaluru"
        lede="Before a laptop, desktop or drive is reused or recycled, the storage inside is wiped or physically destroyed. Individuals watch it happen. Businesses get a serial-numbered record for every device."
      >
        <Button to={`${PATH}#request`} variant="verdigris" size="lg">
          <Send size={18} aria-hidden="true" />
          Send a request
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
          <QuickRequest
            title="Send a request"
            note="I need the drives wiped or destroyed."
            lede="Tell us what drives or machines you have. It opens WhatsApp with your details filled in, and we reply during working hours."
          />

          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">What we cover</h2>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {COVERED.map((item) => (
                  <li key={item.title} className="py-4">
                    <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-slate">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <Photo src={photos.hddOpen} alt="An opened hard drive showing its platter and read arm" />
              <Photo src={photos.ssdIntel} alt="An Intel solid-state drive" delay={100} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          vertical="verdigris"
          title="Who it is for"
          lede="One laptop or a storeroom of drives. The data is gone before anything changes hands."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {AUDIENCES.map((audience) => (
            <div key={audience.title} className="rounded-card bg-verdigris-50 p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-ink">{audience.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate">{audience.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="section-shell py-16 sm:py-20">
          <SectionHeading vertical="verdigris" title="How it works" />
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <li key={step.title} className="border-t border-line pt-6">
                <span className="font-display text-sm font-semibold text-verdigris-600">Step {index + 1}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-slate">
            Clearing more than drives? Data destruction is part of every{" "}
            <Link to="/e-waste" className="font-medium text-ink underline underline-offset-4">
              e-waste pickup
            </Link>{" "}
            and{" "}
            <Link to="/office-it-clearance" className="font-medium text-ink underline underline-offset-4">
              office IT clearance
            </Link>
            , and working laptops can still be{" "}
            <Link to="/sell" className="font-medium text-ink underline underline-offset-4">
              sold to us
            </Link>
            .
          </p>
        </div>
      </section>

      <ServiceAreas vertical="verdigris" />
      <FaqSection
        items={site.dataDestructionFaqs}
        title="Data destruction: common questions"
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

export default DataDestructionPage;
