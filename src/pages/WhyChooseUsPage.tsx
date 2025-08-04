import Header from "@/components/Header";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const WhyChooseUsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32"> {/* Added padding to prevent navbar overlap */}
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default WhyChooseUsPage;