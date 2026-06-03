import AboutSection from "@/components/homepage/AboutSection";
import AvailableTutors from "@/components/homepage/AvailableTutors";
import GlobalTutorLocation from "@/components/homepage/GlobalTutorLocation";
import Hero from "@/components/homepage/Hero";
import TrustedLearners from "@/components/homepage/TrustedLearners";

export default function Home() {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <AvailableTutors/>
      <GlobalTutorLocation/>
      <TrustedLearners/>
    </div>
  );
}
