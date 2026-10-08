import Image from "next/image";
import { player } from "../content/kevin";

export function VideoCard() {
  return (
    <button
      type="button"
      aria-label={player.heroVideo.label}
      className="group relative w-full max-w-[320px] overflow-hidden rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
    >
      <Image
        src={player.heroVideo.thumbnail}
        alt=""
        width={480}
        height={270}
        sizes="(max-width: 768px) 90vw, 320px"
        className="h-auto w-full object-cover"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red text-white">
          <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-5 w-5">
            <path d="M8 5v14l11-7L8 5Z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
