import { Separator } from "@shared/ui";

export default function Achievements() {
  return (
    <section className="relative bg-secondary-300 text-base-100 w-full flex flex-col items-center gap-8 sm:gap-10 py-12 md:py-16 px-8 sm:px-0">
      <div className="flex flex-col gap-2 lg:w-1/2 text-center achievement_text">
        <h3>
          Цифры, которые говорят
          <br className="hidden sm:block" /> сами за себя
        </h3>
        <p>Наши достижения в фактах и числах.</p>
      </div>
      <ul className="flex flex-col sm:flex-row text-center justify-between gap-4 sm:gap-8  lg:w-1/2 achievement_text">
        <li>
          <h3 className="font-sans">893</h3>
          <p>Клиентов</p>
        </li>
        <li>
          <Separator orientation="vertical" className="hidden sm:block" />
          <Separator className="block sm:hidden" />
        </li>
        <li>
          <h3 className="font-sans">800+</h3>
          <p>Выигранных дел</p>
        </li>
        <li>
          <Separator orientation="vertical" className="hidden sm:block" />
          <Separator className="block sm:hidden" />
        </li>
        <li>
          <h3 className="font-sans">9</h3>
          <p>Лет опыта</p>
        </li>
      </ul>
      <div className="achievements_bg" />
    </section>
  );
}
