import Person from "@shared/assets/faq/person.png";
import BG from "@shared/assets/faq/ppBG.png";
import QuoteMarks from "@shared/assets/faq/quoteMarks.svg?react";
import { IAccordionData } from "@shared/interfaces";
import { AccordionC } from "@shared/ui";

export default function FAQ() {
  const accordionData: IAccordionData[] = [
    {
      title: "Какие процедуры предусмотрены для банкротства?",
      content: [
        "Мировое соглашение с кредиторами.",
        "Полная реструктуризация задолженности.",
        "Реализация имущества.",
      ],
    },
    {
      title: "Какое имущество не могут конфисковать?",
      content: [
        "Единственное жильё (вместе с участком земли).",
        "Личные вещи и предметы быта.",
        "Продукты питания, деньги и топливо, необходимые для жизни.",
      ],
    },
    {
      title: "Кто может подать на банкротство?",
      content: [
        "Любой гражданин или индивидуальный предприниматель с долгом от 500 000 рублей и просрочкой платежей более 3 месяцев.",
      ],
    },
    {
      title: "Какие последствия наступают после банкротства?",
      content: [
        "Запрет на повторное банкротство в течение 5 лет.",
        "Ограничение на руководящие должности в юридических лицах сроком на 3 года.",
      ],
    },
  ];

  return (
    <section className="bg-base-200 relative min-h-[720px] w-full flex justify-end lg:gap-12 py-12 md:py-16 px-8 md:px-16 lg:px-[100px]">
      <div className="absolute left-[160px] bottom-9 w-96 flex flex-col  items-center justify-center gap-1 p-5 bg-base-100 rounded-lg z-10">
        <p className="text-2xl font-bold">Фазиль Джавадов</p>
        <p className="text-base text-paragraph-100">-Юрист</p>
      </div>
      <div className="absolute left-[20px] bottom-0 ">
        <img src={BG} alt="Синий фон" />
      </div>
      <div className="absolute left-[150px] bottom-0">
        <img src={Person} alt="Фазиль Джавадов - Юрист" />
      </div>
      <div className="relative flex flex-col justify-start w-1/2 gap-8">
        <div className="absolute right-24 top-0 opacity-20">
          <QuoteMarks />
        </div>
        <h2 className="leading-normal text-5xl font-bold">
          Часто задаваемые <br /> вопросы
        </h2>
        <AccordionC data={accordionData} />
      </div>
    </section>
  );
}
