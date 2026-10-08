import Image from "next/image";
import { nextGame } from "../content/kevin";

export function NextGameCard() {
  return (
    <aside
      aria-label="Next game"
      className="w-full max-w-[360px] rounded-lg bg-panel px-5 py-4 text-panel-ink"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-pill bg-red px-3 py-1 text-[0.625rem] font-bold uppercase tracking-[0.08em] text-white">
          {nextGame.badge}
        </span>
        <span className="text-[0.8125rem] font-medium text-white/80">
          {nextGame.kickoffLabel}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-3 text-sm font-semibold">
        <span className="flex items-center gap-2">
          <Image src={nextGame.home.crest} alt="" width={24} height={24} />
          {nextGame.home.name}
        </span>
        <span className="text-white/50">vs</span>
        <span className="flex items-center gap-2">
          <Image src={nextGame.away.crest} alt="" width={24} height={24} />
          {nextGame.away.name}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-3 text-[0.75rem] text-white/70">
        <span>{nextGame.competition}</span>
        <span>{nextGame.stage}</span>
      </div>
    </aside>
  );
}
