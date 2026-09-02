import type { ArticleBlock } from "@/content/types";

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          const Heading = block.level === 2 ? "h2" : "h3";
          return (
            <Heading
              key={i}
              className="font-display text-2xl md:text-3xl font-semibold text-navy-950 mt-4"
            >
              {block.text}
            </Heading>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={i}
              className="border-l-4 border-h2green-600 py-2 pl-6 font-display text-xl md:text-2xl font-medium leading-snug text-navy-950"
            >
              &ldquo;{block.text}&rdquo;
            </blockquote>
          );
        }
        return (
          <p key={i} className="text-base leading-relaxed text-ink-700">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
