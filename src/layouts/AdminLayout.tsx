import { Outlet } from 'react-router-dom';
import BaseLayout from './BaseLayout';

function AdminLayout() {
  return (
    <BaseLayout>
      {/* 여기에 Admin 전용 컴포넌트 추가 가능 (예: 사이드바, 헤더 등) */}
      <Outlet />
    </BaseLayout>
  );
}

export default AdminLayout;

