import { useState } from "react";
import { site } from "@/shared/data/site";
import { composeMessage, whatsappUrl } from "@/shared/utils/whatsapp";
import { Button } from "./Button";
import { ChoiceTile, Field, Input, Textarea } from "./Field";
import { WhatsAppIcon } from "./WhatsAppIcon";

const INTENTS = [
  { value: "Sell hardware", body: "Laptops, PCs, RAM, drives, servers or parts.", accent: "copper" },
  { value: "Book an e-waste pickup", body: "Home, office or institution.", accent: "verdigris" },
];

const EMPTY = { intent: INTENTS[0].value, name: "", phone: "", message: "" };

export function QuickRequest({ id = "request", title = "Send a request", lede, note }) {
  const [form, setForm] = useState(EMPTY);
  const intent = INTENTS.find((option) => option.value === form.intent);

  const update = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const intro = `Hi Kiran Ecobytes, I'd like to ${form.intent.toLowerCase()}.`;
    const text = composeMessage(note ? `${intro} ${note}` : intro, [
      ["Name", form.name],
      ["Phone", form.phone],
      ["Details", form.message],
    ]);
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  };

  return (
    <form id={id} onSubmit={handleSubmit} className="rounded-card border border-line bg-surface p-6 sm:p-8">
      <h2 className="font-display text-2xl font-bold tracking-tight text-ink">{title}</h2>
      <p className="mt-2 text-[15px] text-slate">
        {lede ?? "Opens WhatsApp with your details filled in. We reply during working hours, usually within the hour."}
      </p>

      <fieldset className="mt-6">
        <legend className="mb-2 block text-sm font-medium text-ink">I want to</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {INTENTS.map((option) => (
            <ChoiceTile
              key={option.value}
              name="intent"
              value={option.value}
              title={option.value}
              body={option.body}
              checked={form.intent === option.value}
              onChange={update("intent")}
              accent={option.accent}
            />
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Your name">
          <Input value={form.name} onChange={update("name")} placeholder="Your name" required />
        </Field>
        <Field label="Phone">
          <Input type="tel" value={form.phone} onChange={update("phone")} placeholder="98765 43210" required />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="What do you have?" hint="A rough list is enough. Photos can follow on WhatsApp.">
          <Textarea
            value={form.message}
            onChange={update("message")}
            placeholder={
              intent.accent === "copper"
                ? "Dell Latitude 7420, 2 years old, working, charger included"
                : "8 desktops, 6 monitors and a box of cables, HSR Layout"
            }
            required
          />
        </Field>
      </div>

      <Button type="submit" variant={intent.accent} size="lg" className="mt-8 w-full sm:w-auto">
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
