import Layout from "../components/layout/Layout";
import HeaderBanner from "../components/common/HeaderBanner";
import Services from "../components/home/Services";

export default function ServicesPage() {
  return (
    <Layout>
      <div className="mt-16 md:mt-18 lg:mt-22">
        <HeaderBanner title="Our Services" />
      </div>
      <Services />
    </Layout>
  );
}
