// SidebarItem.js
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SideBarItem = ({ Icon, label, navPath, toggleMethod, toggleState }) => {
  const router = useRouter();
  const isCurrentRoute = (navPath) => {
    return router.pathname === navPath;
  };
  const handleClick = () => {
    // Call the toggleMethod if it's provided
    if (toggleMethod) {
      toggleMethod(!toggleState); // Toggle the state
    }
  };

  return (
    <div
      role='button'
      tabIndex={0}
      onClick={handleClick}
    >
      <Link href={navPath}>
            <div
              className={`flex items-center gap-3 rounded-md px-3 py-2 transition-all ${
                isCurrentRoute ? "bg-gray-100" : "group-hover:bg-gray-50"
              }`}
            >
            <Icon className={`h-5 stroke-2 ${
                isCurrentRoute
                    ? "stroke-blue-700"
                    : "stroke-gray-500 group-hover:stroke-blue-700"
                }`}
            />

              <h3
                className={`hidden text-base font-semibold xl:block  ${
                  isCurrentRoute
                  ? "text-gray-900"
                  : "text-gray-500 group-hover:text-gray-900"
                }`}
              >
                {label}
              </h3>
            </div>
      </Link>
    </div>
  );
};

export default SideBarItem;
