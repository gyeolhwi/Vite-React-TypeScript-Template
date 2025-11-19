import { Outlet } from 'react-router-dom';
import BaseLayout from './BaseLayout';

function MainLayout() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
}

export default MainLayout;

