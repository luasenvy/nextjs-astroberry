import CalendarMonth from "@mui/icons-material/CalendarMonth";

import ViewTransitionLink from "./ViewTransitionLink";

import Tags from "@/components/Tags";
import type { PostItem } from "@/lib/data/posts";

interface PostListProps {
  posts: Array<PostItem>;
  className?: string;
}

export default function PostList({ className, posts }: PostListProps) {
  return (
    posts.length && (
      <ul className={className}>
        {posts.map(({ metadata }, i) => (
          <li key={`post-${i}`} className="mb-4">
            <div className="mb-4">
              <ViewTransitionLink
                href={`/posts/${metadata.slug}`}
                className="mb-2 text-lg md:text-xl font-bold text-content underline underline-offset-8 decoration-dashed hover:text-brand transition-colors"
              >
                {`${metadata.featured ? "🌟 " : ""}${metadata.title}`}
              </ViewTransitionLink>
            </div>
            <div className="flex items-center mb-2 pl-0 text-sm">
              <CalendarMonth className="inline-block mr-2 w-4 h-4 text-content" />
              {metadata.updatedAt}
              <Tags className="ml-2 text-content" tags={metadata.tags} />
            </div>
            <div className="pl-0 md:pl-5 text-base">{metadata.description}</div>
          </li>
        ))}
      </ul>
    )
  );
}
