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
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withMDX(nextConfig);
