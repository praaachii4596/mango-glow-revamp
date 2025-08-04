import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32"> {/* Added padding to prevent navbar overlap */}
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;