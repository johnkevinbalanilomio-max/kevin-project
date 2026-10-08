import Image from "next/image";
import { player } from "../content/kevin";
import { SiteHeader } from "./SiteHeader";
import { GhostNumber } from "./GhostNumber";
import { QuoteBlock } from "./QuoteBlock";
import { VideoCard } from "./VideoCard";
import { NextGameCard } from "./NextGameCard";

export function Hero() {
  return (
    <section className="relative min-h-dvh w-full overflow-x-hidden px-gutter pb-8 pt-6">
      <SiteHeader />

      {/* Ghost number — top right, behind the figure */}
      <div className="pointer-events-none absolute right-gutter top-[8%] z-0 hidden md:block">
        <GhostNumber />
      </div>

      {/* Wordmark — bleeds off both edges, sits behind the player */}
      <h1 className="pointer-events-none absolute left-1/2 top-[54%] z-10 w-screen -translate-x-1/2 select-none text-center">
        <span className="sr-only">{player.fullName}</span>
        <span
          aria-hidden="true"
          className="block whitespace-nowrap text-wordmark font-extrabold uppercase leading-[0.82] tracking-[-0.045em] text-red"
        >
          {player.firstName}
          {player.lastName ? ` ${player.lastName}` : ""}
        </span>
      </h1>

      {/* Player figure — bottom anchored, in front of the wordmark */}
      <figure className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center">
        <div className="relative h-[58vh] w-auto md:h-[62vh] lg:h-[68vh]">
          <Image
            src={player.image}
            alt={player.kitAlt}
            width={900}
            height={1200}
            priority
            sizes="(max-width: 768px) 90vw, 60vw"
            className="h-full w-auto object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.18)]"
          />
        </div>
      </figure>

      {/* Quote — upper left */}
      <div className="relative z-30 mt-[18vh] max-w-[26rem] md:mt-[14vh]">
        <QuoteBlock />
      </div>

      {/* Bottom cards */}
      <div className="absolute inset-x-gutter bottom-8 z-30 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <VideoCard />
        <NextGameCard />
      </div>
    </section>
  );
}
