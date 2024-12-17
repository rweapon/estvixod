import { Button } from "@shared/ui";

export default function Home() {
  return (
    <main className="flex items-center justify-center mt-4 sm:mt-14">
      <section className="bg-base-100 w-full h-96 px-10 container">
        <div className="flex flex-col sm:max-w-[60%] items-start sm:ml-10 gap-6 sm:gap-8">
          <h1 className="text-5xl sm:text-7xl font-bold leading-[120%] text-secondary">
            Из Любой Ситуации Есть Выход
          </h1>
          <p className="sm:text-2xl font-medium leading-[150%]">
            Списать долги? Законно. Официально. Навсегда.
            <br /> Банкротство физических лиц — путь к финансовой свободе.
          </p>
          <Button
            variant="secondary"
            className="sm:text-base font-bold p-6 sm:p-8"
          >
            КОНСУЛЬТАЦИЯ
          </Button>
        </div>
      </section>
    </main>
  );
}
