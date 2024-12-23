import { ActionDialog } from "@shared/ui";
import ActionCall from "@shared/assets/actioncall/actioncall.png";

export default function CallToAction() {
  return (
    <section className="bg-base-100 w-full flex justify-between lg:gap-12 py-12 md:py-16 px-8 md:px-16 lg:px-[100px]">
      <div className="flex flex-col md:items-start gap-10 lg:max-w-[65%]">
        <h3 className="text-4xl md:text-5xl font-bold">
          Оставьте заявку сейчас
        </h3>
        <p className="text-xl md:text-2xl font-medium text-paragraph-200">
          Заполните короткую форму, и наш специалист свяжется с вами, чтобы
          проконсультировать по всем вопросам. Первый шаг к финансовой свободе
          начинается здесь!
        </p>

        <ActionDialog location="action" />
      </div>
      <div className="hidden lg:block">
        <img
          className="max-w-full h-auto"
          src={ActionCall}
          alt="Фото мужчины, говорящего по телефону"
        />
      </div>
    </section>
  );
}
