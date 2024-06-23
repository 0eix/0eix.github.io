import createMDX from "@next/mdx";
import remarkGfm from 'remark-gfm';
import remarkParse from "remark-parse";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
    images: {
        unoptimized: true,
    },
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.bib$/,
      use: "raw-loader",
    });

    return config;
  },
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm, remarkParse, remarkRehype],
        rehypePlugins: [rehypeStringify],
    },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
