import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32"> {/* Added padding to prevent navbar overlap */}
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;