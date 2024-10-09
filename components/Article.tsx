import classnames from "classnames";

export interface ArticleProps extends React.PropsWithChildren {
  className?: string;
}

export default function Article({ className, children }: ArticleProps) {
  return (
    <article className={classnames(className, "prose prose-slate lg:prose-xl dark:prose-invert")}>
      {children}
    </article>
  );
}
