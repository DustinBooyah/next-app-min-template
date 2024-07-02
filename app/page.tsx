import { FaqSimple } from "./ui/faq/FaqSimple";
import { FeaturesCards } from "./ui/features/FeaturesCards";
import { HeroContentLeft } from "./ui/hero/HeroContentLeft";
import { HeaderSimple } from "./ui/header/HeaderSimple";
import { FooterLinks } from "./ui/footer/FooterLinks";

export default function HomePage() {
  return (
    <main>
      <HeaderSimple/>
      <HeroContentLeft/>
      <FeaturesCards/>
      <FaqSimple/>
      <FooterLinks/>
    </main>
  
  );
}
