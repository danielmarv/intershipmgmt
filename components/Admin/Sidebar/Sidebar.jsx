'use client';
import React from 'react';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
    const sidebarItems = [
        { icon: 'icon1', name: 'Item 1', href: '/item1', isProtected: true },
        { icon: 'icon2', name: 'Item 2', href: '/item2', isProtected: false },
        // Add more sidebar items as needed
    ];

    return (
        <div className="bg-gray-800 text-white w-64 flex flex-col">
            <div className="p-4">
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            </div>
            <div className="flex-grow">
                <SidebarItem items={sidebarItems} />
            </div>
        </div>
    );
};

export default Sidebar;
