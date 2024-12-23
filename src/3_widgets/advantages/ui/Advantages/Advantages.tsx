import Card from "@widgets/advantages/ui/Card/Card";

export default function Advantages() {
  return (
    <section className="bg-base-200 px-8 md:px-14 2xl:px-[100px] py-[84px] flex flex-col gap-10 xl:flex-row items-center justify-between">
      <div className="flex flex-col gap-6 md:gap-12 lg:max-w-[50%]">
        <h2 className="text-4xl md:text-5xl font-serif font-bold">Почему именно мы?</h2>
        <p className="text-xl md:text-2xl font-sans text-paragraph-200">
          Мы помогаем людям законно избавиться от долгов и начать жизнь с
          чистого листа. Опыт и доверие — наши главные аргументы.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-end gap-6">
        {/* <div className="flex flex-col sm:flex-row sm:flex-wrap justify-end gap-6"> */}
        {new Array(4).fill("").map((_, i) => (
          <Card number={i} key={i} />
        ))}
      </div>
    </section>
  );
}
