
import React from 'react';
// import Link from 'next/link';
import AdminLayout from './layout.jsx';

const AdminDashboard = () => {
    // Check if user is authenticated
    const isAuthenticated = true; // Replace with your authentication logic

    if (!isAuthenticated) {
        // Redirect to sign-in page if not authenticated
        // return <Redirect to="/signin" />;
    }

    return (
        <AdminLayout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Admin Dashboard!</h1>
                <p className="text-gray-600">Manage internships, applicants, and more.</p>
                {/* Add your dashboard components here */}
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;
