import Card from "@shared/assets/docs_card-icons/card.svg?react";
import Percent from "@shared/assets/docs_card-icons/percent.svg?react";
import Avatar from "@shared/assets/docs_card-icons/avatar.svg?react";

type Props = {
  number: number;
};

export default function DocsCard({ number }: Props) {
  const cardInfoArray = [
    {
      title: "Финансовые",
      svg: <Card />,
      paragraph: [
        "Кредитные договоры, расписки, залоговые соглашения, графики платежей и другие документы, обосновывающие причину долга и его сумму.",
      ],
    },
    {
      title: "Налоговые",
      svg: <Percent />,
      paragraph: [
        "Выписка из реестра ЕГРИП/ЕГРЮЛ (действительна в течение последних 5 рабочих дней).",
        "Сведения об уплаченных налогах за последние 3 года.",
        "Выписки с банковских счетов за последние 3 года.",
      ],
    },
    {
      title: "Личные",
      svg: <Avatar />,
      paragraph: [
        "Копии свидетельств ИНН и СНИЛС.",
        "Свидетельства о браке или его расторжении.",
        "Документы, подтверждающие рождение детей.",
        "Брачный договор (если имеется).",
      ],
    },
  ];

  return (
    <article className="sm:w-[340px] p-8 text-secondary stroke-secondary bg-base-100 rounded-lg flex flex-col gap-4">
      <div className="flex gap-3">
        <div className="flex items-center">{cardInfoArray[number].svg}</div>
        <div className="text-xl md:text-2xl font-bold">
          {cardInfoArray[number].title}
        </div>
      </div>
      <ul className="list-disc text-base text-paragraph-200 pl-5">
        {cardInfoArray[number].paragraph?.map((text) => <li>{text}</li>)}
      </ul>
    </article>
  );
}
