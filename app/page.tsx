import EndingSection from "@/component/home/ending";
import HeroSection from "@/component/home/hero";
import JourneySection from "@/component/home/journey";
import LetterSection from "@/component/home/Letter";
import PromiseSection from "@/component/home/promise";
import RakshyaBandhanSection from "@/component/home/rakshya";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RakshyaBandhanSection />
      <JourneySection />
      <LetterSection />
      <PromiseSection />
      <EndingSection />
    </main>
  );
}
