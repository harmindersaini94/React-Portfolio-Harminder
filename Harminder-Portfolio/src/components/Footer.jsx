import profile from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-6 font-mono text-xs text-dim md:px-8">
        <span>
          © {profile.copyrightYear} {profile.name}
        </span>
        <a href="#top" className="hover:text-mint">
          exit 0
        </a>
      </div>
    </footer>
  );
}
