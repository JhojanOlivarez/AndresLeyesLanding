import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../data/siteData";
import BrandLogo from "./BrandLogo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative text-sm font-semibold transition-all duration-200 hover:scale-105 px-3 py-2 rounded-xl ${
      isActive 
        ? "text-brand-navy bg-brand-navy/10 shadow-sm" 
        : "text-brand-slate hover:text-brand-navy hover:bg-brand-navy/5"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-6">
        <nav className="backdrop-blur-xl bg-white/90 border border-white/20 flex items-center justify-between rounded-2xl px-6 py-4 shadow-2xl shadow-brand-navy/10">
          <Link to="/" className="min-w-0 flex-shrink-0">
            <BrandLogo compact />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.href} to={link.href} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/citas"
              className="relative overflow-hidden rounded-xl bg-gradient-to-r from-brand-navy to-brand-cyan px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-cyan/25 active:scale-95"
            >
              <span className="relative z-10">Reservar Cita</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-navy/20 bg-white/90 text-brand-navy shadow-lg transition-all duration-200 hover:scale-105 hover:bg-brand-navy hover:text-white lg:hidden"
            aria-label="Abrir navegación"
          >
            {isOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
          </button>
        </nav>

        {isOpen ? (
          <div className="mt-4 rounded-2xl backdrop-blur-xl bg-white/95 border border-white/20 p-6 shadow-2xl shadow-brand-navy/10 lg:hidden">
            <div className="flex flex-col gap-3">
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
              <Link
                to="/citas"
                onClick={() => setIsOpen(false)}
                className="mt-3 rounded-xl bg-gradient-to-r from-brand-navy to-brand-cyan px-6 py-3 text-center text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105"
              >
                Reservar Cita
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Navbar;
