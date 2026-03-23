"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/adoucisseur", label: "Adoucisseur" },
    { href: "/entretien-adoucisseur", label: "Entretien" },
    { href: "/depannage-adoucisseur", label: "Dépannage" },
    { href: "/prix-adoucisseur", label: "Prix" },
    { href: "/guides", label: "Guides" },
    { href: "/villes", label: "Villes" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
    {isMobileMenuOpen && (
      <div
        className="fixed inset-0 bg-black/40 z-40 md:hidden"
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />
    )}
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center" aria-label="Retour à l'accueil">
            <span className="text-2xl font-bold text-primary-700">
              {siteConfig.name}
            </span>
          </Link>
          
          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-6" aria-label="Navigation principale">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors pb-0.5 ${
                    isActive
                      ? "text-primary-600 font-semibold border-b-2 border-primary-600"
                      : "text-gray-700 hover:text-primary-600"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA desktop : téléphone + devis */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={phoneHref}
              className="flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-900 transition-colors"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.contact.phone}
            </a>
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Ouvrir le menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden border-t border-gray-200 py-4"
            aria-label="Navigation mobile"
          >
            <div className="flex flex-col space-y-4">
              <a
                href={phoneHref}
                className="flex items-center justify-center gap-2 bg-primary-50 text-primary-700 font-semibold px-4 py-3 rounded-lg border border-primary-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler le {siteConfig.contact.phone}
              </a>
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-2 py-1 rounded-lg transition-colors ${
                      isActive
                        ? "text-primary-600 font-semibold bg-primary-50"
                        : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Devis gratuit
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
    </>
  );
}












