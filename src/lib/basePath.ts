// GitHub Pages serves this project under /sns-portfolio-pages/, so plain
// <video>/<source> tags (which Next.js does not rewrite automatically,
// unlike next/image and next/link) need this prefix applied manually.
export const basePath = "/sns-portfolio-pages";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
