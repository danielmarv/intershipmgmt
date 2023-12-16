"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import {
  HomeIcon,
  UsersIcon,
  UserPlusIcon,
  UserCircleIcon,
  ShieldCheckIcon,
  ListIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import SidebarItem from "@components/Sidebar/SidebarItem";

const  Sidebar = () => {
  const { data: session } = useSession();

    const [ providers, setProviders ] = useState(null);

    const [ toggleDropdown, setToggleDropdown ] = useState(false);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }
        setUpProviders();
    }, [])
  return (
    <div className="sticky top-0 flex h-screen flex-col justify-between border-r border-gray-200 bg-white px-1 py-5 xl:py-12 xl:px-1">
      <div className="ie-logo px-1 py-0 text-center xl:text-left">
        <div className="text-xl font-medium text-gray-900 xl:px-3 xl:text-2xl">
          <span className="block xl:hidden">BU</span>
          <span className="hidden xl:block">Bugema University</span>
        </div>
      </div>
      <div className="ie-menu mt-8 h-full">
        {session?.user ? (
          <div className="flex flex-col items-center gap-3 p-1 xl:items-stretch xl:px-3">
            <SidebarItem label='DashBoard' Icon={HomeIcon} navPath='/admin'/>
            <SidebarItem label='Students' Icon={ListIcon} navPath='/admin/student-list'/>
            <SidebarItem label='Supervisors' Icon={UsersIcon} navPath='/admin'/>
            <SidebarItem label='Marks ASS' Icon={UsersIcon} navPath='/admin'/>
            <SidebarItem label='' Icon={UsersIcon} navPath='/logout'/>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 p-1 xl:items-stretch xl:px-3">
            <SidebarItem label='Registration' Icon={UserPlusIcon} navPath='/'/>
            <SidebarItem label='Tracking' Icon={UsersIcon} navPath='/tracking'/>
          </div>
        )} 
        
      </div>
      <div className="ie-user hidden items-center gap-2 px-3 xl:flex">
        <UserCircleIcon className="h-12 stroke-gray-700 stroke-1 group-hover:stroke-blue-700" />
        <div className="ie-userDetails">
          <div className="flex justify-between gap-2">
            <span className="text-base font-semibold text-gray-700">Administrator</span>
            <div className="group flex cursor-pointer items-center gap-1 rounded-full bg-gray-100 px-2 py-1 transition-all hover:bg-gray-50">
              <ArrowLeftOnRectangleIcon className="h-4 stroke-gray-700 stroke-[1.5] group-hover:stroke-red-700" />
              <span className="text-xs font-medium text-gray-700 group-hover:text-red-700">
              {session?.user ? (
                <button type="button" onClick={signOut} 
                  className="outline_btn">
                      Sign Out
                  </button>
              ) : (
                    <Link href="/login" >login</Link>
                  )}
              </span>
            </div>
          </div>
          <span className="mt-1 block text-sm font-medium text-gray-700">
            Administration Dashboard
          </span>
        </div>
      </div>
      <div className="ie-userMobile p-1 xl:hidden">
        <span className="flex flex-col items-center rounded-md bg-gray-50 px-3 py-2">
          <ArrowLeftOnRectangleIcon className="h-5 stroke-gray-700 stroke-2 group-hover:stroke-red-700" />
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
