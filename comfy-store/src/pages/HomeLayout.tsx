import { Header } from '@/components';
import { Outlet } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function HomeLayout() {
  return (
    <>
      <Header />
      <div>
        <Button
          variant="destructive"
          size="lg"
          onClick={() => console.log('it worked!!!')}
        >
          Click Me
        </Button>
      </div>
      <Outlet />
    </>
  );
}
export default HomeLayout;
