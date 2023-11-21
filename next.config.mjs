import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';

import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath, remarkGfm],
  },
});

// TODO: set to false if you don't want to export a static site
// (frontend-starter exports to a static GitHub pages site, so this is true by default)
const outputStaticSite = true;
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  output: outputStaticSite ? 'export' : 'standalone',

  images: {
    unoptimized: outputStaticSite,
  },
};

export default withMDX(nextConfig);
