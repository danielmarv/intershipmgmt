'use client';
import React from 'react';

const SidebarItems = ({ items }) => {
    return (
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li key={index} className="flex items-center">
                    <span className="mr-2">{item.icon}</span>
                    <a href={item.href} className="text-white">
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SidebarItems;
