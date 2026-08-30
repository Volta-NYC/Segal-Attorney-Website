export const firm = {
  name: "Segal Law Group, P.C.",
  attorney: "Tatyana Segal, Esq.",
  phone: "(718) 877-0328",
  phoneHref: "tel:+17188770328",
  email: "segal_lawgroup@aol.com",
  emailHref: "mailto:segal_lawgroup@aol.com",
  location: "Brooklyn, New York 11224",
  hours: "Monday through Friday, 9:00 AM to 5:00 PM",
} as const

export const practiceAreas = [
  {
    number: "01",
    title: "Estate Planning",
    description: "Wills, trusts, health care proxies, and planning that gives your family clear direction.",
  },
  {
    number: "02",
    title: "Powers of Attorney",
    description: "Thoughtful documents that help someone you trust manage important decisions when needed.",
  },
  {
    number: "03",
    title: "Elder Law",
    description: "Practical guidance around long-term care, benefits, guardianship, and protecting independence.",
  },
  {
    number: "04",
    title: "Housing & Consumer Matters",
    description: "Straightforward help for landlord-tenant concerns and unfair consumer practices.",
  },
] as const
