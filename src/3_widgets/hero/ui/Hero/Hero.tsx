import { Button } from "@shared/ui";

export default function Hero() {
  return (
    <section className="bg-base-100  flex items-center md:items-end justify-center hero ">
      <div className="flex flex-col md:items-center gap-10 md:gap-12 z-10 md:mb-20">
        <h1 className="text-4xl md:text-7xl font-bold  text-secondary">
          Из Любой
          <br className="hidden md:block" /> Ситуации
          <br /> Есть Выход
        </h1>
        <p className="text-xl md:text-2xl font-medium leading-[150%] text-paragraph-200">
          Списать долги? Законно. Официально. Навсегда.
          <br /> Банкротство физических лиц — путь к финансовой свободе.
        </p>
        <Button
          variant="secondary"
          className="text-lg sm:text-base font-bold p-8"
        >
          КОНСУЛЬТАЦИЯ
        </Button>
      </div>
      <div className="hero_gradient" />
    </section>
  );
}
