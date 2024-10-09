import classnames from "classnames";

interface TagsProps {
  tags?: Array<string>;
  className?: string;
}

export default function Tags({ className, tags }: TagsProps) {
  return (
    tags?.length && (
      <div className={classnames("space-x-2", className)}>
        {tags.map((tag, i) => (
          <span key={`tag-${i}`} className="before:content-['#']">
            {tag}
          </span>
        ))}
      </div>
    )
  );
}
