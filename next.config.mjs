import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import remarkHeadingId from 'remark-heading-id';

import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath, remarkGfm, remarkHeadingId],
  },
});

// TODO ASAP: set to false if you don't want to export a static site
// (frontend-starter exports to a static GitHub pages site, so this is true by default)
const outputStaticSite = true;
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  // TODO ASAP: set to your own basePath (or, if you're not sure what it means, just remove the property)
  // (frontend-starter exports to a static GitHub pages site, so this is set to that basePath by default)
  basePath: outputStaticSite ? '/frontend-starter' : throwErr('Please set your basePath in next.config.mjs!'),

  output: outputStaticSite ? 'export' : 'standalone',

  poweredByHeader: false,

  images: {
    unoptimized: outputStaticSite,
  },
};

export default withMDX(nextConfig);
