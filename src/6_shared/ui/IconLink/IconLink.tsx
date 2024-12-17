import TG from "@shared/assets/icons/telegram.svg?react";
import WA from "@shared/assets/icons/whatsapp.svg?react";
import VK from "@shared/assets/icons/vk.svg?react";
import { Link } from "react-router-dom";

type Props = {
  variant: "vk" | "whatsapp" | "telegram";
};
export default function IconLink({ variant }: Props) {
  const links = {
    vk: "http://vk.com/id710718927",
    whatsapp: "https://wa.me/79999746730",
    telegram: "https://t.me/estvixod",
  };

  return (
    <Link to={links[variant]} target="_blank">
      {variant === "vk" && <VK width={600} height={600} />}
      {variant === "whatsapp" && <WA width={600} height={600} />}
      {variant === "telegram" && <TG width={600} height={600} />}
    </Link>
  );
}
