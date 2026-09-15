// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import './dashboard.css';
import AppLayout from '../uicomponents/appLayout';
import ModuleCard from '../uicomponents/ModuleCard';
import HeroStatCard from '../uicomponents/HeroStatsCard';
import StatCard from '../uicomponents/statGrid';
import GrimoireCard from '../uicomponents/GrimoireCard';
import MissionCard from '../uicomponents/MissionCard';
import { useUser } from '../context/UserContext';
import { lessonsData } from '../data/lessonsData';
import GrimoireModal from "../uicomponents/GrimoireModal";
import { useTutorialTrigger } from "../hooks/useTutorialTrigger";
import TutorialModal from "../uicomponents/TutorialModal";

const Dashboard = () => {
    const { userData, loading, error } = useUser();
    const [isGrimoireOpen, setIsGrimoireOpen] = useState(false);
    const { showTutorial, closeTutorial } = useTutorialTrigger('dashboard');

    // Loading and error states
    if (loading) {
        return <div>Loading the Quest Data...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!userData) {
        return <div>No user data available.</div>;
    }

    // Check if a module is unlocked (previous module must be completed)
    const isModuleUnlocked = (moduleId) => {
        if (moduleId === 1) return true;
        const prevModule = userData.moduleProgress[moduleId - 1];
        return prevModule?.completed === true;
    };

    // Get the status of a module
    const getModuleStatus = (moduleId) => {
        if (!isModuleUnlocked(moduleId)) return 'locked';

        const module = userData.moduleProgress[moduleId];
        const moduleData = lessonsData.modules.find(m => m.id === moduleId);

        if (!module) return 'locked';

        const totalLessons = moduleData?.lessons?.length || 3;
        const isCompleted = module.lessonsCompleted >= totalLessons;

        if (module.completed || isCompleted) return 'completed';
        if (module.lessonsCompleted > 0) return 'in-progress';

        return 'open';
    };

    // Build all modules with their current status
    const allModules = lessonsData.modules.map((module) => {
        const progress = userData.moduleProgress?.[module.id] || {
            lessonsCompleted: 0,
            totalLessons: module.lessons.length
        };

        const totalLessons = module.lessons.length;
        const completedLessons = progress.lessonsCompleted || 0;
        const progressPercentage = Math.min(Math.round((completedLessons / totalLessons) * 100), 100);

        return {
            moduleNumber: module.id,
            title: module.title,
            description: module.description,
            status: getModuleStatus(module.id),
            progress: progressPercentage,
            lessonsCompleted: completedLessons,
            totalLessons: totalLessons,
            onClick: isModuleUnlocked(module.id)
                ? () => console.log(`Navigate to Module ${module.id}`)
                : null
        };
    });

    // Find the current module and the next locked one
    const firstNonCompleted = allModules.find(m => m.status !== 'completed');
    const firstNonCompletedIndex = firstNonCompleted ? allModules.indexOf(firstNonCompleted) : allModules.length;
    const lastCompleted = firstNonCompletedIndex > 0 ? allModules[firstNonCompletedIndex - 1] : null;

    const isCurrentModule = firstNonCompleted && (firstNonCompleted.status === 'in-progress' || firstNonCompleted.status === 'open');
    const nextLocked = isCurrentModule
        ? allModules.find(m => m.status === 'locked' && m.moduleNumber > firstNonCompleted.moduleNumber)
        : null;

    // Filter to only show: last completed, current, next locked
    let filteredModules = [];

    if (lastCompleted) {
        filteredModules.push(lastCompleted);
    }

    if (firstNonCompleted) {
        filteredModules.push(firstNonCompleted);
    }

    if (nextLocked) {
        filteredModules.push(nextLocked);
    }

    if (filteredModules.length === 0) {
        filteredModules = allModules;
    }

    return (
        <>
            <AppLayout onOpenGrimoire={() => setIsGrimoireOpen(true)}>
                <div className="dashboard">
                    {/* Top Row */}
                    <div className="top-row">
                        <div className="hero-column">
                            <HeroStatCard userData={userData} />
                        </div>
                        <div className="stats-column">
                            <StatCard userData={userData} />
                        </div>
                        <div className="stats-column">
                            <MissionCard userData={userData} />
                        </div>
                        <div className="stats-column">
                            <GrimoireCard
                                userData={userData}
                                onOpenGrimoire={() => setIsGrimoireOpen(true)}
                            />
                        </div>
                    </div>

                    {/* Continue Learning */}
                    <div className="continue-learning">
                        <h2>Continue Learning...</h2>
                    </div>

                    {/* Modules Grid */}
                    <div className="modules-grid">
                        {filteredModules.map((module, index) => (
                            <ModuleCard key={index} {...module} />
                        ))}
                    </div>
                </div>
            </AppLayout>

            {/* Grimoire Modal */}
            <GrimoireModal
                isOpen={isGrimoireOpen}
                onClose={() => setIsGrimoireOpen(false)}
            />

            {/* Tutorial */}
            {showTutorial && (
                <TutorialModal
                    tutorialId="dashboard"
                    onClose={closeTutorial}
                />
            )}
        </>
    );
};

export default Dashboard;