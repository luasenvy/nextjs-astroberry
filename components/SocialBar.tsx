import { createElement } from "react";

import ViewTransitionLink from "./ViewTransitionLink";

import { config } from "@/lib/config";

export default function SocialBar() {
  return (
    config.social?.length && (
      <div className="flex gap-x-3">
        {config.social.map(({ url, name, icon }, i) => (
          <ViewTransitionLink
            key={`social-link-${i}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            {createElement(icon, {
              className: "w-7 h-7 md:w-8 md:h-8 cursor-pointer hover:text-brand",
            })}
          </ViewTransitionLink>
        ))}
      </div>
    )
  );
}
