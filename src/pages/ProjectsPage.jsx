import Layout from "../components/layout/Layout";
import HeaderBanner from "../components/common/HeaderBanner";
import Projects from "../components/home/Projects";

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="mt-16 md:mt-20 lg:mt-24">
        <HeaderBanner title="Our Work" />
      </div>
      <Projects />
    </Layout>
  );
}
