import Logo from "@shared/assets/logo/logo.svg?react";
import { IconLink } from "@shared/ui";
import { Link } from "react-router-dom";

export default function LayoutHeader() {
  return (
    <header className="bg-base-100 py-6 px-10 ">
      <div className="container flex flex-col sm:flex-row gap-4 sm:gap-0  items-center justify-between">
        <Link to={"/"} className="flex items-center gap-1 icon-link">
          <div className="max-w-12">
            <Logo name="Есть Выход" width={600} height={600} />
          </div>
          <p className="text-2xl text-secondary font-sans font-bold">Есть Выход</p>
        </Link>
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
        <ul className="flex gap-3">
          <li className="max-w-8 icon-link">
            <IconLink variant="whatsapp" />
          </li>
          <li className="max-w-8 icon-link">
            <IconLink variant="telegram" />
          </li>
          <li className="max-w-8 icon-link">
            <IconLink variant="vk" />
          </li>
        </ul>
      </div>
    </header>
  );
}
