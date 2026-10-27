import { site } from "@/shared/data/site";
import logoMark from "@/assets/logo-mark.svg";

export function Logo({ light = false }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <img src={logoMark} alt="" width="30" height="30" aria-hidden="true" />
      <span
        className={`font-display text-[17px] font-bold tracking-tight ${light ? "text-white" : "text-ink"}`}
      >
        {site.brand.name}
      </span>
    </span>
  );
}
