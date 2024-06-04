import { FaqSimple } from "./ui/faq/FaqSimple";
import { FeaturesCards } from "./ui/features/FeaturesCards";
import { HeroContentLeft } from "./ui/hero/HeroContentLeft";

export default function HomePage() {
  return (
    <main>
      <HeroContentLeft/>
      <FeaturesCards/>
      <FaqSimple/>
    </main>
  
  );
}
