import React from 'react';
import './uicomponents.css';

const ModuleCard = ({
    title,
    description,
    moduleNumber,
    status = 'locked',
    onClick = null,
    lessonsCompleted = 0,
    totalLessons = 0
}) => {

    const getStatusInfo = () => {
        switch (status) {
            case 'completed':
                return {
                    label: 'Mission Resolved',
                    color: '#22C55E'
                };

            case 'in-progress':
                return {
                    label: 'In Progress',
                    color: '#F59E0B'
                };

            case 'open':
                return {
                    label: 'Available',
                    color: '#8B5CF6'
                };

            case 'locked':
            default:
                return {
                    label: 'Classified',
                    color: '#64748B'
                };
        }
    };

    const statusInfo = getStatusInfo();
    const isLocked = status === 'locked';

    const handleClick = () => {
        if (!isLocked && onClick) {
            onClick();
        }
    };

    return (
        <div
            className={`module-card ${status} ${onClick ? 'clickable' : ''}`}
            onClick={handleClick}
            style={{
                cursor: !isLocked && onClick ? 'pointer' : 'default'
            }}
        >

            {/* Mission Header */}
            <div className="module-card-header">

                <span className="module-card-number">
                    Mission {moduleNumber}
                </span>

                <span
                    className="module-card-status"
                    style={{
                        color: statusInfo.color
                    }}
                >
                    {statusInfo.label}
                </span>

            </div>


            {/* Mission Title */}
            <h3 className="module-card-title">
                {title}
            </h3>


            {/* Mission Description */}
            <p className="module-card-description">
                {description}
            </p>


            {/* Progress */}
            {totalLessons > 0 && !isLocked && (
                <div className="module-card-progress">

                    <div className="module-card-progress-info">

                        <span>
                            {lessonsCompleted} / {totalLessons} Briefings
                        </span>

                        <span>
                            {Math.round(
                                (lessonsCompleted / totalLessons) * 100
                            )}%
                        </span>

                    </div>

                    <div className="module-card-progress-bar">

                        <div
                            className="module-card-progress-fill"
                            style={{
                                width: `${Math.min(
                                    (lessonsCompleted / totalLessons) * 100,
                                    100
                                )}%`
                            }}
                        />

                    </div>

                </div>
            )}


            {/* Locked / Classified Message */}
            {isLocked && (
                <div className="module-card-locked-message">

                    <span className="lock-icon">
                        ◆
                    </span>

                    <p>
                        This mission is classified.
                        Complete previous missions to gain access.
                    </p>

                </div>
            )}


            {/* Completed Message */}
            {status === 'completed' && (
                <div className="module-card-completed-message">

                    <span>
                        ✓
                    </span>

                    Mission resolved · Intelligence acquired

                </div>
            )}

        </div>
    );
};

export default ModuleCard;