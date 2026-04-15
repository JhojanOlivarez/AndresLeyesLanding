import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../data/siteData";
import BrandLogo from "./BrandLogo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-semibold transition ${
      isActive ? "text-brand-navy" : "text-brand-slate hover:text-brand-navy"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4">
        <nav className="glass-panel flex items-center justify-between rounded-full px-5 py-3 shadow-soft">
          <Link to="/" className="min-w-0">
            <BrandLogo compact />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.href} to={link.href} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/citas"
              className="rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-ink"
            >
              Reservar
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/10 bg-white/80 text-brand-navy lg:hidden"
            aria-label="Abrir navegación"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>

        {isOpen ? (
          <div className="glass-panel mt-3 rounded-[2rem] p-5 shadow-soft lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={navLinkClass}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Navbar;
