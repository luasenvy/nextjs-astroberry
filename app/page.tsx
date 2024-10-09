import Avatar from "@/components/Avatar";
import BrandLink from "@/components/BrandLink";
import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import SocialBar from "@/components/SocialBar";
import { config } from "@/lib/config";

export default function HomePage() {
  return (
    <Container>
      <Avatar />
      <h1 className="text-3xl md:text-5xl text-brand font-bold">{config.author}</h1>
      <p className="text-lg md:text-xl">
        <BrandLink /> is a fast, SEO-friendly, beautiful blog theme for Astro, built with
        TailwindCSS. This theme follows best practices and provides accessibility out of the box.
        Light and dark mode are supported by default.
      </p>
      <SocialBar />
      <ButtonLink href="/posts/">Read Posts</ButtonLink>
    </Container>
  );
}
