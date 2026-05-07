/**
 * Prefix internal absolute paths with the Vite base URL.
 *
 * BrowserRouter is configured with basename={import.meta.env.BASE_URL}, but
 * plain <a href="/eor"> bypasses the router and breaks under GitHub Pages
 * subpaths (/mars-redesign-project/). Use withBase for every internal href
 * that starts with "/".
 */
export const withBase = (path: string): string => {
  const base = import.meta.env.BASE_URL;
  if (!path.startsWith("/")) return path;
  if (base === "/") return path;
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${trimmedBase}${path}`;
};
