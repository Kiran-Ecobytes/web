import { GENERAL_WHATSAPP_URL } from "@/shared/utils/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFab() {
  return (
    <a
      href={GENERAL_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-30 inline-flex h-13 items-center gap-2 rounded-full bg-verdigris-600 pr-5 pl-4 font-medium text-white shadow-md transition-colors hover:bg-verdigris-700 sm:right-6 sm:bottom-6"
      aria-label="Chat with Kiran Ecobytes on WhatsApp"
    >
      <WhatsAppIcon size={22} />
      WhatsApp
    </a>
  );
}
