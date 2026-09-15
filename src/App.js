// src/App.jsx
import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider, useUser } from "./context/UserContext";
import { TutorialProvider } from "./context/TutorialContext";  // ← ADD THIS
import OnboardingPage from "./pages/OnboardingPage";
import Dashboard from "./pages/Dashboard";
import ModulesPage from "./pages/ModulesPage";
import LessonPage from "./pages/LessonPage";
import QuizPage from "./pages/QuizPage";
import QuizResultsPage from "./pages/QuizResultsPage";
import BadgePage from "./pages/BadgePage";
import StoryPage from "./pages/StoryPage";

const ProtectedRoute = ({ children }) => {
    const { userData, loading } = useUser();
    if (loading) return <div className="loading-screen">Loading...</div>;
    if (!userData?.onboardingComplete) return <Navigate to="/onboarding" replace />;
    return children;
};

const AppRoutes = () => {
    const { userData, loading } = useUser();
    if (loading) return <div className="loading-screen">Loading...</div>;
    
    return (
        <Routes>
            <Route 
                path="/onboarding" 
                element={
                    userData?.onboardingComplete 
                        ? <Navigate to="/dashboard" replace />
                        : <OnboardingPage />
                } 
            />
            <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/modules" element={<ProtectedRoute><ModulesPage /></ProtectedRoute>} />
            <Route path="/lesson/:moduleId/:lessonId" element={<ProtectedRoute><LessonPage /></ProtectedRoute>} />
            <Route path="/quiz/:moduleId/:lessonId" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
            <Route path="/quiz/results/:moduleId/:lessonId" element={<ProtectedRoute><QuizResultsPage /></ProtectedRoute>} />
            <Route path="/badges" element={<ProtectedRoute><BadgePage /></ProtectedRoute>} />
            <Route path="/story/:chapterId" element={<ProtectedRoute><StoryPage /></ProtectedRoute>} />
        </Routes>
    );
};

const App = () => {
    return (
        <UserProvider>
            <TutorialProvider> 
                <Router>
                    <AppRoutes />
                </Router>
            </TutorialProvider>
        </UserProvider>
    );
};

export default App;