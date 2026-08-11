import React from 'react';
import './uicomponents.css';

const ModuleCard = ({ 
    title,
    description,
    moduleNumber,
    status = 'locked', // default status is 'locked'
    onClick = null, // default onClick is null
    lessonsCompleted = 0, // default lessons completed is 0
    totalLessons = 0 // default total lessons is 0

}) => {

    //status info
    const getStatusInfo = () => {
        switch(status) {
            case 'completed':
                return {label: 'Completed', color: '#57f287'};
            case 'in-progress':
                return {label: 'In Progress', color: '#faa81a'};
            case 'locked':
            default:
                return {label: 'Locked', color: 'gray'};

        }
    };

    const statusInfo = getStatusInfo();
    const isLocked = status === 'locked';

    return (
        <div
        className={`module-card ${status}' ${onClick ? 'clickable' : ''}`}
        onClick={onClick}
        style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            <div className="module-card-header">
                <span className="module-card-number">
                    Module {moduleNumber}</span>
                <span className="module-card-status" 
                style={{ background: status=== 'locked' ? 'gray' 
                : `${statusInfo.color}20`,
                color: statusInfo.color
                 }}> {statusInfo.label}</span>
                 </div>

            <h3 className="module-card-title">{title}</h3>
            <p className="module-card-description">{description}</p>

            {/*locked message*/}

            {isLocked && (
                <div className="module-card-locked-message">
                    <p>This module is locked. Complete previous modules to unlock.</p>
                </div>
                )}

        </div>
        
    
    
    );


};

export default ModuleCard;