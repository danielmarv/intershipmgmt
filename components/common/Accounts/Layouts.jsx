import React, { useEffect, useState } from 'react';
import SmallLogo from '@public/assets/images/bugema.png';
import Image from 'next/image';


const AccountPageLayout = ({ children, rightImage, childrenTop, childrenHeight, sideBackgroundColor }) => {
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return (
    <div className=' w-full h-full text-center'>

        <div>
          <Image
            src={SmallLogo}
            alt='AirQo'
            width={100}
            height={100}
            className='mx-auto text-center justify-center p-4'
          />
        </div>
        <div>
          {children}
        </div>
    </div>
  );
};

export default AccountPageLayout;
