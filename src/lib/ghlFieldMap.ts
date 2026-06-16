/**
 * GoHighLevel field mapping.
 *
 * STANDARD_FIELD_KEYS are written to native GHL contact fields and must NOT be
 * placed in the customFields array.
 *
 * ghlFieldMap maps every other `ghlFieldKey` used in the surveys (plus the
 * computed estimate keys) to a GHL CUSTOM FIELD ID.
 *
 * HOW TO FILL THIS IN:
 *   1. Create matching custom fields in GHL (Settings -> Custom Fields).
 *   2. Run the dev helper:  GET /api/ghl-fields  (returns id + fieldKey list).
 *   3. Paste each custom field id below. Any key left as "" is skipped silently.
 */

export const STANDARD_FIELD_KEYS = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "address1",
  "city",
  "state",
  "country",
  "postalCode",
] as const;

export type StandardFieldKey = (typeof STANDARD_FIELD_KEYS)[number];

export function isStandardFieldKey(key: string): key is StandardFieldKey {
  return (STANDARD_FIELD_KEYS as readonly string[]).includes(key);
}

export const ghlFieldMap: Record<string, string> = {
  // ---- Shared across surveys ----
  size:               "Bebv8dTwUyExtqv2vPDU",  // Project Size (sqm)
  finishLevel:        "ji1Nk0f4NSL0tO6Cvd5h",  // Finish Level
  budget:             "NHVuOLByhM78jOPB6ryI",  // Budget Range
  timeline:           "3HH1NOqXLGZoWsIqhUf0",  // Timeline / Start Date
  ownerAuthorized:    "RCIolM7diLInBV8EcN7K",  // Owner / Decision Maker
  designerSelected:   "acL94Iw5LOtaT7ihtTR8",  // Designer / Architect Selected
  completedPlans:     "BIYVibS5zHXIYZVvL0Kr",  // Completed Plans
  financing:          "J04KIlnnwZTiZAjwafRR",  // Financing in Place
  livingDuringWorks:  "8QppS0BmREnyQYDoLLu8",  // Living During Works

  // ---- Custom Home ----
  homeType:           "5KernmQngCFyVPv9VT6g",  // Type of Home
  landStatus:         "N5Ky46prPINDLkCVZZJl",  // Land Status
  bedrooms:           "EagiAeHvAAGd5oX24sto",  // Number of Bedrooms
  bathrooms:          "43o2ywKuBqWXQVWhZxIP",  // Number of Bathrooms
  livingAreas:        "ZxbKH2MM3jEuFOh71FPt",  // Living / Dining Areas
  carSpaces:          "wEK3U9T7Wp6vVJ7RqcWA",  // Car Spaces

  // ---- Home Renovation ----
  renovationFocus:    "ooUXTFRKKAHO0pA4DzqR",  // Renovation Focus
  wallsChange:        "NjPy6wG7eso8B6l4NbI1",  // Structural Wall Changes
  windowsDoors:       "vqtn2nCgd9OhlTAe9SiR",  // Windows / Exterior Doors

  // ---- Home Extension ----
  extensionType:      "4rc5dKrqaA7g6H1cgR7z",  // Extension Type
  spaceUse:           "NepB89ojACsNGDVThYYF",  // Extension Space Use
  bathroomIncluded:   "cqGIlZSHocCKRB1x6eSi",  // Bathroom Included in Extension
  kitchenIncluded:    "rEG33anZDLmD4VVzoajN",  // Kitchen Included in Extension

  // ---- Kitchen Renovation ----
  kitchenScope:       "MdWbSd1CdpzQHfpVejFB",  // Kitchen Scope
  kitchenLayout:      "QMkPtgDCkuVHgBwSN6zh",  // Kitchen Layout
  kitchenIsland:      "4LyXiq2eR3dxa4ki12eH",  // Kitchen Island
  areasToUpdate:      "7pUKcLLRAl9MHA6m5iEz",  // Areas to Update
  countertopMaterial: "xMdiCr5DNnqph0qjp1QW",  // Countertop Material
  splashbackMaterial: "e4DmDcBPZZM10JDK4NeC",  // Splashback Material
  flooringMaterial:   "i6F0xsUl13BR050yOR8s",  // Flooring Material
  servicesRelocate:   "xSxKNnbtQ2aHYCTMHVQW",  // Services to Relocate

  // ---- Bathroom Renovation ----
  bathroomType:       "7k74hdipKV57x8qmBP9t",  // Bathroom Type
  renovationReason:   "SIv9Ux3PJShkiyAkMq7I",  // Renovation Reason
  bathroomCount:      "uD0LH09d7fFVkEgE9e9Q",  // Bathrooms Being Renovated
  improvements:       "61JZUSiVFi8jLK514Suf",  // Bathroom Improvements
  layoutPreference:   "0sMNgnAQR6fj3vWs3Ipz",  // Layout Preference
  manageDuringReno:   "19AylJB2p8jfRg9ZkoyU",  // Plan During Renovation
  professionalDesigns:"fQb7Y1Gh1IaFqjKpKPui",  // Has Professional Designs

  // ---- Computed / meta ----
  projectType:        "hfGrrjeAFh0eS7aCLSFe",  // Project Type
  estimateLow:        "aGo2bToDutmuf5IkdAxn",  // Quote (Estimate – Low)
  estimateHigh:       "g8BYmMVoSvmx8rrGlM5D",  // Quote High
  estimateRange:      "tqVVYnxDBLEevw2HfZay",  // Quote Range (Estimate Range)
};
