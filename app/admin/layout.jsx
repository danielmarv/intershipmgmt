
import React from 'react';
import { useRouter } from 'next/router';
import Sidebar from '@components/Admin/Sidebar/Sidebar';

const AdminLayout = ({ children }) => {
  const router = useRouter();

  const isLoggedIn = true;
  if (!isLoggedIn) {
    router.push('/signin');
    return null;
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-200">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="w-3/4 bg-white">
        {/* Main content */}
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
