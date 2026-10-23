
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#406861] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-sm">
          <Link to="/" className="text-xl font-bold tracking-wide hover:text-amber-400">
            Currency Exchange
          </Link>
          <p className="mt-2 text-sm leading-6 text-white/75">
            Simple, reliable currency conversion wherever you need it.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
            <li>
              <Link to="/" className="transition-colors hover:text-amber-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-colors hover:text-amber-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/github" className="transition-colors hover:text-amber-400">
                Github
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-6 py-4 text-xs text-white/70">
          &copy; {new Date().getFullYear()} Currency Exchange. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;