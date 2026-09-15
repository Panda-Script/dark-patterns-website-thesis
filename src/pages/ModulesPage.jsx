// src/pages/ModulesPage.jsx
import React from "react";
import { useUser } from "../context/UserContext";
import AppLayout from "../uicomponents/appLayout";
import ModuleAccordion from "../uicomponents/ModuleAccordion";
import { lessonsData } from "../data/lessonsData";
import { useTutorialTrigger } from "../hooks/useTutorialTrigger";
import TutorialModal from "../uicomponents/TutorialModal";
import './dashboard.css';

const ModulesPage = () => {
    const { userData } = useUser();
    const { showTutorial, closeTutorial } = useTutorialTrigger('modules');

    // Build module data with progress and lesson statuses
    const modules = lessonsData.modules.map((module) => {
        const progress = userData.moduleProgress?.[module.id] || {
            lessonsCompleted: 0,
            totalLessons: module.lessons.length
        };

        const totalLessons = module.lessons.length;
        const completedLessons = progress.lessonsCompleted || 0;
        const isCompleted = completedLessons >= totalLessons;
        const isLocked = module.id > 1 && !userData.moduleProgress?.[module.id - 1]?.completed;
        const progressPercentage = Math.min(
            Math.round((completedLessons / totalLessons) * 100),
            100
        );

        return {
            id: module.id,
            title: module.title,
            description: module.description,
            status: isCompleted ? 'completed' :
                    completedLessons > 0 ? 'in-progress' :
                    isLocked ? 'locked' : 'open',
            progress: progressPercentage,
            lessons: module.lessons.map((lesson) => ({
                id: lesson.id,
                title: lesson.title,
                status: userData.lessonProgress?.[`${module.id}-${lesson.id}`]?.completed ? 'completed' : 'not-started'
            }))
        };
    });

    return (
        <AppLayout>
            <div className="modules-page">
                <div>
                    <h1>Dark Pattern Missions</h1>
                    <p className="subtitle">
                        {lessonsData.modules.reduce((acc, m) => acc + m.lessons.length, 0)} objectives across {lessonsData.modules.length} missions
                    </p>
                </div>

                <div className="modules-list">
                    {modules.map((module) => (
                        <ModuleAccordion key={module.id} module={module} />
                    ))}
                </div>
            </div>

            {/* Tutorial */}
            {showTutorial && (
                <TutorialModal
                    tutorialId="modules"
                    onClose={closeTutorial}
                />
            )}
        </AppLayout>
    );
};

export default ModulesPage;