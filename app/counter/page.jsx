import Footer from '@/components/layouts/footer/Footer';
import Header from '@/components/layouts/header/Header';
import Menu from '@/components/layouts/menu/Menu';
import Counter from '@/components/ui/pages/counter/Counter';

const CouterPage = () => {
  return (
    <div>
      <Header />
      <h1 className="text-lg font-bold">Counter</h1>

      <Counter />

      <Menu />

      <Footer />
    </div>
  );
};

export default CouterPage;
