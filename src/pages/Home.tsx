import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32"> {/* Added padding to prevent navbar overlap */}
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Home;