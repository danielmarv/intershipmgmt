"use client";
import React, { useState, useEffect } from 'react';
import AccountPageLayout from '@components/common/Accounts/Layouts';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from "next-auth/react";
import Link from 'next/link';
import Image from 'next/image';
import Spinner from '@/components/Spinner';
import Toast from '@components/Toast';
import VisibilityOffIcon from '@public/assets/images/visibility_off.svg';
import VisibilityOnIcon from '@public/assets/images/visibility_on.svg';
const UserLogin = () => {
  const session = useSession();
    const router = useRouter();
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordType, setPasswordType] = useState('password');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (session?.status === 'authenticated') {
        router.push('/admin');
    }
}, [session?.status, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const result = await signIn('credentials', {
        redirect: false,
        username,
        password,
      });

      if (result.ok) {
        router.push('/admin');
      }

    } catch (error) {
      // Handle other types of errors (e.g., network issues, server errors)
      console.error('An error occurred during login:', error);
      setErrors('An error occurred during login:', error);
    } finally {
      setLoading(false);
    }
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
        {errors && <Toast type={'errors'} timeout={8000} message={`${errors}`} />}
        <form onSubmit={handleLogin} data-testid='login-form'>
          <div className='mt-6'>
            <div className='w-full'>
              <div className='text-xl text-black-700'>User Name</div>
              <div className='mt-2 w-full'>
                <input
                  type='text'
                  data-testid='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder='e.g. admin'
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
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  type={passwordType}
                  placeholder='******'
                  className={`ml-3 w-full px-6 p-3 rounded-[4px] border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-300 focus:border-green-500`}
                  required
                />
                <div className='absolute right-4 top-[25px]  transform -translate-y-1/2 cursor-pointer'>
                  <div onClick={togglePasswordVisibility}>
                    {passwordType === 'password' && <Image src={VisibilityOffIcon} alt="visibility" />}
                    {passwordType === 'text' && (
                      <Image src={VisibilityOnIcon} alt="visibility" className='stroke-1 stroke-svg-green' />
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