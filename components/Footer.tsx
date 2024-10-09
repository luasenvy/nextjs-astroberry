import classnames from "classnames";

import BrandLink from "@/components/BrandLink";
import { config } from "@/lib/config";

export interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={classnames(
        className,
        "flex flex-col md:flex-row items-center md:justify-between space-y-1 md:space-x-0 text-sm"
      )}
    >
      <span>
        Powered by <BrandLink className="font-semibold" /> &amp; writed nextjs by{" "}
        <BrandLink className="font-semibold" href="https://www.luas.kr">
          luasenvy
        </BrandLink>
      </span>
      <span>
        &copy;{new Date().getFullYear()} {config.author} all rights reserved
      </span>
    </footer>
  );
}
