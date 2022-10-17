import Image from "next/image";
import Link from "next/link";
import menuItems from "./menuItems";

const Header = () => {
  return (
    <header className="l-header">
      <div className="l-header__logo">
        <Link href="/">
          <a>
            <Image height={42} width={130} src="/svg/logo.svg" alt="Lalasia" />
          </a>
        </Link>
      </div>
      <nav className="l-header__nav">
        <ul>
          {menuItems.map((menuItem) => (
            <li key={menuItem.title}>
              <a href={menuItem.link}>{menuItem.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="l-header__nav-trigger"></button>
    </header>
  );
};

export default Header;
