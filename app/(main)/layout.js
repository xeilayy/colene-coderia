import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="container-max-width">
        {children}
      </main>
      <Footer />
    </>
  );
}
