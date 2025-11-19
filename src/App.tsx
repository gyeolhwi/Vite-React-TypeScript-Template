/**
 * @title App 컴포넌트
 * @description 사용자는 MainLayout
 * @description 관리자는 AdminLayout
 * @description 테스트는 TestLayout
 */
import { Outlet } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';

function App() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
}

export default App;
