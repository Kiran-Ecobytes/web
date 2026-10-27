import { useState } from "react";
import { Button, ChoiceTile, Field, Input, Select, Textarea, WhatsAppIcon } from "@/shared/components";
import { site } from "@/shared/data/site";
import { composeMessage, whatsappUrl } from "@/shared/utils/whatsapp";

const EMPTY = {
  category: site.sellCategories[0],
  brand: "",
  model: "",
  condition: site.conditions[0].value,
  notes: "",
  name: "",
  phone: "",
};

export function QuoteForm() {
  const [form, setForm] = useState(EMPTY);

  const update = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = composeMessage("Hi Kiran Ecobytes, I'd like a price for some hardware.", [
      ["Selling", form.category],
      ["Brand", form.brand],
      ["Model or spec", form.model],
      ["Condition", form.condition],
      ["Notes", form.notes],
      ["Name", form.name],
      ["Phone", form.phone],
    ]);
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form id="quote" onSubmit={handleSubmit} className="rounded-card border border-line bg-surface p-6 sm:p-8">
      <h2 className="font-display text-2xl font-bold tracking-tight text-ink">Get a price</h2>
      <p className="mt-2 text-[15px] text-slate">
        Fill this in and it opens WhatsApp with the details ready to send. We reply with a number the
        same day.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="What are you selling?">
          <Select value={form.category} onChange={update("category")} required>
            {site.sellCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Brand">
          <Input value={form.brand} onChange={update("brand")} placeholder="Dell, HP, Apple, Samsung" required />
        </Field>
        <Field label="Model or spec" hint="Whatever is printed on the device or its sticker.">
          <Input value={form.model} onChange={update("model")} placeholder="Latitude 7420, 16 GB DDR4, 1 TB NVMe" required />
        </Field>
        <Field label="Your phone">
          <Input type="tel" value={form.phone} onChange={update("phone")} placeholder="98765 43210" required />
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-2 block text-sm font-medium text-ink">Condition</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {site.conditions.map((condition) => (
            <ChoiceTile
              key={condition.value}
              name="condition"
              value={condition.value}
              title={condition.value}
              body={condition.body}
              checked={form.condition === condition.value}
              onChange={update("condition")}
              accent="copper"
            />
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5">
        <Field label="Anything else we should know?" hint="Age, specs, faults, whether chargers and boxes are included, or a list and count for bulk lots.">
          <Textarea value={form.notes} onChange={update("notes")} placeholder="Battery lasts about two hours, charger included" />
        </Field>
        <Field label="Your name or company">
          <Input value={form.name} onChange={update("name")} placeholder="Your name" />
        </Field>
      </div>

      <Button type="submit" variant="copper" size="lg" className="mt-8 w-full sm:w-auto">
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
