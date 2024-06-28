import { FaqSimple } from "./ui/faq/FaqSimple";
import { FeaturesCards } from "./ui/features/FeaturesCards";
import { HeroContentLeft } from "./ui/hero/HeroContentLeft";
import { HeaderSimple } from "./ui/header/HeaderSimple";

export default function HomePage() {
  return (
    <main>
      <HeaderSimple/>
      <HeroContentLeft/>
      <FeaturesCards/>
      <FaqSimple/>
    </main>
  
  );
}
