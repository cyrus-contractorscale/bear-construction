/**
 * Runtime config helpers.
 *
 * On Cloudflare Workers (production/preview) these read from and write to the
 * BEAR_ESTIMATE KV namespace so the /audit admin can persist changes.
 *
 * On plain Next.js dev (npm run dev) there is no Cloudflare context, so we
 * fall back silently to the static defaults in lib/site.ts and lib/pricing.ts.
 */
import { site } from "./site";
import { pricing } from "./pricing";

export type SiteConfig    = typeof site;
export type PricingConfig = typeof pricing;

/** Resolve the BEAR_ESTIMATE KV namespace — returns null outside Workers. */
async function tryGetKV(): Promise<KVNamespace | null> {
  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const { env } = await getCloudflareContext({ async: true });
    return env.BEAR_ESTIMATE ?? null;
  } catch {
    // Running in plain Next.js dev server — no Cloudflare context
    return null;
  }
}

/** Read site config — KV value overrides static default when available. */
export async function getSiteConfig(): Promise<SiteConfig> {
  const kv = await tryGetKV();
  if (kv) {
    try {
      const raw = await kv.get("site-config");
      if (raw) return JSON.parse(raw) as SiteConfig;
    } catch {
      // Corrupt KV value — fall through to static default
    }
  }
  return site;
}

/** Read pricing config — KV value overrides static default when available. */
export async function getPricingConfig(): Promise<PricingConfig> {
  const kv = await tryGetKV();
  if (kv) {
    try {
      const raw = await kv.get("pricing-config");
      if (raw) return JSON.parse(raw) as PricingConfig;
    } catch {
      // Corrupt KV value — fall through to static default
    }
  }
  return pricing;
}

/** Persist site config to KV. Returns true on success, false if KV unavailable. */
export async function setSiteConfig(config: SiteConfig): Promise<boolean> {
  const kv = await tryGetKV();
  if (!kv) return false;
  await kv.put("site-config", JSON.stringify(config));
  return true;
}

/** Persist pricing config to KV. Returns true on success, false if KV unavailable. */
export async function setPricingConfig(config: PricingConfig): Promise<boolean> {
  const kv = await tryGetKV();
  if (!kv) return false;
  await kv.put("pricing-config", JSON.stringify(config));
  return true;
}
