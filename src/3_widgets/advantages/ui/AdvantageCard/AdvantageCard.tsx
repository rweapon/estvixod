import Bag from "@shared/assets/adv_card-icons/bag.svg?react";
import Plane from "@shared/assets/adv_card-icons/plane.svg?react";
import Shield from "@shared/assets/adv_card-icons/shield.svg?react";
import Handshake from "@shared/assets/adv_card-icons/handshake.svg?react";

type Props = {
  number: number;
};

export default function AdvantageCard({ number }: Props) {
  const cardInfoArray = [
    {
      title: "Списали долги 800+ клиентам",
      svg: <Bag />,
      paragraph:
        "Решаем вопросы любой сложности: от первой консультации до завершения процедуры банкротства.",
    },
    {
      title: "Сохраним ваши права и свободу",
      svg: <Plane />,
      paragraph:
        "Вернём возможность выезда за границу и защитим ваши интересы в суде.",
    },
    {
      title: "Полная защита от взысканий",
      svg: <Shield />,
      paragraph:
        "С началом процедуры банки и коллекторы прекращают любые требования к вам.",
    },
    {
      title: "Мы — ваш надёжный партнёр",
      svg: <Handshake />,
      paragraph:
        "Поддержка на всех этапах: от первого шага до полного освобождения от долгов.",
    },
  ];

  return (
    <article className="sm:min-h-[250px] xl:w-[270px] p-8 bg-base-100 rounded-lg flex flex-col gap-4">
      <div className="flex justify-between  gap-2 w-full">
        <h3 className="text-xl md:text-2xl font-bold">{cardInfoArray[number].title}</h3>
        <div className="w-20 sm:w-32 flex items-center">{cardInfoArray[number].svg}</div>
      </div>
      <p className="text-sm text-paragraph-100">{cardInfoArray[number].paragraph}</p>
    </article>
  );
}
