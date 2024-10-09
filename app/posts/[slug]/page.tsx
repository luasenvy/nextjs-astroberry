"use client";

import { useParams } from "next/navigation";

import Article from "@/components/Article";
import Container from "@/components/Container";
import posts from "@/lib/data/posts";

export default function PostViewer() {
  const { slug } = useParams();
  const post = posts.find(({ metadata }) => metadata.slug === slug);

  return (
    <Container>
      <h1 className="text-2xl md:text-5xl font-bold">{post?.metadata.title}</h1>
      <Article>{post?.Component && <post.Component />}</Article>
    </Container>
  );
}
