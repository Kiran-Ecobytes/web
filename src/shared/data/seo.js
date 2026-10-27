export const DEFAULT_SITE_URL = "https://kiranecobytes.com";
export const SITE_NAME = "Kiran Ecobytes";

export function resolveSiteUrl(value) {
  return (value || DEFAULT_SITE_URL).replace(/\/+$/, "");
}

export const ROUTES = [
  {
    path: "/",
    title: "Kiran Ecobytes | Sell old laptops and hardware, e-waste disposal in Bengaluru",
    description:
      "Kiran Ecobytes buys old laptops, desktops, mini PCs, RAM, SSDs, hard drives and servers from anyone in Bengaluru, and handles e-waste disposal end to end. Free pickup, payment on the spot, disposal certificates for businesses.",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/sell",
    title: "Sell old laptops, RAM, SSDs, hard drives and PCs in Bengaluru | Kiran Ecobytes",
    description:
      "Sell used laptops, desktops, workstations, mini PCs, RAM, SSDs, hard drives, servers and parts. Any brand, any condition, one piece or bulk. Same-day price, free pickup across Bengaluru, paid by UPI or cash at the door.",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/e-waste",
    title: "End-to-end e-waste disposal and pickup in Bengaluru | Kiran Ecobytes",
    description:
      "E-waste collection for homes, offices and institutions in Bengaluru. Assessment, doorstep pickup, certified data destruction, recycling through authorised partners and a disposal certificate. Bulk and one-off pickups.",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/about",
    title: "About Kiran Ecobytes | Laptop buyback and e-waste disposal, Bengaluru",
    description:
      "Kiran Ecobytes is a Bengaluru business that buys used laptops and computer hardware and disposes of e-waste responsibly. Fair prices, wiped drives, nothing to landfill.",
    changefreq: "yearly",
    priority: "0.5",
  },
  {
    path: "/gallery",
    title: "Gallery | Laptops, desktops and e-waste we handle | Kiran Ecobytes",
    description:
      "Photos from our Bengaluru storeroom: used laptops, desktops, monitors, chargers and e-waste we buy, collect and sort.",
    changefreq: "monthly",
    priority: "0.5",
  },
  {
    path: "/contact",
    title: "Contact Kiran Ecobytes | Call, WhatsApp or visit us in Bengaluru",
    description:
      "Call, WhatsApp or visit Kiran Ecobytes in Bengaluru to sell a laptop or hardware, or to book an e-waste pickup. Open Monday to Saturday.",
    changefreq: "yearly",
    priority: "0.5",
  },
];

export const NOT_FOUND = {
  path: "/404",
  title: "Page not found | Kiran Ecobytes",
  description: "That page is not here. Sell hardware or book an e-waste pickup from the home page.",
  noindex: true,
};

export function routeMeta(path) {
  return ROUTES.find((route) => route.path === path) ?? NOT_FOUND;
}
