import IconLink from "@shared/ui/IconLink/IconLink";

type Props = {
  location: "header" | "footer";
};

export default function Links({ location }: Props) {
  return (
    <ul className="flex gap-3">
      <li className="max-w-8 icon-link">
        <IconLink variant="whatsapp" location={location} />
      </li>
      <li className="max-w-8 icon-link">
        <IconLink variant="telegram" location={location} />
      </li>
      <li className="max-w-8 icon-link">
        <IconLink variant="vk" location={location} />
      </li>
    </ul>
  );
}
