import Footer from '@/components/layouts/footer/Footer';
import Header from '@/components/layouts/header/Header';
import Menu from '@/components/layouts/menu/Menu';

const HomePage = () => {
  return (
    <div>
      <Header />

      <h1 className="text-lg font-bold">Home</h1>

      <Menu />

      <Footer />
    </div>
  );
};

export default HomePage;
