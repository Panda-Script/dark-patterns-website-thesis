// src/uicomponents/ModuleAccordion.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './uicomponents.css';

const ModuleAccordion = ({ module }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const getStatusText = (status) => {
        switch(status) {
            case 'completed': return 'Completed';
            case 'in-progress': return 'In Progress';
            case 'locked': return 'Locked';
            default: return 'Not Started';
        }
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'completed': return 'var(--success-bright)';
            case 'in-progress': return 'var(--warning)';
            case 'locked': return 'var(--text-muted)';
            default: return 'var(--purple-bright)';
        }
    };

    const getStatusDot = (status) => {
        const color = getStatusColor(status);
        return <span className="status-dot" style={{ background: color }}></span>;
    };

    // Check if module is locked (for clickable logic)
    const isModuleLocked = module.status === 'locked';

    const displayProgress = Math.min(Math.round(module.progress || 0), 100);

    return (
        <div className={`module-accordion ${module.status}`}>
            <div className="accordion-header" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="accordion-left">
                    <span className="accordion-icon">
                        {isExpanded ? '▾' : '▸'}
                    </span>
                    <div className="accordion-info">
                        <h3>Module {module.id}: {module.title}</h3>
                        <p className="module-description">{module.description}</p>
                    </div>
                </div>
                <div className="accordion-right">
                    <span className="module-progress-text">
                        {displayProgress}% complete
                    </span>
                    <span className={`module-status ${module.status}`}>
                        {getStatusDot(module.status)}
                        {getStatusText(module.status)}
                    </span>
                </div>
            </div>

            {isExpanded && (
                <div className="accordion-body">
                    <div className="progress-bar-container">
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${displayProgress}%` }}></div>
                        </div>
                    </div>
                    
                    <div className="lessons-list">
                        {module.lessons.map((lesson) => (
                            <Link 
                                key={lesson.id}
                                to={isModuleLocked ? '#' : `/lesson/${module.id}/${lesson.id}`}
                                className={`lesson-item ${lesson.status} ${isModuleLocked ? 'locked' : ''}`}
                                onClick={(e) => {
                                    if (isModuleLocked) {
                                        e.preventDefault();
                                    }
                                }}
                            >
                                <span className="lesson-status-dot">
                                    {getStatusDot(lesson.status)}
                                </span>
                                <span className="lesson-title">{lesson.title}</span>
                                <span className="lesson-status-text" style={{ color: getStatusColor(lesson.status) }}>
                                    {getStatusText(lesson.status)}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModuleAccordion;