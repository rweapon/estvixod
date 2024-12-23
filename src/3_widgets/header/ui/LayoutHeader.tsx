import { Links, Logo } from "@shared/ui";
import { Link } from "react-router-dom";

export default function LayoutHeader() {
  return (
    <header className="bg-base-100 py-6 px-10">
      <div className="container flex flex-col sm:flex-row gap-4 sm:gap-0  items-center justify-between">
        <Logo location="header" />
        <nav className="hidden lg:block">
          <ul className="flex gap-8 text-xl">
            <li className="header-link">
              <Link to={"/"}>Контакты</Link>
            </li>
            <li className="header-link">
              <Link to={"/"}>О Компании</Link>
            </li>
            <li className="header-link">
              <Link to={"/"}>Услуги</Link>
            </li>
          </ul>
        </nav>
        <Links location="header" />
      </div>
    </header>
  );
}
