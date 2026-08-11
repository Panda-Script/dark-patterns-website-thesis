import React from 'react';
import './dashboard.css';
import AppLayout from '../uicomponents/appLayout';
import ModuleCard from '../uicomponents/ModuleCard';
import HeroStatCard from '../uicomponents/HeroStatCard';
import StatCard from '../uicomponents/StatCard';
import { useUser } from '../context/UserContext';

const Dashboard = () => {
    const { userData, loading, error } = useUser();

    // Handle loading and error states
    if (loading) {
        return <div>Loading the Quest Data...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!userData) {
        return <div>No user data available.</div>;
    }

    const modules = [
        //default modules
        {
            moduleNumber: 1,
            title: 'Title one tbd',
            description: 'Description one tbd',
            status: userData.moduleProgress[1]?.completed ? 'completed' : 
                    userData.moduleProgress[1]?.lessonsCompleted > 0 ? 'in-progress' : 'locked',
            progress: userData.moduleProgress[1]?.progress || 0,
            lessonsCompleted: userData.moduleProgress[1]?.lessonsCompleted || 0,
            totalLessons: 3,
            // Only make clickable if not locked
            onClick: userData.moduleProgress[1]?.completed || userData.moduleProgress[1]?.lessonsCompleted > 0 
                ? () => console.log('Navigate to Module 1') 
                : null
        },
        {
            moduleNumber: 2,
            title: 'Title two tbd',
            description: 'Description two tbd',
            status: userData.moduleProgress[2]?.completed ? 'completed' : 
                    userData.moduleProgress[2]?.lessonsCompleted > 0 ? 'in-progress' : 'locked',
            progress: userData.moduleProgress[2]?.progress || 0,
            lessonsCompleted: userData.moduleProgress[2]?.lessonsCompleted || 0,
            totalLessons: 3,
            // Only make clickable if not locked
            onClick: userData.moduleProgress[2]?.completed || userData.moduleProgress[2]?.lessonsCompleted > 0 
                ? () => console.log('Navigate to Module 2') 
                : null
        },
        {
            moduleNumber: 3,
            title: 'Title three tbd',
            description: 'Description three tbd',
            status: userData.moduleProgress[3]?.completed ? 'completed' : 
                    userData.moduleProgress[3]?.lessonsCompleted > 0 ? 'in-progress' : 'locked',
            progress: userData.moduleProgress[3]?.progress || 0,
            lessonsCompleted: userData.moduleProgress[2]?.lessonsCompleted || 0,
            totalLessons: 3,
            // Only make clickable if not locked
            onClick: userData.moduleProgress[2]?.completed || userData.moduleProgress[2]?.lessonsCompleted > 0 
                ? () => console.log('Navigate to Module 2') 
                : null
        },


    ] 
    return (
        <AppLayout>
            <div className="dashboard">
                <HeroStatCard userData={userData} />
                <StatCard userData={userData} />
                <div className="modules-grid">
                    {modules.map((module, index) => (
                        <ModuleCard key={index} {...module} />
                    ))}
                </div>
            </div>
        </AppLayout>
    );
};

export default Dashboard;