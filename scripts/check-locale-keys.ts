// Deep key-parity check: every locale must have EXACTLY en's key paths.
// Run: npx tsx scripts/check-locale-keys.ts
import en from "../src/i18n/locales/en";
import zh from "../src/i18n/locales/zh";
import ms from "../src/i18n/locales/ms";
import id from "../src/i18n/locales/id";
import th from "../src/i18n/locales/th";
import vi from "../src/i18n/locales/vi";
import fil from "../src/i18n/locales/fil";
import hi from "../src/i18n/locales/hi";

type Dict = Record<string, unknown>;

function paths(obj: Dict, prefix = "", out: Set<string> = new Set()): Set<string> {
  for (const [k, v] of Object.entries(obj)) {
    const p = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) paths(v as Dict, p, out);
    else out.add(p);
  }
  return out;
}

const enPaths = paths(en as Dict);
const locales: Record<string, Dict> = { zh, ms, id, th, vi, fil, hi };
let bad = 0;

for (const [name, loc] of Object.entries(locales)) {
  const lp = paths(loc as Dict);
  const missing = [...enPaths].filter((p) => !lp.has(p));
  const extra = [...lp].filter((p) => !enPaths.has(p));
  if (missing.length || extra.length) {
    bad++;
    console.log(`\n[${name}] MISSING ${missing.length}, EXTRA ${extra.length}`);
    if (missing.length) console.log("  missing:", missing.slice(0, 40).join(", "));
    if (extra.length) console.log("  extra:  ", extra.slice(0, 40).join(", "));
  } else {
    console.log(`[${name}] OK — ${lp.size} keys match en`);
  }
}
process.exit(bad ? 1 : 0);
