import type { ProjectType } from "./types";

export interface ProjectPricing {
  /** Base build cost per square metre (placeholder - edit with real rates). */
  basePerSqm: number;
  /** Multipliers applied to the base rate by chosen finish level. */
  finish: Record<string, number>;
}

export interface PricingConfig {
  rangeSpread: number;
  roundTo: number;
  projects: Record<ProjectType, ProjectPricing>;
}

/**
 * PLACEHOLDER PRICING — replace basePerSqm and finish multipliers with the
 * client's real numbers. Everything downstream reads from this single file.
 */
export const pricing: PricingConfig = {
  rangeSpread: 0.12, // +/- spread used for the low-high band
  roundTo: 1000, // round low/high to the nearest amount
  projects: {
    customHome: {
      basePerSqm: 2500,
      finish: { Economy: 0.85, Standard: 1, Premium: 1.3 },
    },
    homeExtension: {
      basePerSqm: 3200,
      finish: { Economy: 0.85, Standard: 1, Premium: 1.3 },
    },
    homeRenovation: {
      basePerSqm: 1800,
      finish: { Economy: 0.85, Standard: 1, Premium: 1.3 },
    },
    kitchenRenovation: {
      basePerSqm: 3500,
      finish: { Economy: 0.85, Standard: 1, Premium: 1.3 },
    },
    bathroomRenovation: {
      basePerSqm: 3000,
      finish: { Economy: 0.85, Standard: 1, Premium: 1.3 },
    },
  },
};
