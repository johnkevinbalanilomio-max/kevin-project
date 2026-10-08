import { player } from "../content/kevin";
import { SocialIcon } from "./SocialIcon";

export function SiteHeader() {
  return (
    <header className="relative z-30 flex items-center justify-between gap-4">
      {/* Avatar lockup */}
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-full bg-red text-[0.6rem] font-bold uppercase leading-tight text-white"
        >
          <span>{player.firstName}</span>
          {player.lastName && <span>{player.lastName}</span>}
        </span>

        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-sm font-bold tracking-tight text-ink">
            {player.club}
          </span>
          <span className="text-[0.8125rem] font-medium text-ink-muted">
            {player.roles}
          </span>
        </div>
      </div>

      {/* Nav + socials */}
      <div className="flex items-center gap-6">
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {["Partners", "Collaboration"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.08em] text-ink transition-opacity hover:opacity-60"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full border border-ink"
                  />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul aria-label="Social links" className="flex items-center gap-3">
          {player.socials.map((social) => (
            <li key={social.id}>
              <a
                href={social.href}
                rel="noopener noreferrer"
                target="_blank"
                className="block text-ink transition-opacity hover:opacity-60"
              >
                <span className="sr-only">{social.label}</span>
                <SocialIcon id={social.id} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
