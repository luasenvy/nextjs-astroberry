declare module "*.mdx" {
  import type { Element, MDXProps } from "mdx/types";

  interface Frontmatter {
    title: string;
    slug: string;
    tags: Array<string>;
    author: string;
    createdAt: string;
    updatedAt: string;
    description: string;
    draft: boolean;
    featured: boolean;
    content: string;
  }

  function MDXContent(props: MDXProps): Element;
  const metadata: Frontmatter;

  export { metadata, MDXContent as default };
}
