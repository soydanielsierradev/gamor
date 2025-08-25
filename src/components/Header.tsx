import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router";
import NavItem from "./ui/nav-item";
import ThemeToggle from "./ui/theme-toggle";
import { links } from "../data/links";

interface HeaderProps {
  textLogo: string;
}

const Header: React.FC<HeaderProps> = ({ textLogo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const nav = document.getElementById("header");
    const sections = Array.from(
      document.querySelectorAll("section[id]")
    ) as HTMLElement[];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Cambiar fondo del header
      if (nav) {
        nav.classList.toggle("scroll-header", scrollY >= 80);
      }

      // Activar links según sección
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        const sectionBottom = sectionTop + section.offsetHeight;
        const link = document.querySelector(
          `.nav__menu a[href*="${section.id}"]`
        );

        if (scrollY > sectionTop && scrollY <= sectionBottom) {
          link?.classList.add("active-link");
        } else {
          link?.classList.remove("active-link");
        }
      });
    };

    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        {/* MENU */}
        <div className={`nav__menu ${isOpen ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            {links.map(({ href, label }) => (
              <NavItem
                key={href}
                href={href}
                label={label}
                onClick={closeMenu}
              />
            ))}

            <div className="button__menu">
              <NavLink
                to="/login"
                className="button__menu-link"
                onClick={closeMenu}
              >
                Sign in
              </NavLink>
              <NavLink to="/register" className="button" onClick={closeMenu}>
                Create account
              </NavLink>
            </div>

            {/* Botón de tema*/}
            <ThemeToggle />
          </ul>
        </div>

        {/* LOGO */}
        <NavLink to="/" className="nav__logo">
          {textLogo}
        </NavLink>

        {/* Toggle menú */}
        <div className="nav__toggle" onClick={() => setIsOpen((prev) => !prev)}>
          <i className="bx bx-grid-alt" />
        </div>

        {/* Botones header */}
        <div className="button__header">
          <NavLink to="/login" className="button__header-link">
            Sign in
          </NavLink>
          <NavLink to="/register" className="button">
            Create account
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
