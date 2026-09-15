// src/uicomponents/GrimoireCard.jsx
import React from "react";
import "./uicomponents.css";

const GrimoireCard = ({
    entryNumber = "0001",
    observation = "Companies use the trusting nature of users to further their own agenda.",
    loreNumber = "0001",
    loreNote = "A new report has come to guild through an anonymous means.",
    onOpenGrimoire  // ← NEW: Function to open the modal
}) => {
    return (
        <div className='grimoire-card'>
            <span className='grimoire-eyebrow'>Personal Archive</span>
            <h3 className='grimoire-title'>Grimoire</h3>
            
            <div className='grimoire-entry'>
                <h4 className='grimoire-title-inside'>Entry #{entryNumber}</h4>
                <p className='grimoire-paragraph'>{observation}</p>
            </div>
            
            <div className='grimoire-lore-log'>
                <h4 className='grimoire-title-inside'>Log #{loreNumber}</h4>
                <p className='grimoire-paragraph'>{loreNote}</p>
            </div>
            
            <button 
                className='grimoire-link'
                onClick={onOpenGrimoire}
            >
                Open the Archive
            </button>
        </div>
    );
};

export default GrimoireCard;