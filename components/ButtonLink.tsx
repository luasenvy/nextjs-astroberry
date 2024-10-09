import ArrowForward from "@mui/icons-material/ArrowForward";

import ViewTransitionLink from "./ViewTransitionLink";

export interface ButtonLinkProps extends React.PropsWithChildren {
  className?: string;
  href: string;
}

export default function ButtonLink({ className, href, children }: ButtonLinkProps) {
  return (
    <div className={className}>
      <ViewTransitionLink className="inline-flex group" href={href}>
        <span className="px-3 py-1 border-[1px] rounded-l text-sm inline-flex justify-center items-center group-hover:border-brand group-hover:text-brand transition-colors">
          {children}
        </span>
        <span className="px-2 py-1 text-sm border-[1px] border-l-0 rounded-r inline-flex justify-center items-center group-hover:border-brand group-hover:text-brand transition-colors">
          <ArrowForward className="w-3 h-3 cursor-pointer hover:text-brand" />
        </span>
      </ViewTransitionLink>
    </div>
  );
}
