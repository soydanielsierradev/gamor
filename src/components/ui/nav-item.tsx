interface NavItemProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, onClick }) => (
  <li className="nav__item">
    <a href={href} className="nav__link" onClick={onClick}>
      {label}
    </a>
  </li>
);

export default NavItem;
