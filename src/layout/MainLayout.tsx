import { Outlet } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import NavbarNew from '@/components/ui/navbar-new';

const MainLayout = () => {
  return (
    <>
      <NavbarNew/>
      <Outlet />
      <Footer/>
    </>
  );
};
export default MainLayout;
