/**
 * Runtime config helpers.
 * Returns static defaults from lib/site.ts and lib/pricing.ts.
 * KV-based admin editing can be wired in later via Cloudflare Workers bindings.
 */
import { site } from "./site";
import { pricing } from "./pricing";

export type SiteConfig    = typeof site;
export type PricingConfig = typeof pricing;

export async function getSiteConfig(): Promise<SiteConfig> {
  return site;
}

export async function getPricingConfig(): Promise<PricingConfig> {
  return pricing;
}

export async function setSiteConfig(_config: SiteConfig): Promise<boolean> {
  // KV write not available in this deployment — update lib/site.ts directly
  return false;
}

export async function setPricingConfig(_config: PricingConfig): Promise<boolean> {
  // KV write not available in this deployment — update lib/pricing.ts directly
  return false;
}
