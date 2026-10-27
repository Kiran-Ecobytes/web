import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button, PageIntro, QuickRequest, WhatsAppIcon } from "@/shared/components";
import { site } from "@/shared/data/site";
import { usePageMeta } from "@/shared/hooks";
import { GENERAL_WHATSAPP_URL } from "@/shared/utils/whatsapp";

const CHANNELS = [
  {
    icon: Phone,
    title: "Call",
    body: site.contact.phone,
    href: site.contact.phoneHref,
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    body: "Send a photo and we reply with a price or a slot",
    href: GENERAL_WHATSAPP_URL,
    external: true,
  },
  {
    icon: Mail,
    title: "Email",
    body: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    icon: Clock,
    title: "Hours",
    body: site.contact.hours,
  },
];

function ContactPage() {
  usePageMeta("/contact");

  return (
    <>
      <PageIntro
        title="Talk to us"
        lede="WhatsApp is fastest. Send a photo of what you have and we reply during working hours, usually within the hour."
      >
        <Button href={GENERAL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="verdigris" size="lg">
          <WhatsAppIcon size={18} />
          Message on WhatsApp
        </Button>
        <Button href={site.contact.phoneHref} variant="outline" size="lg">
          <Phone size={18} aria-hidden="true" />
          {site.contact.phone}
        </Button>
      </PageIntro>

      <section className="section-shell grid gap-10 pb-16 sm:pb-20 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
        <div className="order-2 lg:order-1">
          <ul className="divide-y divide-line border-y border-line">
            {CHANNELS.map((channel) => {
              const Icon = channel.icon;
              const content = (
                <>
                  <Icon size={20} className="mt-0.5 shrink-0 text-slate" aria-hidden="true" />
                  <span>
                    <span className="block font-display font-semibold text-ink">{channel.title}</span>
                    <span className="mt-0.5 block text-[15px] text-slate">{channel.body}</span>
                  </span>
                </>
              );
              return (
                <li key={channel.title}>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.external ? "_blank" : undefined}
                      rel={channel.external ? "noopener noreferrer" : undefined}
                      className="flex gap-4 py-5 hover:bg-line-soft/60"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex gap-4 py-5">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex gap-4">
            <MapPin size={20} className="mt-0.5 shrink-0 text-slate" aria-hidden="true" />
            <div>
              <h2 className="font-display font-semibold text-ink">Walk in</h2>
              <p className="mt-0.5 text-[15px] leading-relaxed text-slate">{site.contact.address}</p>
              <p className="mt-2 text-sm text-slate">
                Bring the laptop and its charger. We check it, wipe it and pay while you wait.
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <QuickRequest />
        </div>
      </section>

      <section className="section-shell pb-16 sm:pb-20">
        <div className="overflow-hidden rounded-card border border-line bg-surface">
          <iframe
            title="Kiran Ecobytes on Google Maps"
            src={site.contact.mapsEmbedHref}
            className="h-80 w-full sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}

export default ContactPage;
