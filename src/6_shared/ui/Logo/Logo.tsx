import WhiteLogo from "@shared/assets/logo/logo_white.svg?react";
import BlackLogo from "@shared/assets/logo/logo_dark.svg?react";
import { Link } from "react-router-dom";

type Props = {
  location: "header" | "footer";
};
export default function Logo({ location }: Props) {
  return (
    <Link to={"/"} className="flex items-center gap-1 icon-link">
      <div className="max-w-12">
        {location === "header" ? (
          <BlackLogo name="Есть Выход" width={60} height={60} />
        ) : (
          <WhiteLogo name="Есть Выход" width={60} height={60} />
        )}
      </div>

      <p
        className={`${location === "header" ? "text-secondary" : "text-base-100"} text-2xl  font-sans font-bold`}
      >
        Есть Выход
      </p>
    </Link>
  );
}
