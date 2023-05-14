import Footer from '@/components/layouts/footer/Footer';
import Header from '@/components/layouts/header/Header';
import Menu from '@/components/layouts/menu/Menu';
import Posts from '@/components/ui/pages/blog/Posts';

const BlogPage = () => {
  return (
    <div>
      <Header />

      <h1 className="text-lg font-bold">Blog</h1>

      <Posts />

      <Menu />

      <Footer />
    </div>
  );
};

export default BlogPage;
