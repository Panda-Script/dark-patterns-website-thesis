// src/uicomponents/GrimoireLogs.jsx
import React from "react";
import './grimoire.css';

const GrimoireArchive = () => {
    // This would come from userData or a separate logs store
    const logs = [
        {
            id: 1,
            type: 'session',
            date: '2026-08-15',
            title: 'First Lesson Completed',
            content: 'Completed "What Are Dark Patterns?" - Learned to identify deceptive defaults.'
        },
        {
            id: 2,
            type: 'encounter',
            date: '2026-08-15',
            title: 'Encountered Shadow Corp Agent',
            content: 'Agent tried to trick you with a pre-checked checkbox. You spotted it!'
        },
        {
            id: 3,
            type: 'reflection',
            date: '2026-08-14',
            title: 'Reflection: Dark Patterns in the Wild',
            content: 'Noticed 3 dark patterns while shopping online today...'
        }
    ];

    return (
        <div className="grimoire-logs">
            <div className="logs-header">
                <h3>Session Logs</h3>
                <span className="log-count">{logs.length} entries</span>
            </div>
            
            <div className="logs-list">
                {logs.map((log) => (
                    <div key={log.id} className={`log-entry ${log.type}`}>
                        <div className="log-date">{log.date}</div>
                        <div className="log-title">{log.title}</div>
                        <div className="log-content">{log.content}</div>
                        <div className="log-type">{log.type}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GrimoireArchive;