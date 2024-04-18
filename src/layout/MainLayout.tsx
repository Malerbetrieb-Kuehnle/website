import { Outlet } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  );
};
export default MainLayout;
