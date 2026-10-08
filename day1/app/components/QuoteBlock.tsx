import { player } from "../content/kevin";

export function QuoteBlock() {
  return (
    <blockquote className="relative pl-1">
      <span
        aria-hidden="true"
        className="absolute -left-1 -top-6 text-4xl leading-none text-red"
      >
        &ldquo;
      </span>
      <p className="text-quote font-extrabold uppercase leading-[1.05] tracking-[-0.01em] text-ink">
        {player.quote}
      </p>
      <cite className="mt-4 flex items-center gap-2 text-[0.8125rem] not-italic text-ink-muted">
        <span aria-hidden="true" className="block h-3 w-px bg-ink-muted" />
        {player.firstName} {player.lastName}
      </cite>
    </blockquote>
  );
}
