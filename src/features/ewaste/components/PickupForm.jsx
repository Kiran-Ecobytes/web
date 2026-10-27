import { useState } from "react";
import { Button, ChoiceTile, Field, Input, Select, Textarea, WhatsAppIcon } from "@/shared/components";
import { site } from "@/shared/data/site";
import { composeMessage, whatsappUrl } from "@/shared/utils/whatsapp";

const WHO = [
  { value: "Home", body: "A few devices from a household." },
  { value: "Business", body: "Office, school, society or shop. Certificate included." },
];

const EMPTY = {
  who: WHO[0].value,
  name: "",
  phone: "",
  area: "",
  quantity: "",
  items: "",
  date: "",
};

export function PickupForm() {
  const [form, setForm] = useState(EMPTY);

  const update = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = composeMessage("Hi Kiran Ecobytes, I'd like to book an e-waste pickup.", [
      ["Type", form.who],
      ["Name or organisation", form.name],
      ["Phone", form.phone],
      ["Area", form.area],
      ["Quantity", form.quantity],
      ["Items", form.items],
      ["Preferred date", form.date],
    ]);
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form id="book" onSubmit={handleSubmit} className="rounded-card border border-line bg-surface p-6 sm:p-8">
      <h2 className="font-display text-2xl font-bold tracking-tight text-ink">Book a pickup</h2>
      <p className="mt-2 text-[15px] text-slate">
        Fill this in and it opens WhatsApp with the details ready to send. We confirm a slot within
        working hours.
      </p>

      <fieldset className="mt-6">
        <legend className="mb-2 block text-sm font-medium text-ink">Who is this for?</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {WHO.map((option) => (
            <ChoiceTile
              key={option.value}
              name="who"
              value={option.value}
              title={option.value}
              body={option.body}
              checked={form.who === option.value}
              onChange={update("who")}
              accent="verdigris"
            />
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label={form.who === "Business" ? "Organisation" : "Your name"}>
          <Input value={form.name} onChange={update("name")} placeholder={form.who === "Business" ? "Company or institution" : "Your name"} required />
        </Field>
        <Field label="Phone">
          <Input type="tel" value={form.phone} onChange={update("phone")} placeholder="98765 43210" required />
        </Field>
        <Field label="Area">
          <Input value={form.area} onChange={update("area")} placeholder="HSR Layout, Bengaluru" required />
        </Field>
        <Field label="Roughly how much?">
          <Select value={form.quantity} onChange={update("quantity")} required>
            <option value="">Choose a range</option>
            {site.ewasteQuantities.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <div className="mt-6 grid gap-5">
        <Field label="What needs collecting?" hint="A rough list is fine. Photos can follow on WhatsApp.">
          <Textarea value={form.items} onChange={update("items")} placeholder="12 desktops, 10 monitors, 2 printers, a box of cables and chargers" required />
        </Field>
        <Field label="Preferred date" hint="Optional. We suggest a slot if you leave it blank.">
          <Input type="date" value={form.date} onChange={update("date")} />
        </Field>
      </div>

      <Button type="submit" variant="verdigris" size="lg" className="mt-8 w-full sm:w-auto">
        <WhatsAppIcon size={18} />
        Send on WhatsApp
      </Button>
      <p className="mt-3 text-sm text-slate">
        Prefer to talk?{" "}
        <a href={site.contact.phoneHref} className="font-medium text-ink underline underline-offset-4">
          Call {site.contact.phone}
        </a>
      </p>
    </form>
  );
}
