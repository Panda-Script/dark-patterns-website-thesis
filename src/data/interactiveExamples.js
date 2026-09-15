// src/data/interactiveExamples.js
import React from "react";

export const interactiveExamples = {
    // ========================================
    // MODULE 1: Introduction to Dark Patterns
    // ========================================
    '1-1': {
        type: 'comparison',
        props: {
            instruction: 'Which design is the dark pattern? Click on the version you think is deceptive.',
            goodComponent: (
                <div>
                    <p className="version-demo">Choose your preference:</p>
                    <div className="demo-options">
                        <button className="demo-btn primary">Subscribe to Newsletter</button>
                        <button className="demo-btn secondary">View Sample Content</button>
                        <button className="demo-btn secondary">Learn More</button>
                    </div>
                    <p className="demo-note">All options are clearly visible and equally sized.</p>
                </div>
            ),
            badComponent: (
                <div>
                    <p className="version-demo">Get started now!</p>
                    <div className="demo-options">
                        <button className="demo-btn primary-bad">Continue →</button>
                        <button className="demo-btn hidden">No thanks</button>
                    </div>
                    <p className="demo-note-bad">The "No thanks" option is tiny and easy to miss.</p>
                </div>
            ),
            correctAnswer: 'bad',
            explanation: "Version B is the dark pattern because it uses a vague CTA ('Continue') and hides the opt-out option. Version A gives you clear, visible choices."
        }
    },

    // ========================================
    // MODULE 2: Visual Manipulation
    // ========================================
    '2-1': {
        type: 'comparison',
        props: {
            instruction: 'Which CTA button is using a dark pattern? Click on the version you think is deceptive.',
            goodComponent: (
                <div>
                    <p className="version-demo">Clear, honest CTA:</p>
                    <div className="demo-options">
                        <button className="demo-btn primary">Download the Free Report</button>
                        <button className="demo-btn secondary">View Sample</button>
                        <button className="demo-btn secondary">Learn More</button>
                    </div>
                    <p className="demo-note">✅ Clear labels, all options visible</p>
                </div>
            ),
            badComponent: (
                <div>
                    <p className="version-demo">Vague, deceptive CTA:</p>
                    <div className="demo-options">
                        <button className="demo-btn primary-bad">Continue →</button>
                        <button className="demo-btn hidden">No thanks</button>
                    </div>
                    <p className="demo-note-bad">❌ Vague label, opt-out hidden</p>
                </div>
            ),
            correctAnswer: 'bad',
            explanation: "Version B uses a dark pattern with vague language ('Continue') and a hidden opt-out option."
        }
    },

    '2-2': {
        type: 'comparison',
        props: {
            instruction: 'Which version uses color to manipulate your decision? Click on the one you think is deceptive.',
            goodComponent: (
                <div>
                    <p className="version-demo">Select your preference:</p>
                    <div className="demo-options">
                        <button className="demo-btn" style={{ background: '#5865f2', color: '#fff' }}>Subscribe</button>
                        <button className="demo-btn" style={{ background: '#57f287', color: '#fff' }}>View Sample</button>
                        <button className="demo-btn" style={{ background: '#ed4245', color: '#fff' }}>Decline</button>
                    </div>
                    <p className="demo-note">All options equally visible with consistent styling.</p>
                </div>
            ),
            badComponent: (
                <div>
                    <p className="version-demo">Select your preference:</p>
                    <div className="demo-options">
                        <button className="demo-btn" style={{ background: '#57f287', color: '#fff', fontSize: '1.2rem', padding: '12px 24px' }}>
                            Accept All
                        </button>
                        <button className="demo-btn" style={{ background: '#ed4245', color: '#fff', opacity: '0.4', fontSize: '0.8rem' }}>
                            Decline
                        </button>
                    </div>
                    <p className="demo-note-bad">Only 'Accept All' is prominently displayed and colored green.</p>
                </div>
            ),
            correctAnswer: 'bad',
            explanation: "Version B uses color to manipulate your decision by making 'Accept All' prominent and green while 'Decline' is dull and small."
        }
    },

    '2-3': {
        type: 'comparison',
        props: {
            instruction: 'Which image is a dark pattern? Click on the version you think is deceptive.',
            goodComponent: (
                <div>
                    <p className="version-demo">Clear consent form:</p>
                    <div className="demo-box">
                        <h4>Share Your Data?</h4>
                        <p className="price-detail">We will use your data to improve our service.</p>
                        <p className="price-detail">You can opt out at any time.</p>
                        <button className="demo-btn primary">Agree</button>
                        <button className="demo-btn secondary">Decline</button>
                    </div>
                    <p className="demo-note">Clear, informative text with equal options.</p>
                </div>
            ),
            badComponent: (
                <div>
                    <p className="version-demo">Friendly mascot consent form:</p>
                    <div className="demo-box">
                        <div style={{ fontSize: '3rem', textAlign: 'center' }}>🐱</div>
                        <h4>Help us make things better!</h4>
                        <p className="price-detail">Your data helps us improve!</p>
                        <button className="demo-btn primary-bad">Sure! Share my data</button>
                        <button className="demo-btn hidden">No thanks</button>
                    </div>
                    <p className="demo-note-bad">Friendly mascot distracts from data sharing.</p>
                </div>
            ),
            correctAnswer: 'bad',
            explanation: "Version B uses a friendly mascot to pacify you into sharing data. The cute cat distracts from the serious decision of sharing your data."
        }
    },

    // ========================================
    // MODULE 3: Information Manipulation
    // ========================================
    '3-1': {
        type: 'sort',
        props: {
            instruction: 'Drag each characteristic to the correct category: Real Testimonial or Fake Testimonial.',
            items: [
                { text: 'Includes real name and photo', category: 'real' },
                { text: 'Anonymous user', category: 'fake' },
                { text: 'Specific details about the experience', category: 'real' },
                { text: 'Vague praise ("Best ever!")', category: 'fake' },
                { text: 'Includes date of experience', category: 'real' },
                { text: 'Inflated numbers without sourcing', category: 'fake' },
                { text: 'Balanced positive and negative feedback', category: 'real' },
                { text: 'Only 5-star reviews', category: 'fake' }
            ],
            correctFeedback: "Perfect! You correctly identified real vs fake testimonials.",
            incorrectFeedback: "Not quite. Real testimonials have names, dates, and specific details. Fake ones are vague and anonymous."
        }
    },

    '3-2': {
        type: 'comparison',
        props: {
            instruction: 'Which typography is a dark pattern? Click on the version you think is deceptive.',
            goodComponent: (
                <div>
                    <p className="version-demo">Clear terms:</p>
                    <div className="demo-box">
                        <h4>Subscription Terms</h4>
                        <p className="price" style={{ fontSize: '1rem' }}>You will be charged $9.99/month after a 7-day free trial.</p>
                        <p className="price-detail" style={{ fontSize: '0.9rem' }}>Cancel anytime in settings.</p>
                    </div>
                    <p className="demo-note">Important terms are clear and readable.</p>
                </div>
            ),
            badComponent: (
                <div>
                    <p className="version-demo">Hidden terms:</p>
                    <div className="demo-box">
                        <h4 style={{ fontSize: '1.5rem', color: '#57f287' }}>🎉 PLAY FREE FOREVER!</h4>
                        <p className="price-detail" style={{ fontSize: '0.5rem', color: '#666' }}>
                            Subscription auto-renews at $9.99/month after 7-day trial.
                        </p>
                    </div>
                    <p className="demo-note-bad">Important terms are hidden in tiny text.</p>
                </div>
            ),
            correctAnswer: 'bad',
            explanation: "Version B hides the subscription terms in tiny text, while making 'PLAY FREE FOREVER' big and bold. You'll see the big text but miss the important details."
        }
    },

    '3-3': {
        type: 'comparison',
        props: {
            instruction: 'Which layout is a dark pattern? Click on the version you think is deceptive.',
            goodComponent: (
                <div>
                    <p className="version-demo">Clear choices:</p>
                    <div className="demo-box">
                        <h4>Account Settings</h4>
                        <button className="demo-btn primary">Upgrade to Premium</button>
                        <button className="demo-btn secondary">Keep Free Version</button>
                        <button className="demo-btn secondary">Cancel Account</button>
                    </div>
                    <p className="demo-note">All options are equally visible.</p>
                </div>
            ),
            badComponent: (
                <div>
                    <p className="version-demo">Buried alternatives:</p>
                    <div className="demo-box">
                        <h4>Account Settings</h4>
                        <button className="demo-btn primary-bad" style={{ padding: '16px', fontSize: '1.2rem' }}>
                            ⭐ Upgrade to Premium
                        </button>
                        <button className="demo-btn hidden" style={{ fontSize: '0.6rem', marginTop: '8px' }}>
                            keep free version
                        </button>
                        <button className="demo-btn hidden" style={{ fontSize: '0.6rem', marginTop: '4px', opacity: '0.5' }}>
                            cancel
                        </button>
                    </div>
                    <p className="demo-note-bad">The upgrade option is huge; alternatives are tiny and hidden.</p>
                </div>
            ),
            correctAnswer: 'bad',
            explanation: "Version B buries the alternatives in tiny text while making the upgrade button huge. This forces you toward one choice."
        }
    },

    // ========================================
    // MODULE 4: Interaction Manipulation
    // ========================================
    '4-1': {
        type: 'timer',
        props: {
            instruction: 'Watch this countdown timer. When it reaches 0, see what happens.',
            duration: 10,
            explanation: "Fake urgency timers create artificial pressure. If the timer resets when you refresh, it's a dark pattern."
        }
    },

    '4-2': {
        type: 'checkbox',
        props: {
            instruction: 'Review this sign-up form. Which checkboxes are dark patterns? Click on each one to check.',
            options: [
                {
                    id: 'newsletter',
                    label: 'Yes! Send me marketing emails and partner offers',
                    isDarkPattern: true,
                    explanation: 'This is pre-checked, making it a deceptive default. You should have to actively opt-in.'
                },
                {
                    id: 'data-sharing',
                    label: 'Share my data with third-party advertisers',
                    isDarkPattern: true,
                    explanation: 'This is also pre-checked. A transparent design would leave this unchecked.'
                },
                {
                    id: 'terms',
                    label: 'I agree to the Terms of Service',
                    isDarkPattern: false,
                    explanation: 'This is standard and necessary. It\'s not a dark pattern.'
                },
                {
                    id: 'updates',
                    label: 'Send me product updates (optional)',
                    isDarkPattern: false,
                    explanation: 'This is unchecked by default, which is ethical. You have to actively choose to subscribe.'
                }
            ],
            correctFeedback: "You found the dark patterns! Both 'marketing emails' and 'data sharing' are pre-checked, which is deceptive.",
            incorrectFeedback: "Not quite. Look for pre-checked boxes that you didn't choose yourself."
        }
    },

    '4-3': {
        type: 'checkbox',
        props: {
            instruction: 'Review this cookie consent banner. Which elements are dark patterns?',
            options: [
                {
                    id: 'accept-all',
                    label: 'Big bright "Accept All Cookies" button',
                    isDarkPattern: true,
                    explanation: 'Making one option dominant is a dark pattern.'
                },
                {
                    id: 'manage-settings',
                    label: 'Tiny gray "Manage Settings" link in the corner',
                    isDarkPattern: true,
                    explanation: 'The alternative should be equally visible, not hidden.'
                },
                {
                    id: 'equal-options',
                    label: 'Accept and Reject buttons of equal size',
                    isDarkPattern: false,
                    explanation: 'Equal prominence of options is ethical.'
                },
                {
                    id: 'clear-summary',
                    label: 'Clear summary of what cookies do',
                    isDarkPattern: false,
                    explanation: 'Clear summaries are ethical and help users make informed decisions.'
                }
            ],
            correctFeedback: "You found the dark patterns! Bright 'Accept All' and hidden 'Manage Settings' are both dark patterns.",
            incorrectFeedback: "Not quite. Look for unequal prominence between options."
        }
    },

    // ========================================
    // MODULE 5: Trust & Authority
    // ========================================
    '5-1': {
        type: 'comparison',
        props: {
            instruction: 'Which trust badge is a dark pattern? Click on the version you think is deceptive.',
            goodComponent: (
                <div>
                    <p className="version-demo">Verifiable trust badge:</p>
                    <div className="demo-box">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '2rem' }}>🔒</span>
                            <div>
                                <h4>SSL Secure</h4>
                                <p className="price-detail">256-bit encryption verified by DigiCert</p>
                                <a href="#" className="demo-note">View certificate →</a>
                            </div>
                        </div>
                    </div>
                    <p className="demo-note">Links to verification.</p>
                </div>
            ),
            badComponent: (
                <div>
                    <p className="version-demo">Decorative trust badge:</p>
                    <div className="demo-box" style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '3rem' }}>🛡️</span>
                        <h4>100% SECURE</h4>
                        <p className="price-detail">Trusted by millions</p>
                    </div>
                    <p className="demo-note-bad">No link, no verification, just decoration.</p>
                </div>
            ),
            correctAnswer: 'bad',
            explanation: "Version B is just a decorative shield with no verifiable certification. Version A links to a real certificate you can check."
        }
    },

    // ========================================
    // MODULE 6: Final Assessment
    // ========================================
    '6-1': {
        type: 'review',
        props: {
            instruction: 'Analyze these reviews. Click on the ones you think are fake.',
            reviews: [
                { id: 1, text: '"This product changed my life! 10/10 would recommend!"', author: 'Anonymous User', rating: 5, isFake: true, reason: 'Vague, anonymous praise with no specific details.' },
                { id: 2, text: '"Works well for my needs. The battery lasts about 8 hours."', author: 'Sarah Johnson', rating: 4, isFake: false, reason: 'Specific details, real name, balanced rating.' },
                { id: 3, text: '"Best product ever!!!"', author: 'Reviewer_123', rating: 5, isFake: true, reason: 'Generic username, vague praise with multiple exclamation marks.' },
                { id: 4, text: '"Good value for the price. The build quality is solid."', author: 'Michael Chen', rating: 4.5, isFake: false, reason: 'Specific details about build quality, real name.' },
                { id: 5, text: '"Amazing! Everyone should buy this! Totally changed my life!"', author: 'User2024', rating: 5, isFake: true, reason: 'Overly enthusiastic, generic username, no specific details.' }
            ],
            correctFeedback: "Great job! Fake reviews are vague, anonymous, and overly enthusiastic.",
            incorrectFeedback: "Look for reviews without real names, specific details, or balanced feedback."
        }
    }
};