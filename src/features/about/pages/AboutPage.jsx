import { Button, PageIntro, Photo, SectionHeading } from "@/shared/components";
import { site } from "@/shared/data/site";
import { shopPhotos } from "@/shared/data/photos";
import { usePageMeta } from "@/shared/hooks";
import { CtaBand } from "@/features/home";

const YARD = [
  { photo: shopPhotos.laptopsCornerView, alt: "Laptops stacked in rows in a corner of our storeroom" },
  { photo: shopPhotos.laptopsByWall, alt: "A wall of laptops waiting to be tested and sorted" },
  { photo: shopPhotos.adaptersHeap, alt: "A heap of laptop chargers collected with the machines" },
];

function AboutPage() {
  usePageMeta("/about");

  return (
    <>
      <PageIntro
        title="One business, two ways to deal with old electronics"
        lede="Kiran Ecobytes started as a laptop buyback counter in Bengaluru. The laptops kept coming, and with them everything else people wanted gone. We built the second half of the business around that."
      />

      <section className="section-shell pb-12">
        <img
          src={shopPhotos.laptopRows}
          alt="Rows of used laptops sorted and stacked in our storeroom"
          className="aspect-[21/9] w-full rounded-card object-cover object-center"
          loading="lazy"
        />
      </section>

      <section className="section-shell grid gap-12 pb-16 sm:pb-20 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="space-y-6 text-[17px] leading-relaxed text-ink-soft">
          <p>
            When someone sells us a laptop, they usually mention the desktop in the storeroom, the
            monitor that stopped working two years ago, and the box of chargers nobody can throw
            away. None of it had anywhere responsible to go.
          </p>
          <p>
            So we started collecting it, and then buying the parts too: RAM, drives, mini PCs,
            workstations and servers, from individuals, offices and dealers alike. Working hardware
            gets a second life through our buyback side. Everything else is sorted and handed to
            authorised recyclers who recover the metals and handle the rest safely. Offices get the
            paperwork they need to close out their asset registers.
          </p>
          <p>
            Today we run both sides from {site.contact.city}, with free pickup across the city and
            walk-ins welcome during working hours.
          </p>
        </div>

        <div>
          <SectionHeading title="What we hold to" />
          <ul className="mt-8 space-y-6">
            {site.values.map((value) => (
              <li key={value.title} className="border-l-2 border-ink pl-5">
                <h3 className="font-display text-xl font-semibold text-ink">{value.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-slate">{value.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell pb-16 sm:pb-20">
        <div className="grid gap-4 sm:grid-cols-3">
          {YARD.map((item, index) => (
            <Photo key={item.alt} src={item.photo} alt={item.alt} delay={index * 100} />
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="section-shell py-16 sm:py-20">
          <SectionHeading
            title="Where we pick up"
            lede={`Free collection across ${site.contact.city}. Outside the city, message us and we confirm before scheduling.`}
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {site.serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm font-medium text-ink-soft"
              >
                {area}
              </span>
            ))}
            <span className="rounded-full px-3.5 py-1.5 text-sm text-slate">and everywhere in between</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/sell#quote" variant="copper">
              Sell a laptop
            </Button>
            <Button to="/e-waste#book" variant="verdigris">
              Book an e-waste pickup
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export default AboutPage;
