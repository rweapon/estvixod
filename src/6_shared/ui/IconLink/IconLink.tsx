import TG from "@shared/assets/socials-icons/telegram.svg?react";
import WA from "@shared/assets/socials-icons/whatsapp.svg?react";
import VK from "@shared/assets/socials-icons/vk.svg?react";
import { Link } from "react-router-dom";

type Props = {
  variant: "vk" | "whatsapp" | "telegram";
  location: "header" | "footer";
};
export default function IconLink({ variant, location }: Props) {
  const links = {
    vk: "http://vk.com/id710718927",
    whatsapp: "https://wa.me/79999746730",
    telegram: "https://t.me/estvixod",
  };

  return (
    <Link to={links[variant]} target="_blank">
      {variant === "vk" && (
        <VK
          width={600}
          height={600}
          fill={
            location === "header" ? "hsl(214, 47%, 39%)" : "hsl(220, 65%, 99%)"
          }
        />
      )}
      {variant === "whatsapp" && (
        <WA
          width={600}
          height={600}
          className={location === "footer" ? "whatsapp" : ""}
        />
      )}
      {variant === "telegram" && (
        <TG
          width={600}
          height={600}
          fill={
            location === "header" ? "hsl(214, 47%, 39%)" : "hsl(220, 65%, 99%)"
          }
        />
      )}
    </Link>
  );
}
