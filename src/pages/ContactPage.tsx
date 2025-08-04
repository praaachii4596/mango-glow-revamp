import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32"> {/* Added padding to prevent navbar overlap */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;