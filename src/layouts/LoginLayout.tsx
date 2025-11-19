import { Outlet } from 'react-router-dom';
import BaseLayout from './BaseLayout';

function LoginLayout() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
}

export default LoginLayout;

