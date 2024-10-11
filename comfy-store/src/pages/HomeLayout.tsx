import { Header, Navbar } from '@/components';
import { Outlet } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="align-element py-20">
        <Outlet />
      </div>
    </>
  );
}
export default HomeLayout;
