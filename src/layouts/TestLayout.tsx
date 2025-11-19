import { Outlet } from 'react-router-dom';
import BaseLayout from './BaseLayout';

function TestLayout() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
}

export default TestLayout;

