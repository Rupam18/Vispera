import Layout from "../components/layout/Layout";
import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import AboutStrategy from "../components/about/AboutStrategy";
import VisionMission from "../components/about/VisionMission";
import WhyVispera from "../components/about/WhyVispera";
import MeetTeam from "../components/about/MeetTeam";

export default function AboutPage() {
  return (
    <Layout>
      <AboutHero />
      <AboutIntro />
      <AboutStrategy />
      <VisionMission />
      <WhyVispera />
      <MeetTeam />
    </Layout>
  );
}
