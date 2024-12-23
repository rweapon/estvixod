import { Achievements } from "@widgets/achievements";
import { CallToAction } from "@widgets/action";
import { Advantages } from "@widgets/advantages";
import { Hero } from "@widgets/hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <Advantages />
      <Achievements />
      <CallToAction />
    </main>
  );
}
