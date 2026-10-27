import { site } from "@/shared/data/site";

export function whatsappUrl(message) {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function composeMessage(intro, fields) {
  const lines = fields
    .filter(([, value]) => value && String(value).trim())
    .map(([label, value]) => `${label}: ${String(value).trim()}`);
  return [intro, "", ...lines].join("\n");
}

export const GENERAL_WHATSAPP_URL = whatsappUrl(
  "Hi Kiran Ecobytes, I have something to sell or clear. Can you help?",
);
