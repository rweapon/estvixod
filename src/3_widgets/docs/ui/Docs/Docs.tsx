import DocsCard from "@widgets/docs/ui/DocsCard/DocsCard";

export default function Docs() {
  return (
    <section className="relative bg-secondary-300 text-base-100 w-full flex flex-col items-center gap-8 sm:gap-10 py-12 md:py-16 px-8 sm:px-0">
      <div className="flex flex-col gap-2 text-center achievement_text">
        <h3>Перечень необходимых документов</h3>
        <p>для успешного запуска процесса банкротства.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-end gap-6">
        {new Array(3).fill("").map((_, i) => (
          <DocsCard number={i} key={i} />
        ))}
      </div>
      <div className="docs_bg" />
    </section>
  );
}
