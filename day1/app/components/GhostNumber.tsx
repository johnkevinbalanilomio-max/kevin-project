import { player } from "../content/kevin";

export function GhostNumber() {
  return (
    <span
      aria-hidden="true"
      className="ghost-hatch select-none text-[7rem] font-extrabold leading-none lg:text-[11rem]"
    >
      {player.number}
    </span>
  );
}
