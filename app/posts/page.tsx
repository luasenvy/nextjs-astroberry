import Container from "@/components/Container";
import PostList from "@/components/PostList";

import posts from "@/lib/data/posts";

export default function PostsPage() {
  return (
    <Container>
      <h1 className="text-3xl md:text-5xl text-brand font-bold">Posts</h1>
      <p className="md:w-2/3 text-lg md:text-xl">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
        industries for previewing layouts and visual mockups.
      </p>

      <PostList className="mt-8" posts={posts} />
    </Container>
  );
}
