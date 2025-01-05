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
    <section className="bg-base-200 relative lg:min-h-[720px] w-full flex justify-center lg:justify-end xl:gap-12 py-12 lg:py-16 px-8 lg:px-16 xl:px-[100px]">
      <div className="hidden lg:flex absolute left-[90px] xl:left-[160px] bottom-9 w-96 flex-col  items-center justify-center gap-1 p-5 bg-base-100 rounded-lg z-10">
        <p className="text-2xl font-bold">Фазиль Джавадов</p>
        <p className="text-base text-paragraph-100">-Юрист</p>
      </div>
      <div className="hidden lg:block absolute left-[-60px] xl:left-[20px] bottom-0 ">
        <img src={BG} alt="Синий фон" />
      </div>
      <div className="hidden lg:block absolute left-[80px] xl:left-[150px] bottom-0">
        <img src={Person} alt="Фазиль Джавадов - Юрист" />
      </div>
      <div className="relative flex flex-col justify-start w-full lg:w-1/2 gap-8">
        <div className="w-24 md:w-[unset] absolute right-0 lg:right-24 top-0 opacity-20">
          <QuoteMarks />
        </div>
        <h2 className="md:leading-normal text-4xl md:text-5xl font-bold">
          Часто задаваемые <br /> вопросы
        </h2>
        <AccordionC data={accordionData} />
      </div>
    </section>
  );
}
