// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import DashPosts from '../components/DashPosts';
import DashUsers from '../components/DashUsers';
import DashComments from '../components/DashComments';
import DashboardComp from '../components/DashboardComp';


export default function Dashboard() {
    const location = useLocation();
    const [tab, setTab] = useState('');
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        // console.log(tabFromUrl);
        if (tabFromUrl) {
            setTab(tabFromUrl);
        }
    }, [location.search]);
    return (
        <div className='min-h-screen flex flex-col md:flex-row'>
            <div className='md:w-56'>
                {/* Sidebar */}
                <DashSidebar />
            </div>
            {/* Profile ... */}
            {tab === 'profile' && <DashProfile />}
            {/* Posts ... */}
            {tab === 'posts' && <DashPosts />}
            {/* users */}
            {tab === 'users' && <DashUsers />}
            {/* comments */}
            {tab === 'comments' && <DashComments />}
            {/* dashboard component */}
            {tab === 'dash' && <DashboardComp />}
        </div>
    );
}
