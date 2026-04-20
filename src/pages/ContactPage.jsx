import Layout from "../components/layout/Layout";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";

export default function ContactPage() {
  return (
    <Layout>
      <ContactHero />
      <ContactForm />
    </Layout>
  );
}
