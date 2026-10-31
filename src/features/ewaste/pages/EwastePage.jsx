import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaqSection, JsonLd, PageIntro, Photo, SectionHeading, ServiceAreas } from "@/shared/components";
import { site } from "@/shared/data/site";
import { shopPhotos } from "@/shared/data/photos";
import { usePageMeta } from "@/shared/hooks";
import { breadcrumbSchema, serviceSchema } from "@/shared/utils/schema";
import { CtaBand } from "@/features/home";
import { PickupForm } from "../components/PickupForm";

const GALLERY = [
  { photo: shopPhotos.monitorsTable, alt: "Old monitors and keyboards stacked on a table" },
  { photo: shopPhotos.notWorkingCpus, alt: "Dead desktop CPUs, UPS units and power supplies tagged not working" },
  { photo: shopPhotos.cabinetCables, alt: "A cabinet of tangled cables and peripherals awaiting disposal" },
];

const SERVICE_LINKS = {
  "Office and IT clearance": "/office-it-clearance",
  "Data destruction": "/data-destruction",
};

const SCHEMAS = [
  serviceSchema({
    name: "End-to-end e-waste disposal",
    serviceType: "Electronic waste collection and recycling",
    path: "/e-waste",
    description:
      "Assessment, doorstep collection, data destruction, recycling through authorised partners and a disposal certificate for homes, offices and institutions.",
  }),
  breadcrumbSchema("E-waste pickup", "/e-waste"),
];

function EwastePage() {
  usePageMeta("/e-waste");

  return (
    <>
      <PageIntro
        vertical="verdigris"
        title="E-waste disposal in Bengaluru, from your door to the certificate"
        lede="From a drawer of dead chargers to an office floor of retired workstations. We assess, collect, destroy data, sort for reuse, recycle through authorised partners and hand you the paperwork. There is nothing left for you to arrange."
      />


      <section className="bg-surface">
        <div className="section-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <PickupForm />

          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">Ways we work</h2>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {site.ewasteServices.map((service) => (
                  <li key={service.title} className="py-4">
                    <h3 className="font-display text-base font-semibold text-ink">{service.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-slate">{service.body}</p>
                    {SERVICE_LINKS[service.title] && (
                      <Link
                        to={SERVICE_LINKS[service.title]}
                        className="mt-2 inline-flex items-center gap-1.5 text-[15px] font-medium text-verdigris-700 hover:text-verdigris-600"
                      >
                        More on {service.title.toLowerCase()}
                        <ArrowRight size={15} aria-hidden="true" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">What we accept</h2>
              <dl className="mt-4 divide-y divide-line border-y border-line">
                {site.ewasteGroups.map((group) => (
                  <div key={group.title} className="grid gap-1 py-4 sm:grid-cols-[160px_1fr] sm:gap-6">
                    <dt className="font-display font-semibold text-ink">{group.title}</dt>
                    <dd className="text-[15px] leading-relaxed text-slate">{group.items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-[15px] text-slate">
                Collected from {site.ewasteAudience.join(", ").toLowerCase()}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-4">
        <div className="grid gap-4 sm:grid-cols-3">
          {GALLERY.map((item, index) => (
            <Photo key={item.alt} src={item.photo} alt={item.alt} delay={index * 100} />
          ))}
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          vertical="verdigris"
          title="Every step, handled by us"
          lede="Six stages. You are involved in the first and the last."
        />
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {site.ewasteStages.map((stage, index) => (
            <li key={stage.title} className="border-t border-line pt-6">
              <span className="font-display text-sm font-semibold text-verdigris-600">
                Stage {index + 1}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">{stage.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate">{stage.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <ServiceAreas vertical="verdigris" />
      <FaqSection items={site.ewasteFaqs} title="E-waste pickup: common questions" vertical="verdigris" className="pt-0 sm:pt-0" />
      <CtaBand />
      {SCHEMAS.map((schema) => (
        <JsonLd key={schema["@type"]} data={schema} />
      ))}
    </>
  );
}

export default EwastePage;
