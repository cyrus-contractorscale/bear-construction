/**
 * GoHighLevel field mapping for Bear Construction.
 *
 * STANDARD_FIELD_KEYS are written to native GHL contact fields and must NOT be
 * placed in the customFields array.
 *
 * ghlFieldMap maps every other `ghlFieldKey` used in the surveys (plus the
 * computed estimate keys) to a GHL CUSTOM FIELD ID.
 *
 * Field IDs verified via GET /locations/:id/customFields
 * against Location: fifdlJb4VJ9ykoHVmSar (Bear Construction)
 *
 * Estimate output fields → GHL merge tags:
 *   estimateLow   → {{contact.quote}}          (ID hOT1CpcZ4CLH5velp97n)
 *   estimateHigh  → {{contact.pricing_estimate}} (ID nzd3xOJbgGnarEccCc9J)
 *   estimateRange → {{contact.quote_range}}     (ID ZwwxhHBqtwsLTDsDkJa7)
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
  size:               "SqlNmIBr6kTJq16B02t9",  // E - Square Footage / meters - number input
  finishLevel:        "1QNXmbNuRTvr4wF2LBsN",  // Finish Level
  budget:             "yuXtEtcC1NGjTcHRKpwf",  // Your proposed budget for the project?
  timeline:           "3IqpfcAV3cllxa77UISa",  // When would you like to get started?
  ownerAuthorized:    "1a6QTc62IWajYGJGZKLp",  // E - Legal Owner
  designerSelected:   "n6wIH5TnmBu5gcLPSv0E",  // E - Selected Designer / Architect
  completedPlans:     "tcXcJ3CGnwQhSJGstrjz",  // E - Plans completed
  financing:          "7N4oMyPEu6gvdZ1nav8N",  // E - Finance in Place
  livingDuringWorks:  "1XA6BiDIQu880TiejKxh",  // E - B - While my bathroom is being remodeled (shared)

  // ---- Custom Home ----
  homeType:           "yl71XdgrWgPo8xNy36sd",  // E - I live in a:
  landStatus:         "EiFctbFuGFTQsmfdoPEv",  // Land Status
  bedrooms:           "jJtzXG6qrMcdHoSs5Afk",  // E - No. Of Bedrooms
  bathrooms:          "DWOyMwX7DpACQXsxHfn1",  // E - Number Of Bathrooms
  livingAreas:        "RsTvf2FwmFYDWa8OVA6L",  // E - Number Of Living Rooms
  carSpaces:          "QRSYgf1LzDFnHLfUiEwh",  // Car Spaces

  // ---- Home Renovation ----
  renovationFocus:    "P2Hl3gfZchIEw3zxfXJK",  // E - The purpose of this project is:
  wallsChange:        "PBXmLN2tT8NJa5njxiha",  // e-Reno - Do you plan to add or remove any walls?
  windowsDoors:       "reDUrcefk07AiCzPsQWX",  // e-Reno - Planning to add or replace any windows or exterior doors?

  // ---- Home Extension ----
  extensionType:      "fER4LHWS1CiXNgTD0kmP",  // E - Type of addition
  spaceUse:           "nF77cPPDkcBIbKN9lJZ2",  // Extension Space Use
  bathroomIncluded:   "vbDJmJ1D2RwLNL4XTwUQ",  // E - Addition Include Bathroom
  kitchenIncluded:    "IUHBl3SC98V1tCDHSzSC",  // E - Addition Kitchen Included

  // ---- Kitchen Renovation ----
  kitchenScope:       "4YdSJdy0p1LPTOx6F3NJ",  // E - K - The size of my kitchen is:
  kitchenLayout:      "B4btWZDYCQ283qh6LLcn",  // E - K - The shape of my kitchen is:
  kitchenIsland:      "XFjBoocnU0joG3YEJelE",  // E - K - I have an island
  areasToUpdate:      "SVWMRLWpm6trLPCOLGyB",  // E - K - I would like to update
  countertopMaterial: "Ou1yp0sZ06RlNJiSbwBm",  // E - K - Countertop Material I'm Looking For:
  splashbackMaterial: "aZZTnbE5T2QJXMsFojrZ",  // E - K - Splashback
  flooringMaterial:   "ka8gNJOQps0LQx9j0hYb",  // E - K - Floor Material
  servicesRelocate:   "8thFrkkN2zY850q85hB4",  // Do any of the following need to be relocated?

  // ---- Bathroom Renovation ----
  bathroomType:       "LzfKD3e8m0Ri99lNZcsr",  // E - B - Bathroom Estimate For
  renovationReason:   "nAcBFjcE4JHwes5rT3h5",  // E - B - I am considering a remodel because:
  bathroomCount:      "V1oJJMsNM9UGDGF4VknO",  // E - B - Number of bathrooms - New
  improvements:       "blDVXpDalQK66GDB01Ob",  // E - B - The improvement I am looking for is:
  layoutPreference:   "UICKwaWqEABY2Snb4Pz0",  // E - B - The approximate size of my bathroom is:
  manageDuringReno:   "1XA6BiDIQu880TiejKxh",  // E - B - While my bathroom is being remodeled:
  professionalDesigns:"m53IbZ4vdsJse9Svuhul",  // Has Professional Designs

  // ---- Computed / meta ----
  projectType:        "1DlQfMBMgOpmzptsa5XD",  // {{contact.project_type}}       — Project Type
  estimateLow:        "hOT1CpcZ4CLH5velp97n",  // {{contact.quote}}               — Quote (low number)
  estimateHigh:       "nzd3xOJbgGnarEccCc9J",  // {{contact.pricing_estimate}}    — Pricing Estimate (high number)
  estimateRange:      "ZwwxhHBqtwsLTDsDkJa7",  // {{contact.quote_range}}         — Quote Range (formatted "$X - $Y")
};
