export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
/** Prefix an internal path with the site base (for GitHub Pages sub-path previews). */
export function u(p: string): string {
  if (!p) return '#';
  if (/^(https?:|mailto:|tel:|#)/.test(p)) return p;
  return base + (p.startsWith('/') ? p : '/' + p);
}
/** Rewrite root-relative links/images inside CMS HTML. */
export function fix(html: string): string {
  return (html || '').replace(/(href|src)="\/(?!\/)/g, `$1="${base}/`);
}
