import AboutUs from "@/components/site/AboutUs";
import BackgroundAndExpertise from "@/components/site/Background-and-Expertise";
import CompanyOverview from "@/components/site/Company-Overview";
import EconomicCaseForAI from "@/components/site/Economic-Case-For-AI";
import EmbracingAIResponsibly from "@/components/site/Embracing-AI-Responsibly";
import GetInTouch from "@/components/site/Get-In-Touch";
import Hero from "@/components/site/Hero";
import Navbar from "@/components/site/Navbar";
import OurMissions from "@/components/site/Our-Missions";
import OurSolutions from "@/components/site/Our-Solutions";
import TableOfContent from "@/components/site/Table-Of-Content";
import TransformativePowerOfAI from "@/components/site/Transformative-Power-Of-AI";
import WelcomeMessage from "@/components/site/Welcome-Message";

export default function Home() {
  return (
   <div className="">
    <Navbar />
    <Hero />
    <TableOfContent />
    <WelcomeMessage />
    <AboutUs />
    <CompanyOverview />
    <OurMissions />
    <OurSolutions />
    <BackgroundAndExpertise />
    <TransformativePowerOfAI />
    <EconomicCaseForAI />
    <EmbracingAIResponsibly />
    <GetInTouch />
   </div>
  );
}
