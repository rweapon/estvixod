import { IAccordionData } from "@shared/interfaces";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./components";

type Props = {
  data: IAccordionData[];
};

export default function AccordionC({ data }: Props) {
  return (
    <Accordion type="single"  defaultValue="item-1" className="flex flex-col gap-4">
      {data?.map(({ title, content }, i) => (
        <AccordionItem value={`item-${i + 1}`}>
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>
            {content.map((text) => (
              <li>{text}</li>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
