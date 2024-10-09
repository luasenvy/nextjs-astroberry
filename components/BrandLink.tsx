import OpenInNew from "@mui/icons-material/OpenInNew";
import classnames from "classnames";

import { Children } from "react";

import ViewTransitionLink from "./ViewTransitionLink";

export interface BrandLinkProps extends React.PropsWithChildren {
  className?: string;
  href?: string;
}

export default function BrandLink({
  className,
  href = "https://github.com/boluoim/astroberry",
  children,
}: BrandLinkProps) {
  return (
    <ViewTransitionLink
      href={href}
      target="_blank"
      className={classnames(
        "underline underline-offset-4 decoration-dashed decoration-brand hover:text-brand transition-colors",
        className
      )}
    >
      {Children.count(children) > 0 ? children : "Astroberry"}
      <OpenInNew className="inline-block w-4 h-4" />
    </ViewTransitionLink>
  );
}
