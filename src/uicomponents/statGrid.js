//stat grid.
//shows the lessons completion rate, badges earned, and overall progress in a grid layout
import React from "react";
import '../uicomponents/uicomponents.css';

const StatGrid = ({userData}) => {

    //default user data if not provided
    const {
        lessonsDone = 0,
        badges = 0,
        totalXP = 0,
        modulesDone = 0
    } = userData;

    const stats = [ //is gonna be an array
        //lessons
        { label: 'Lessons Completed', 
            value: lessonsDone, 
            color: '#5865f2' },
        //badges
        { label: 'Badges Earned', 
            value: badges,
            color: '#faa81a'},
        //overall xp
        { label: 'Total XP', 
            value: totalXP,
            color: '#eb459e' },
        //modules
        { label: 'Modules Completed', 
            value: modulesDone,
            color: '#57f287' }
    ];

    return (
        <div className="stat-grid">
            {stats.map((stat, index) => (

                <div key={index}
                className="stat-grid-item"
                style={{ '--stat-color': stat.color }}
                >

                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
                </div>


            ))}
        </div>
    );
};

export default StatGrid;