import profile from "../data/profile";

/**
 * Only portrait on the site. Swap the photo by setting profile.avatar.src
 * in src/data/profile.js. A null src renders this HS placeholder.
 */
export default function Avatar() {
  const { avatar } = profile;

  if (avatar.src) {
    return (
      <img
        src={avatar.src}
        alt={avatar.alt}
        width={176}
        height={176}
        className="h-32 w-32 rounded-2xl object-cover ring-1 ring-edge md:h-44 md:w-44"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${avatar.alt}. Terminal placeholder with initials ${avatar.initials}. A portrait has not been added yet.`}
      className="flex h-32 w-32 flex-col items-center justify-center rounded-2xl border border-dashed border-mint/50 bg-ink md:h-44 md:w-44"
    >
      <span className="mb-2 flex gap-1.5" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
        <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
        <span className="h-2 w-2 rounded-full bg-[#28C840]" />
      </span>
      <span className="font-mono text-3xl font-bold tracking-tight text-mint md:text-4xl">
        {avatar.initials}
      </span>
      <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-amber">
        {avatar.placeholderLabel}
      </span>
    </div>
  );
}
