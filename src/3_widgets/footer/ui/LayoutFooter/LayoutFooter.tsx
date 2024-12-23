/* eslint-disable no-irregular-whitespace */
import { Links, Logo } from "@shared/ui";
import { Link } from "react-router-dom";
import Phone from "@shared/assets/contacts-icons/phone.svg?react";
import Mail from "@shared/assets/contacts-icons/mail.svg?react";
import Pin from "@shared/assets/contacts-icons/location.svg?react";

export default function LayoutFooter() {
  return (
    <footer className="w-full flex flex-col ">
      <div className="bg-secondary-300 flex flex-col md:flex-row justify-between  items-start gap-8 py-12 md:py-16 px-8 md:px-16 lg:px-[100px]">
        <div className="flex flex-col items-start gap-10">
          <Logo location="footer" />
          <div className="space-y-6">
            <div className="bg-base-100 text-secondary-300 text-xl font-bold px-3 py-2 rounded-lg w-max">
              Контакты:
            </div>
            <address className="space-y-2">
              <Link to={"tel:89999746730"} className="contacts-link">
                <Phone />8 999 974-67-30
              </Link>
              <Link to={"mailto:estvyxod@gmail.com"} className="contacts-link">
                <Mail />
                estvyxod@gmail.com
              </Link>
              <Link
                to={"https://yandex.ru/maps/-/CHQuqVIu"}
                target="_blank"
                className="contacts-link"
              >
                <Pin />
                111141, Москва, Зелёный проспект, д.3/10 стр.15
              </Link>
            </address>
          </div>
        </div>
        <Links location="footer" />
      </div>
      <div className="bg-secondary text-sm sm:text-base text-base-200 py-4 px-8 md:px-16 lg:px-[100px]">
        <p>© 2024 Есть Выход. Все права защищены.</p>
      </div>
    </footer>
  );
}
