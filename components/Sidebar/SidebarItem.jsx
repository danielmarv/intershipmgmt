// SidebarItem.js
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SidebarItem = ({ href, icon, label, isAuthenticated, isAdmin }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  // Check if the item should be visible based on authentication and admin status
  const isVisible = isAuthenticated && (isAdmin ? true : !href.startsWith('/admin'));

  // Render null if the item should not be visible
  if (!isVisible) {
    return null;
  }

  return (
    <Link href={href} passHref>
      <a className={`group flex items-center gap-3 rounded-md px-3 py-2 transition-all ${isActive ? 'bg-gray-100' : 'group-hover:bg-gray-50'}`}>
        {icon}
        <span className={`hidden text-base font-semibold xl:block ${isActive ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-900'}`}>
          {label}
        </span>
      </a>
    </Link>
  );
};

export default SidebarItem;
