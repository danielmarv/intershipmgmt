"use client";
import React, { useState } from 'react';
import AccountPageLayout from '@components/common/Accounts/Layouts';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setUserName, setUserPassword } from '@lib/Accounts/loginSlice';
// import { postUserLoginDetails, getUserDetails } from '@/core/apis/Account';
// import setAuthToken from '@/core/utils/setAuthToken';
// import jwt_decode from 'jwt-decode';
// import { setFailure, setSuccess, setUserInfo } from '@/lib/store/services/account/LoginSlice';
import Link from 'next/link';
import Image from 'next/image';
import Spinner from '@/components/Spinner';
import Toast from '@components/Toast';
import VisibilityOffIcon from '@public/assets/images/visibility_off.svg';
import VisibilityOnIcon from '@public/assets/images/visibility_on.svg';
import SmallLogo from '@public/assets/images/logo.svg';
import SideImage from '@public/assets/images/grid.svg';
// import { getIndividualUserPreferences } from '@/lib/store/services/account/UserDefaultsSlice';

const UserLogin = () => {
  const [errors, setErrors] = useState(false);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [passwordType, setPasswordType] = useState('password');
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const postData = useSelector((state) => state.login);

  const handleLogin = async (e) => {
    // e.preventDefault();
    // setLoading(true);

    // try {
    //   const { token } = await postUserLoginDetails(postData.userData);
    //   localStorage.setItem('token', token);
    //   const decoded = jwt_decode(token);
    //   const response = await getUserDetails(decoded._id, token);
    //   localStorage.setItem('loggedUser', JSON.stringify(response.users[0]));

    //   if (!response.users[0].groups[0].grp_title) {
    //     throw new Error('Server error. Contact support to add you to the AirQo Organisation');
    //   }

    //   await dispatch(getIndividualUserPreferences(response.users[0]._id)).then((res) => {
    //     if (res.payload.success) {
    //       const preferences = res.payload.preferences;
    //       const activeGroup = preferences[0]?.group_id
    //         ? response.users[0].groups.find((group) => group._id === preferences[0].group_id)
    //         : response.users[0].groups.find((group) => group.grp_title === 'airqo');
    //       localStorage.setItem('activeGroup', JSON.stringify(activeGroup));
    //     }
    //   });

    //   dispatch(setUserInfo(response.users[0]));
    //   dispatch(setSuccess(true));
    //   router.push('/admin');
    // } catch (error) {
    //   dispatch(setSuccess(false));
    //   const errorMessage =
    //     error?.response?.data.message || 'Something went wrong, please try again';
    //   dispatch(setFailure(errorMessage));
    //   setErrors(true);
    //   setError(errorMessage);
    // } finally {
    //   setLoading(false);
    // }
  };

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  return (
    <AccountPageLayout
      pageTitle='Login | BUIMS'
      >
      <div className='w-full'>
        <h2 className='text-3xl text-black-700 font-medium'>Lets get started</h2>
        <p className='text-xl text-black-700 font-normal mt-3'>
          Administration Use Only !!
        </p>
        {errors && <Toast type={'error'} timeout={8000} message={`${error}`} />}
        <form onSubmit={handleLogin} data-testid='login-form'>
          <div className='mt-6'>
            <div className='w-full'>
              <div className='text-xl text-black-700'>User Name</div>
              <div className='mt-2 w-full'>
                <input
                  type='text'
                  data-testid='username'
                  onChange={(e) => dispatch(setUserName(e.target.value))}
                  placeholder='e.g. greta.nagawa@gmail.com'
                  className={`input ml-3 w-full px-6 p-3 rounded-[4px] border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-300 focus:border-green-500`}
                  required
                />
              </div>
            </div>
          </div>
          <div className='mt-6'>
            <div className='w-full'>
              <div className='text-xl text-black-700'>Password</div>
              <div className='mt-2 w-full relative'>
                <input
                  data-testid='password'
                  onChange={(e) => dispatch(setUserPassword(e.target.value))}
                  type={passwordType}
                  placeholder='******'
                  className={`ml-3 w-full px-6 p-3 rounded-[4px] border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-300 focus:border-green-500`}
                  required
                />
                <div className='absolute right-4 top-[25px]  transform -translate-y-1/2 cursor-pointer'>
                  <div onClick={togglePasswordVisibility}>
                    {passwordType === 'password' && <Image src={VisibilityOffIcon} />}
                    {passwordType === 'text' && (
                      <Image src={VisibilityOnIcon} className='stroke-1 stroke-svg-green' />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <button
              data-testid='login-btn'
              style={{ textTransform: 'none' }}
              className='ml-3 w-full px-6 btn bg-blue-500 rounded-[12px] text-white text-sm outline-none border-none hover:bg-blue-600 h-8'
              type='submit'>
              {loading ? <Spinner data-testid='spinner' width={25} height={25} /> : 'Login'}
            </button>
          </div>
        </form>
        <div className='mt-8 w-full flex justify-center'>
          <div>
            <span className='text-sm text-grey-300'>Not an Administrator?</span>
            <span className='text-sm text-blue-900 font-medium'>
              {' '}
              <Link href='/tracking'>Return to tracking</Link>
            </span>
          </div>
        </div>
      </div>
      {/* ui */}
    </AccountPageLayout>
  );
};

export default UserLogin;