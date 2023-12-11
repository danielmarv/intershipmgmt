import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SideBarItem = ({ Icon, label, dropdown, navPath, children, toggleMethod, toggleState }) => {
  const router = useRouter();
  // get current route
  const currentRoute = router.pathname;
  // check if current route contains navPath
  const isCurrentRoute = currentRoute.includes(navPath);

  return (
    <div
      className={`cursor-pointer ${toggleState && 'bg-sidebar-blue rounded'}`}
      role='button'
      tabIndex={0}
      onClick={dropdown && toggleMethod}>
      <Link href={navPath || '#'}>
        <div className={`flex items-center justify-between w-full h-12 hover:cursor-pointer mt-2`}>
          <div className={`flex items-center w-full`}>
            <div
              className={`w-1 h-5 mr-1 rounded-3xl ${
                isCurrentRoute ? 'bg-blue-600' : 'bg-transparent'
              }`}
            />
            <div
              className={`flex items-center py-3 px-4 w-full ${
                isCurrentRoute && 'bg-primary-50 rounded'
              }`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                  isCurrentRoute && 'text-blue-600'
                }`}>
                <Icon fill={isCurrentRoute ? '#145FFF' : '#6F87A1'} />
              </div>

              <h3
                className={`text-base font-medium ${
                  isCurrentRoute
                    ? 'text-blue-600 mr-3'
                    : 'font-normal text-secondary-neutral-light-800'
                }`}>
                {label}
              </h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SideBarItem;