export const site = {
  brand: {
    name: "Kiran Enterprise",
    tagline:
      "Laptop and hardware buyback, and end-to-end e-waste disposal, in Bengaluru",
  },
  contact: {
    phone: "+91 96207 77644",
    phoneHref: "tel:+919620777644",
    whatsappNumber: "919620777644",
    email: "hello@kiranenterprise.in",
    address: "Bannerghatta Road, Bengaluru, Karnataka 560076",
    hours: "Monday to Saturday, 9:30 am to 7:00 pm",
    city: "Bengaluru",
    mapsEmbedHref:
      "https://www.google.com/maps?q=Bannerghatta+Road,+Bengaluru,+Karnataka+560076&output=embed",
  },
  serviceAreas: [
    "Arekere",
    "Bannerghatta Road",
    "BTM Layout",
    "JP Nagar",
    "Jayanagar",
    "HSR Layout",
    "Koramangala",
    "Electronic City",
    "Whitefield",
    "Marathahalli",
    "Indiranagar",
    "Hebbal",
    "Yelahanka",
    "Rajajinagar",
  ],
  buyCategories: [
    {
      key: "laptop",
      title: "Laptops",
      body: "Any brand, any age, working or not.",
      photo: "laptopOpen",
    },
    {
      key: "workstation",
      title: "Desktops and workstations",
      body: "Towers, all-in-ones, CAD and render machines.",
      photo: "workstation",
    },
    {
      key: "minipc",
      title: "Mini PCs",
      body: "Intel NUC, Mac mini, thin clients and the like.",
      photo: "miniPc",
    },
    {
      key: "ram",
      title: "RAM",
      body: "Laptop and desktop modules, DDR3 upwards, loose or in bulk.",
      photo: "ramModule",
    },
    {
      key: "ssd",
      title: "SSDs",
      body: "SATA, M.2 and NVMe drives, wiped before we pay.",
      photo: "ssdIntel",
    },
    {
      key: "hdd",
      title: "Hard drives",
      body: "Internal and external drives, working or for scrap.",
      photo: "hddOpen",
    },
    {
      key: "server",
      title: "Servers and networking",
      body: "Rack servers, switches, routers, NAS boxes.",
      photo: "networkRack",
    },
    {
      key: "parts",
      title: "Boards and parts",
      body: "Motherboards, processors, graphics cards, power supplies.",
      photo: "motherboard",
    },
  ],
  sellers: [
    "Individuals with one laptop to sell",
    "Offices replacing a batch of machines",
    "IT teams clearing a storeroom",
    "Repair shops and dealers with surplus stock",
    "Colleges, labs and co-working spaces",
  ],
  sellCategories: [
    "Laptop",
    "Desktop or workstation",
    "Mini PC",
    "RAM",
    "SSD",
    "Hard drive",
    "Server or networking gear",
    "Other parts",
  ],
  laptopBrands: [
    "Apple",
    "Dell",
    "HP",
    "Lenovo",
    "Asus",
    "Acer",
    "MSI",
    "Samsung",
    "Microsoft",
    "Any other brand",
  ],
  conditions: [
    {
      value: "Working fine",
      body: "Boots, runs, holds charge. These fetch the best price.",
    },
    {
      value: "Slow or old",
      body: "Still useful to someone. Age and specs set the price.",
    },
    {
      value: "Damaged",
      body: "Cracked screen, broken hinge, missing keys. We still buy.",
    },
    {
      value: "Not turning on",
      body: "Dead board or no display. Valued for parts and materials.",
    },
  ],
  priceFactors: [
    "Brand, model and year",
    "Processor, RAM and storage",
    "Screen, keyboard and body condition",
    "Battery health",
    "Charger, box and bill included",
    "Quantity, for bulk lots",
  ],
  sellSteps: [
    {
      title: "Tell us what you have",
      body: "Send the model and a photo on WhatsApp, or fill in the form. One laptop or fifty desktops, working or not.",
    },
    {
      title: "Get a price the same day",
      body: "We quote from the model, age and condition. The number we send is the number we pay.",
    },
    {
      title: "We collect, or you drop in",
      body: "Free pickup across Bengaluru at a time that suits you. Walk-ins are welcome too.",
    },
    {
      title: "Data wiped, payment made",
      body: "We erase every drive in front of you, then pay by UPI, cash or bank transfer before we leave.",
    },
  ],
  ewasteStages: [
    {
      title: "Assessment",
      body: "You send a list or photos. We tell you what earns money, what is free to collect and what needs special handling.",
    },
    {
      title: "Collection",
      body: "Our team packs, loads and transports everything from your premises. Bulk pickups include an itemised inventory.",
    },
    {
      title: "Data destruction",
      body: "Every storage device is wiped or physically destroyed, with a serial-numbered record for your audit file.",
    },
    {
      title: "Sorting and reuse",
      body: "Working laptops, parts and components are tested and put back into use through our buyback side.",
    },
    {
      title: "Recycling",
      body: "What cannot be reused is dismantled and handed to authorised recyclers who recover metals and treat the rest safely.",
    },
    {
      title: "Certificate",
      body: "You receive a disposal certificate listing every item collected, so your asset register and compliance file are closed.",
    },
  ],
  ewasteGroups: [
    {
      title: "Computers",
      items: [
        "Desktops",
        "Servers",
        "Laptops past repair",
        "Hard drives",
        "RAM and boards",
      ],
    },
    {
      title: "Screens and print",
      items: ["Monitors", "TVs", "Printers", "Scanners", "Projectors"],
    },
    {
      title: "Power and network",
      items: [
        "UPS units",
        "Batteries",
        "Chargers",
        "Routers and switches",
        "Cables",
      ],
    },
    {
      title: "Small devices",
      items: [
        "Phones",
        "Tablets",
        "Keyboards and mice",
        "Speakers",
        "Set-top boxes",
      ],
    },
  ],
  ewasteAudience: [
    "Offices and startups",
    "Schools and colleges",
    "Apartments and housing societies",
    "Repair shops and dealers",
  ],
  ewasteServices: [
    {
      title: "One-off household pickup",
      body: "A few old devices at home. Send a photo, we schedule a slot and collect.",
    },
    {
      title: "Office and IT clearance",
      body: "Retired workstations, monitors, servers and cabling. We inventory, pack, collect in bulk and issue a disposal certificate.",
    },
    {
      title: "Recurring collection",
      body: "For companies with a steady stream of retired hardware. A pickup schedule that fits yours, with paperwork every time.",
    },
    {
      title: "Data destruction",
      body: "Drives wiped or physically destroyed before recycling, with a serial-numbered record for your audit file.",
    },
  ],
  ewasteSteps: [
    {
      title: "Share a list or photos",
      body: "A rough count is enough. For offices, a spreadsheet of asset tags helps us prepare paperwork.",
    },
    {
      title: "We confirm a slot",
      body: "You get a date, a time window and a quote for anything that earns you money.",
    },
    {
      title: "We collect and hand over paperwork",
      body: "Items are weighed and loaded. Businesses receive an itemised disposal certificate.",
    },
  ],
  ewasteQuantities: [
    "1 to 5 items",
    "6 to 20 items",
    "21 to 100 items",
    "Over 100 items",
  ],
  trust: [
    {
      title: "The quote is the price",
      body: "No renegotiating at your door. If the laptop matches what you told us, you get the number we sent.",
    },
    {
      title: "Your data leaves with you",
      body: "Drives are wiped before payment, in front of you. Businesses get a wipe record for each device.",
    },
    {
      title: "Pickups that happen on time",
      body: "You pick the slot. We turn up in it, with the cash or UPI ready.",
    },
    {
      title: "Paperwork when you need it",
      body: "Invoices for laptop purchases and disposal certificates for e-waste, so your books stay clean.",
    },
  ],
  values: [
    {
      title: "Pay fairly",
      body: "A used laptop has real value. We price it honestly and pay what we said we would.",
    },
    {
      title: "Handle data seriously",
      body: "Every drive is wiped before it changes hands. No exceptions, no shortcuts.",
    },
    {
      title: "Keep it out of landfill",
      body: "Working parts are reused. Everything else goes to authorised recyclers, never to a dump.",
    },
  ],
  faqs: [
    {
      q: "Do you buy laptops that don't turn on?",
      a: "Yes. Dead laptops are valued for their parts and materials. The price is lower than a working one, but it is never zero.",
    },
    {
      q: "Do you buy parts on their own, not just laptops?",
      a: "Yes. RAM, SSDs, hard drives, mini PCs, workstations, servers, motherboards and graphics cards, from one piece to a storeroom full. Send a list and we quote for the lot.",
    },
    {
      q: "Who do you buy from?",
      a: "Anyone. Individuals, offices, IT teams, colleges, repair shops and dealers. Bulk sellers get a single quote, an invoice and a wipe record for every drive.",
    },
    {
      q: "How do you decide the price?",
      a: "Brand, model, age, processor, RAM, storage, screen and battery condition, and whether the charger is included. Send the details and we reply with a number.",
    },
    {
      q: "How do I get paid?",
      a: "UPI or cash at the time of pickup, after we have checked the laptop and wiped the drive.",
    },
    {
      q: "Is pickup really free?",
      a: "Yes, anywhere in Bengaluru. Outside the city we confirm before scheduling.",
    },
    {
      q: "What does end-to-end e-waste disposal include?",
      a: "Assessment, collection from your premises, data destruction, sorting for reuse, recycling through authorised partners, and a disposal certificate at the end. You do not need to arrange anything else.",
    },
    {
      q: "What happens to the e-waste you collect?",
      a: "Working parts are tested and reused. The rest is dismantled and handed to authorised recyclers who recover metals and dispose of the remainder safely.",
    },
    {
      q: "Do you charge for e-waste pickup?",
      a: "Household pickups are free for most items. For bulk office clearances we quote on quantity, and many items earn you money rather than costing it.",
    },
    {
      q: "Can I get a certificate for my company?",
      a: "Yes. Every business pickup comes with an itemised disposal certificate for your records.",
    },
  ],
};
