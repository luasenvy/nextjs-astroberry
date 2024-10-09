import OpenInNew from "@mui/icons-material/OpenInNew";

import { Children } from "react";

import ViewTransitionLink from "./ViewTransitionLink";

export interface BrandLinkProps extends React.PropsWithChildren {
  href?: string;
}

export default function BrandLink({
  href = "https://github.com/boluoim/astroberry",
  children,
}: BrandLinkProps) {
  return (
    <>
      <ViewTransitionLink
        href={href}
        target="_blank"
        className="underline underline-offset-4 decoration-dashed decoration-brand"
      >
        {Children.count(children) > 0 ? children : "Astroberry"}
      </ViewTransitionLink>
      <OpenInNew className="inline-block w-4 h-4" />
    </>
  );
}
