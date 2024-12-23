import { Button } from "@shared/ui";
import ActionCall from "@shared/assets/actioncall/actioncall.png";

export default function CallToAction() {
  return (
    <section className="bg-base-100 w-full flex justify-between gap-12 py-16 px-[100px]">
      <div className="flex flex-col items-start gap-10 max-w-[65%]">
        <h3 className="text-5xl font-bold">Оставьте заявку сейчас</h3>
        <p className="text-2xl font-medium text-paragraph-200">
          Заполните короткую форму, и наш специалист свяжется с вами, чтобы
          проконсультировать по всем вопросам. Первый шаг к финансовой свободе
          начинается здесь!
        </p>
        <Button variant="secondary" className="text-base font-bold p-8 leading-normal">ОСТАВИТЬ ЗАЯВКУ</Button>
      </div>
      <div className="">
        <img className="max-w-full h-auto" src={ActionCall} alt="Фото мужчины, говорящего по телефону" />
      </div>
    </section>
  );
}
