// src/data/lessonsData.js

export const lessonsData = {
    modules: [
        // ========================================
        // MODULE 1: Introduction to Dark Patterns
        // ========================================
        {
            id: 1,
            title: "Introduction to Dark Patterns",
            description: "Learn what dark patterns are, why they matter, and how to defeat them.",
            interactiveExample: 'comparison',
            lessons: [
                {
                    id: 1,
                    title: "What Are Dark Patterns?",
                    topic: "Introduction",
                    duration: 10,
                    interactiveExample: 'comparison',
                    
                    concept: `
                        <h3>What Are Dark Patterns?</h3>
                        <p>Dark patterns are website designs that try to trick and deceive users. They use the way we think and recognize against us. Think of them like a magician's misdirection — while you're looking at one hand, the other hand is doing something you didn't expect.</p>
                        
                        <h4>Why Do They Matter To You?</h4>
                        <p>Being able to understand what a dark pattern is and how to navigate it is the very first step to defending yourself online. These designs are everywhere — social media, online games, even shopping websites. They cost users a lot of money, time, and effort every year.</p>
                        <p>Here's a real example: You know that feeling when you're stuck in an endless loop of one game while your friends have already moved on to newer games? That's not an accident. Game companies design their interfaces to keep you playing as long as possible — even when you're not having fun anymore. That's a dark pattern.</p>
                        
                        <h4>The Psychology Behind Dark Patterns</h4>
                        <p>Dark patterns deliberately play on how we perceive and interact with the world, especially the online world. We are wired to:</p>
                        <ul>
                            <li><strong>Take the path of least resistance</strong> — We accept any defaults without question. If a box is already checked, we leave it checked.</li>
                            <li><strong>Follow the crowd</strong> — We trust what others in our space tell and show us. If everyone's playing a game, we want to play too.</li>
                            <li><strong>Avoid loss</strong> — FOMO (the fear of missing out) hits hard. We'll do things to avoid losing out even when we lose more than we gain.</li>
                            <li><strong>Act quickly under pressure</strong> — When we feel rushed, we make worse decisions. Dark patterns exploit this with countdown timers and "limited time" offers.</li>
                        </ul>
                        <p>The creators of these patterns know this. They have research and strategies that bank on us doing these things. So the only way to defeat them is to learn those strategies and how to bypass them.</p>
                        
                        <h4>The Ten Categories</h4>
                        <p>Throughout this course, you'll learn about ten categories of dark patterns:</p>
                        <ol>
                            <li><strong>Call-to-Action (CTA) Buttons</strong> — Vague labels that hide consequences</li>
                            <li><strong>Color Use</strong> — Emotional colors that steer decisions</li>
                            <li><strong>Testimonials & Social Proof</strong> — Fake reviews and inflated numbers</li>
                            <li><strong>Imagery & Illustration</strong> — Friendly visuals that distract from risk</li>
                            <li><strong>Layout & White Space</strong> — Buried alternatives and dominant paths</li>
                            <li><strong>Motion & Animation</strong> — Distracting motion during consent</li>
                            <li><strong>Typography & Language</strong> — Hidden legal terms in small text</li>
                            <li><strong>Defaults & Toggles</strong> — Pre-checked boxes that assume consent</li>
                            <li><strong>Trust Badges & Symbols</strong> — Decorative trust signals without accountability</li>
                            <li><strong>Consent Flows</strong> — Manufactured consent with one dominant choice</li>
                        </ol>
                    `,
                    
                    goodExample: {
                        title: "Transparent Design",
                        description: "Clear, honest choices that respect user autonomy.",
                        details: [
                            'All options equally visible and sized',
                            'Simple, clear language describing outcomes',
                            'User makes informed choices without pressure',
                            'Defaults are neutral and unbiased'
                        ]
                    },
                    
                    badExample: {
                        title: "Dark Pattern Design",
                        description: "Deceptive design that manipulates user choice.",
                        details: [
                            'One option highlighted, others hidden',
                            'Vague or misleading language',
                            'User is nudged toward a specific choice',
                            'Defaults benefit the company, not the user'
                        ]
                    },
                    
                    keyTest: "Does this design respect your ability to make an informed choice, or does it manipulate you toward a choice you wouldn't otherwise make?",
                    
                    howToSpot: [
                        'Look for pre-selected options you didn\'t choose',
                        'Check if the "no" or "decline" option is hard to find',
                        'Notice if you feel rushed or pressured to decide',
                        'Ask: "Would this be designed this way if it was truly fair?"'
                    ],
                    
                    summary: "Dark patterns are manipulative designs that benefit companies at users' expense. They exploit how our brains naturally work. Learning to spot them is the first step to protecting yourself.",
                    
                    quiz: {
                        questions: [
                            {
                                question: "What is a dark pattern?",
                                options: [
                                    "A design that looks dark in color",
                                    "A deceptive design practice that tricks users",
                                    "A pattern used in dark mode",
                                    "A type of malware that steals data"
                                ],
                                correct_answer: 1,
                                explanation: "Dark patterns are deceptive design practices that trick users into doing things they didn't intend to do."
                            },
                            {
                                question: "Why do dark patterns work?",
                                options: [
                                    "Because users are not paying attention",
                                    "Because they exploit how our brains naturally work",
                                    "Because users are uneducated",
                                    "Because websites are poorly designed"
                                ],
                                correct_answer: 1,
                                explanation: "Dark patterns exploit cognitive biases like our tendency to take the path of least resistance, follow the crowd, and avoid loss."
                            },
                            {
                                question: "Which of the following is an example of a dark pattern?",
                                options: [
                                    "A clear and honest checkout process",
                                    "A pre-checked checkbox for marketing emails",
                                    "A website that loads quickly",
                                    "A simple navigation menu"
                                ],
                                correct_answer: 1,
                                explanation: "Pre-checked checkboxes are a classic example of a dark pattern called 'deceptive defaults.'"
                            },
                            {
                                question: "What is the most important question to ask when evaluating a design?",
                                options: [
                                    '"Does this look nice?"',
                                    '"Does this respect my ability to make an informed choice?"',
                                    '"Is this popular?"',
                                    '"Is this from a big company?"'
                                ],
                                correct_answer: 1,
                                explanation: "The most important question is whether the design respects your ability to make an informed choice."
                            },
                            {
                                question: "Why should you learn about dark patterns?",
                                options: [
                                    "To become a designer",
                                    "To protect yourself online",
                                    "To teach others",
                                    "To understand computer programming"
                                ],
                                correct_answer: 1,
                                explanation: "Learning about dark patterns is the first step to protecting yourself online from manipulative designs."
                            }
                        ]
                    }
                }
            ]
        },

        // ========================================
        // MODULE 2: Visual Manipulation
        // ========================================
        {
            id: 2,
            title: "Visual Manipulation",
            description: "Discover how visual elements manipulate your choices.",
            interactiveExample: 'comparison',
            lessons: [
                // ----------------------------------------
                // LESSON 2-1: Call-to-Action (CTA) Buttons
                // ----------------------------------------
                {
                    id: 1,
                    title: "Call-to-Action (CTA) Buttons",
                    topic: "Visual Manipulation",
                    duration: 8,
                    interactiveExample: 'comparison',
                    
                    concept: `
                        <h3>What Are CTA Buttons?</h3>
                        <p>Call-to-Action buttons are made to grab your attention and tell you what will happen when you click them — usually subscribing to text messages or adding an item to a cart. They have a few distinct tactics:</p>
                        
                        <ul>
                            <li><strong>Concise language</strong> — As few words as possible. "CLICK ME TO LEVEL UP" hits harder than "Click here to advance to the next level of the game."</li>
                            <li><strong>Eye-catching designs</strong> — Brand colors that stick out or catch the eye. Maybe it's a cool shape. Anything that draws attention to it.</li>
                            <li><strong>Placement</strong> — Placement is the most important part of catching attention. If it's right at the top, you might only glance at it. At the bottom, it might not even get seen.</li>
                            <li><strong>Hidden opt-out</strong> — A tiny link that is almost invisible. "No thanks" in 8-point gray text.</li>
                        </ul>
                        
                        <h4>Real-World Example</h4>
                        <p>There are tons of different ways to do a call to action. I even use them on this website! Everything on the dashboard is designed to catch your attention and keep it — especially the part where it says "Continue the lesson."</p>
                        <p>They work using a mindset that people will click the big bright button instead of the small dull one next to it. This is an example of taking the path of least resistance.</p>
                        
                        <h4>The Dark Pattern Version</h4>
                        <p>Imagine you're signing up for a free gaming account. You see:</p>
                        <ul>
                            <li>A giant purple button that says "START PLAYING NOW!"</li>
                            <li>Underneath, tiny gray text that says "no thanks, I'll stay on the free version"</li>
                        </ul>
                        <p>Most people click the big button without even seeing the small text. That's the dark pattern. The company knows you'll take the path of least resistance.</p>
                    `,
                    
                    goodExample: {
                        title: "Clear & Honest CTAs",
                        description: "The button tells you exactly what will happen.",
                        details: [
                            '"Download the Free Report" — clearly describes the action',
                            '"View Sample" — secondary option is equally visible',
                            '"Learn More" — option to get more information before deciding',
                            'All options are similar size and prominence'
                        ]
                    },
                    
                    badExample: {
                        title: "Vague & Deceptive CTAs",
                        description: "The button hides what you're actually agreeing to.",
                        details: [
                            '"Continue" — what are you continuing to?',
                            '"Get Started" — started with what?',
                            'Tiny "No thanks" link hidden in small text',
                            'Main button is 10x larger than the alternative'
                        ]
                    },
                    
                    keyTest: "Does this button describe the consequence or obscure it?",
                    
                    howToSpot: [
                        'Check if the button text is vague ("Continue", "Next", "Proceed")',
                        'Look for tiny "No thanks" or "Skip" links hidden nearby',
                        'Compare the size of the accept and decline options',
                        'Ask yourself: "Do I actually know what I\'m agreeing to?"'
                    ],
                    
                    summary: "A good CTA button tells you what happens next. A dark pattern hides the consequence behind vague language and makes the opt-out nearly invisible.",
                    
                    quiz: {
                        questions: [
                            {
                                question: "What makes a CTA button a dark pattern?",
                                options: [
                                    "It's large and colorful",
                                    "It uses vague language that hides the consequence",
                                    "It's placed at the bottom of the page",
                                    "It uses a standard font"
                                ],
                                correct_answer: 1,
                                explanation: "A CTA button becomes a dark pattern when it uses vague language like 'Continue' or 'Get Started' to hide what you're actually agreeing to."
                            },
                            {
                                question: "Which of these is an example of a transparent CTA?",
                                options: [
                                    '"Continue"',
                                    '"Get Started"',
                                    '"Download the Free Report"',
                                    '"Proceed"'
                                ],
                                correct_answer: 2,
                                explanation: '"Download the Free Report" clearly describes what will happen when you click the button.'
                            },
                            {
                                question: "What should you look for to spot a deceptive CTA?",
                                options: [
                                    "A clear description of the action",
                                    "A tiny 'No thanks' link hidden nearby",
                                    "Multiple options of equal size",
                                    "A progress indicator"
                                ],
                                correct_answer: 1,
                                explanation: "Deceptive CTAs often hide the opt-out option in a tiny, easy-to-miss link while making the main button large and prominent."
                            },
                            {
                                question: "Why do deceptive CTA buttons work?",
                                options: [
                                    "Because users don't read them",
                                    "Because they exploit our tendency to click the biggest button",
                                    "Because they're poorly designed",
                                    "Because users are in a hurry"
                                ],
                                correct_answer: 1,
                                explanation: "Deceptive CTAs work by exploiting our natural tendency to take the path of least resistance and click the most prominent button."
                            },
                            {
                                question: "What is the key question to ask about a CTA button?",
                                options: [
                                    '"Is this button pretty?"',
                                    '"Does this button describe the consequence or obscure it?"',
                                    '"Is this button from a big company?"',
                                    '"Does this button match the brand?"'
                                ],
                                correct_answer: 1,
                                explanation: "The key question is whether the button describes the consequence or obscures it."
                            }
                        ]
                    }
                },

                // ----------------------------------------
                // LESSON 2-2: Color Use
                // ----------------------------------------
                {
                    id: 2,
                    title: "Color Use",
                    topic: "Visual Manipulation",
                    duration: 7,
                    interactiveExample: 'comparison',
                    
                    concept: `
                        <h3>How Color Communicates</h3>
                        <p>Color has so many different ways it can be used. In life, we often instinctively associate colors with certain things. Green — money. Red — stop or wrong. Color communicates without needing words.</p>
                        
                        <p>Colors carry inherent meanings:</p>
                        <ul>
                            <li><strong>Red</strong> — Danger, urgency, stop</li>
                            <li><strong>Green</strong> — Safety, success, go</li>
                            <li><strong>Blue</strong> — Trust, calm, information</li>
                            <li><strong>Yellow</strong> — Warning, attention</li>
                            <li><strong>Gray</strong> — Disabled, unimportant, inactive</li>
                        </ul>
                        
                        <h4>Real-World Example</h4>
                        <p>Think about a traffic light. You don't need to read "STOP" — you see red and you know. The same thing happens online. When you see a green button, your brain says "go" before you even read the text.</p>
                        <p>Now imagine a game store. They want you to buy the premium version. They make the "Buy Premium" button bright green and the "Keep Playing Free" button dull gray. Your brain sees green and thinks "good" before you've even read it.</p>
                        
                        <h4>The Dark Pattern Version</h4>
                        <p>The most common way dark patterns use color is by making the choice they want you to make green, while the one you will want to make is red or gray. Color is used to manipulate our emotional response to make decisions for us.</p>
                        <p>Here's what it looks like:</p>
                        <ul>
                            <li>A bright green button: "YES! Upgrade my account!"</li>
                            <li>A gray, dull button: "No, I like the free version"</li>
                        </ul>
                        <p>Your brain is already reaching for green before you even think about it.</p>
                    `,
                    
                    goodExample: {
                        title: "Functional Color Use",
                        description: "Color used to organize information clearly.",
                        details: [
                            'Colors are consistent with their meanings',
                            'All options are equally visible and prominent',
                            'Color groups related information',
                            'No emotional manipulation in the palette'
                        ]
                    },
                    
                    badExample: {
                        title: "Emotional Color Use",
                        description: "Color used to push you toward one choice.",
                        details: [
                            'Only the "preferred" choice is highlighted in bright green',
                            'Red/green used to manipulate urgency',
                            'The decline option is grayed out like it\'s disabled',
                            'High contrast only on the wanted option'
                        ]
                    },
                    
                    keyTest: "Does color clarify meaning or manipulate urgency?",
                    
                    howToSpot: [
                        'Look for red or green used to push you toward a choice',
                        'Check if only one option is highly visible',
                        'Notice if the decline option is grayed out',
                        'Ask: "Would this still make sense in black and white?"'
                    ],
                    
                    summary: "Color should help you understand, not push you toward a decision you might not make otherwise. If color feels manipulative, it probably is.",
                    
                    quiz: {
                        questions: [
                            {
                                question: "How do dark patterns use color to manipulate users?",
                                options: [
                                    "They use random colors",
                                    "They highlight only the 'preferred' choice with high-contrast colors",
                                    "They use no colors at all",
                                    "They use only black and white"
                                ],
                                correct_answer: 1,
                                explanation: "Dark patterns use color to steer decisions by making the 'preferred' choice highly visible and the alternatives dull or hard to see."
                            },
                            {
                                question: "What is an ethical use of color in design?",
                                options: [
                                    "Using red to create urgency",
                                    "Using color to group related information",
                                    "Making only one option visible",
                                    "Using bright colors to distract"
                                ],
                                correct_answer: 1,
                                explanation: "Ethical design uses color to organize information and clarify meaning, not to manipulate decisions."
                            },
                            {
                                question: "What should you ask yourself to spot color manipulation?",
                                options: [
                                    '"Is this color my favorite?"',
                                    '"Would this still make sense in black and white?"',
                                    '"Is this color trendy?"',
                                    '"Does this match my brand?"'
                                ],
                                correct_answer: 1,
                                explanation: "If the design relies on color to push you toward a choice, it may be a dark pattern. Ask yourself if it would still make sense without color."
                            },
                            {
                                question: "Why does color manipulation work so well?",
                                options: [
                                    "Because users are colorblind",
                                    "Because color bypasses our rational mind and triggers emotional responses",
                                    "Because color is expensive",
                                    "Because users don't care about design"
                                ],
                                correct_answer: 1,
                                explanation: "Color bypasses our rational mind. We respond to red as danger and green as safety on a primal level."
                            },
                            {
                                question: "Which of these is a sign of color manipulation?",
                                options: [
                                    "All options are equally visible",
                                    "The decline option is grayed out like it's disabled",
                                    "Colors group related information",
                                    "The palette is consistent"
                                ],
                                correct_answer: 1,
                                explanation: "Making the decline option gray (disabled) is a common color manipulation tactic."
                            }
                        ]
                    }
                },

                // ----------------------------------------
                // LESSON 2-3: Imagery & Illustration
                // ----------------------------------------
                {
                    id: 3,
                    title: "Imagery & Illustration",
                    topic: "Visual Manipulation",
                    duration: 7,
                    interactiveExample: 'comparison',
                    
                    concept: `
                        <h3>The Power of Images</h3>
                        <p>Images communicate faster than text. They evoke emotions, build trust, and shape how we perceive information. Ethical design uses imagery to inform. Dark patterns use imagery to manipulate.</p>
                        
                        <h4>How Imagery Builds Trust</h4>
                        <p>Good imagery shows real people, real use cases, and real outcomes. When you see an image of an actual product being used, you trust it more than abstract illustrations. Think about a video game trailer — when you see actual gameplay footage, you trust it more than a cinematic cutscene.</p>
                        
                        <h4>The Dark Pattern Version</h4>
                        <p>Dark patterns use imagery to pacify users and distract from risk:</p>
                        <ul>
                            <li><strong>Friendly mascots</strong> — Cute characters next to data-collection forms</li>
                            <li><strong>Abstract illustrations</strong> — Pretty visuals that hide serious consequences</li>
                            <li><strong>Stock photos</strong> — Happy models representing something that isn't actually happy</li>
                            <li><strong>Distracting visuals</strong> — Images placed to draw attention away from important text</li>
                        </ul>
                        
                        <h4>Why It Works</h4>
                        <p>Images create emotional associations. When you see a friendly mascot next to a consent form, you feel safe and comfortable — even if the form is asking for dangerous permissions.</p>
                        
                        <h4>Real-World Example</h4>
                        <p>Imagine a game asks for permission to access your contacts. Next to that request is a cute cartoon character smiling. You feel like everything is fine — but that character has nothing to do with whether it's safe to share your contacts.</p>
                    `,
                    
                    goodExample: {
                        title: "Informing Imagery",
                        description: "Images that help users understand what they're agreeing to.",
                        details: [
                            'Realistic images showing actual use cases',
                            'Visuals that match the seriousness of the action',
                            'Images that prepare users for what will happen',
                            'Photos of real people with real names'
                        ]
                    },
                    
                    badExample: {
                        title: "Pacifying Imagery",
                        description: "Images that distract from serious consequences.",
                        details: [
                            'Friendly cartoon mascots next to data collection',
                            'Abstract pretty images that hide the risk',
                            'Imagery designed to make users feel safe when they shouldn\'t',
                            'Distracting visuals that draw attention from important text'
                        ]
                    },
                    
                    keyTest: "Does this image prepare or pacify the user?",
                    
                    howToSpot: [
                        'Ask: "Is this image distracting me from something important?"',
                        'Check if the image matches the seriousness of the action',
                        'Look for friendly visuals next to consent forms',
                        'Notice if the image is making you feel a certain way'
                    ],
                    
                    summary: "Imagery should help you understand what you're agreeing to, not distract you from it. If an image feels too friendly for the seriousness of the action, be suspicious.",
                    
                    quiz: {
                        questions: [
                            {
                                question: "What is a 'pacifying image' in dark pattern design?",
                                options: [
                                    "An image that calms the user down",
                                    "A friendly image used to distract from risk",
                                    "An image that prepares the user",
                                    "A medical illustration"
                                ],
                                correct_answer: 1,
                                explanation: "Pacifying images are friendly visuals used to distract from serious consequences, like a cute mascot next to a data-collection form."
                            },
                            {
                                question: "How can imagery build trust ethically?",
                                options: [
                                    "Using cartoon mascots everywhere",
                                    "Showing realistic images that prepare users for what will happen",
                                    "Using abstract art to distract",
                                    "Hiding information behind images"
                                ],
                                correct_answer: 1,
                                explanation: "Ethical imagery shows real use cases and prepares users for what will happen next."
                            },
                            {
                                question: "What should you ask when you see imagery on a consent form?",
                                options: [
                                    '"Is this image pretty?"',
                                    '"Is this image distracting me from something important?"',
                                    '"Does this image match my mood?"',
                                    '"Is this image trendy?"'
                                ],
                                correct_answer: 1,
                                explanation: "If imagery distracts you from something important, it may be a dark pattern."
                            },
                            {
                                question: "Why do dark patterns use friendly mascots?",
                                options: [
                                    "To make the website look nicer",
                                    "To create a false sense of safety around risky actions",
                                    "To be more relatable to children",
                                    "To save money on design"
                                ],
                                correct_answer: 1,
                                explanation: "Friendly mascots create emotional associations of safety and comfort, which dark patterns use to pacify users around risky actions."
                            },
                            {
                                question: "What type of image prepares users for what they're agreeing to?",
                                options: [
                                    "A cartoon mascot",
                                    "An abstract illustration",
                                    "A realistic image showing actual use",
                                    "A stock photo of a happy model"
                                ],
                                correct_answer: 2,
                                explanation: "Realistic images showing actual use cases prepare users for what they're agreeing to."
                            }
                        ]
                    }
                }
            ]
        },

        // ========================================
        // MODULE 3: Information Manipulation
        // ========================================
        {
            id: 3,
            title: "Information Manipulation",
            description: "Learn how information is presented to manipulate your perception.",
            interactiveExample: 'comparison',
            lessons: [
                // ----------------------------------------
                // LESSON 3-1: Testimonials & Social Proof
                // ----------------------------------------
                {
                    id: 1,
                    title: "Testimonials & Social Proof",
                    topic: "Information Manipulation",
                    duration: 8,
                    interactiveExample: 'sort',
                    
                    concept: `
                        <h3>What Is Social Proof?</h3>
                        <p>In general, we listen to what others tell us. Your friend tells you that a new game they're playing is terrible? You're more likely to not play it. Most of the reviews of a restaurant are great? You're more likely to eat there.</p>
                        <p>Designs use this tendency to make us more likely to do something. If there's a review saying to use a new product, we're more likely to use that product over one that doesn't have any reviews.</p>
                        
                        <h4>The Dark Pattern Version</h4>
                        <p>Dark patterns use fake social proof to manipulate trust:</p>
                        <ul>
                            <li><strong>Fake reviews</strong> — Reviews written by the company or bots</li>
                            <li><strong>Inflated numbers</strong> — "10,000+ happy customers!" with no source</li>
                            <li><strong>Anonymous praise</strong> — Reviews with no name, photo, or date</li>
                            <li><strong>Vague claims</strong> — "Best course ever!" without any specific details</li>
                            <li><strong>Cherry-picked testimonials</strong> — Only showing the best reviews, hiding the bad</li>
                        </ul>
                        
                        <h4>Why It Works</h4>
                        <p>We're social creatures. When we see others praising something, we trust it more. Dark patterns exploit this by manufacturing fake social proof, making us trust products and services that don't deserve it.</p>
                        
                        <h4>Real-World Example</h4>
                        <p>You're looking at a new game. The page says:</p>
                        <ul>
                            <li>"⭐⭐⭐⭐⭐ Best game EVER!" — Anonymous User</li>
                            <li>"⭐⭐⭐⭐⭐ Changed my life!" — Gamer_12345</li>
                            <li>"⭐⭐⭐⭐⭐ Perfect!" — User2024</li>
                        </ul>
                        <p>Those are all fake. Real reviews have names, specific details, and sometimes even negative things.</p>
                    `,
                    
                    goodExample: {
                        title: "Verifiable Testimonials",
                        description: "Real people with real names and context.",
                        details: [
                            'Named sources with dates and photos',
                            'Balanced claims — showing both pros and cons',
                            'Specific details that can be verified',
                            'Links to original reviews or sources'
                        ]
                    },
                    
                    badExample: {
                        title: "Fake Social Proof",
                        description: "Anonymous praise with inflated numbers.",
                        details: [
                            'Anonymous reviews with no names',
                            'Inflated numbers without sourcing',
                            'Vague claims like "Best course ever!"',
                            'Only 5-star reviews with no negatives'
                        ]
                    },
                    
                    keyTest: "Can the user verify or contextualize the claim?",
                    
                    howToSpot: [
                        'Check if reviews have real names and photos',
                        'Look for specific details that seem genuine',
                        'Notice if all reviews are 5-star with no negatives',
                        'Ask: "Is this verifiable or just vague praise?"'
                    ],
                    
                    summary: "Real social proof is verifiable and contextual. Fake social proof is vague, anonymous, and designed to manipulate trust. If you can't verify it, don't trust it.",
                    
                    quiz: {
                        questions: [
                            {
                                question: "What makes a testimonial a dark pattern?",
                                options: [
                                    "It includes a real name",
                                    "It's anonymous and makes vague claims",
                                    "It includes a date",
                                    "It has specific details"
                                ],
                                correct_answer: 1,
                                explanation: "Anonymous praise with vague claims like 'Best course ever!' is a dark pattern because it can't be verified."
                            },
                            {
                                question: "Which of these is a sign of authentic social proof?",
                                options: [
                                    "Anonymous reviews",
                                    '"10,000+ people enrolled" with no source',
                                    "Real names with specific details",
                                    "Generic praise"
                                ],
                                correct_answer: 2,
                                explanation: "Authentic social proof includes real names, specific details, and context that can be verified."
                            },
                            {
                                question: "What question should you ask to spot fake social proof?",
                                options: [
                                    '"Is this popular?"',
                                    '"Can I verify this claim?"',
                                    '"Does this look good?"',
                                    '"Is this a well-known brand?"'
                                ],
                                correct_answer: 1,
                                explanation: "Always ask if you can verify the claim. If you can't, it might be fake social proof."
                            },
                            {
                                question: "Why do dark patterns use anonymous reviews?",
                                options: [
                                    "To protect user privacy",
                                    "To make the reviews harder to verify",
                                    "To save space on the page",
                                    "To follow regulations"
                                ],
                                correct_answer: 1,
                                explanation: "Anonymous reviews are harder to verify, which is why dark patterns use them."
                            },
                            {
                                question: "What is one sign that a review might be fake?",
                                options: [
                                    "It includes specific details",
                                    "It's vague and overly positive",
                                    "It has a real name",
                                    "It includes a date"
                                ],
                                correct_answer: 1,
                                explanation: "Vague, overly positive reviews without specific details are often fake."
                            }
                        ]
                    }
                },

                // ----------------------------------------
                // LESSON 3-2: Typography & Language Pairing
                // ----------------------------------------
                {
                    id: 2,
                    title: "Typography & Language Pairing",
                    topic: "Information Manipulation",
                    duration: 7,
                    interactiveExample: 'comparison',
                    
                    concept: `
                        <h3>Typography as Communication</h3>
                        <p>Typography is more than just style. Font choices, sizes, and weights communicate importance and meaning. Ethical design uses typography to make important information clear. Dark patterns use it to hide important information.</p>
                        
                        <h4>How Typography Communicates</h4>
                        <p>Larger, bolder text feels more important. Smaller, lighter text feels less important. We naturally pay more attention to the biggest text on a page.</p>
                        <p>Think about a movie poster. The title is huge, the actors' names are medium, and the legal credits at the bottom are tiny. You pay attention to what's big.</p>
                        
                        <h4>The Dark Pattern Version</h4>
                        <p>Dark patterns use typography to hide important information:</p>
                        <ul>
                            <li><strong>Small legal text</strong> — Important terms in tiny fonts</li>
                            <li><strong>Friendly euphemisms</strong> — "We value your privacy" instead of "We sell your data"</li>
                            <li><strong>Hidden consequences</strong> — Real terms buried in paragraphs</li>
                            <li><strong>Visual emphasis on benefits</strong> — Highlighting good things while hiding bad</li>
                        </ul>
                        
                        <h4>Why It Works</h4>
                        <p>We skim text and pay attention to what's visually prominent. When companies make important information small and boring, we're less likely to read it.</p>
                        
                        <h4>Real-World Example</h4>
                        <p>You see a sign-up form for a free game. Big bold text says "PLAY FREE FOREVER!" Small gray text at the bottom says "Subscription auto-renews at $9.99/month after 7-day trial."</p>
                        <p>You saw the big text. You didn't read the small text. Now you're paying $9.99 a month.</p>
                    `,
                    
                    goodExample: {
                        title: "Readable & Clear",
                        description: "Plain language with readable fonts.",
                        details: [
                            'Plain language, readable font sizes',
                            'Important terms visually emphasized',
                            'Legal consequences are clear and prominent',
                            'No hidden text or euphemisms'
                        ]
                    },
                    
                    badExample: {
                        title: "Hidden & Confusing",
                        description: "Important information minimized or hidden.",
                        details: [
                            'Legal consequences are visually minimized',
                            'Euphemisms supported by friendly fonts',
                            'Small text hides important information',
                            'Real terms buried in long paragraphs'
                        ]
                    },
                    
                    keyTest: "What information is visually loud — and what is quiet?",
                    
                    howToSpot: [
                        'Check the font size of important information',
                        'Look for small text hiding legal terms',
                        'Notice if important info is buried in paragraphs',
                        'Ask: "Is the important information easy to read?"'
                    ],
                    
                    summary: "Typography should make important information easy to read, not hide it. If important terms are small, buried, or confusing, it's a dark pattern.",
                    
                    quiz: {
                        questions: [
                            {
                                question: "How do dark patterns use typography to manipulate users?",
                                options: [
                                    "They use large fonts everywhere",
                                    "They minimize legal consequences in small text",
                                    "They use only one font",
                                    "They use bold text for everything"
                                ],
                                correct_answer: 1,
                                explanation: "Dark patterns hide important information in small text while making other elements visually prominent."
                            },
                            {
                                question: "What is ethical typography in design?",
                                options: [
                                    "Using the smallest font possible",
                                    "Making important information clear and readable",
                                    "Hiding legal terms in small text",
                                    "Using complex language"
                                ],
                                correct_answer: 1,
                                explanation: "Ethical typography makes important information clear and easy to read."
                            },
                            {
                                question: "What should you look for in typography to spot dark patterns?",
                                options: [
                                    "The font style",
                                    "The font size of important information",
                                    "The color of the text",
                                    "The spacing between letters"
                                ],
                                correct_answer: 1,
                                explanation: "Check the font size of important information. If legal terms are tiny and hard to read, it might be a dark pattern."
                            },
                            {
                                question: "What are euphemisms in dark pattern design?",
                                options: [
                                    "Clear, simple language",
                                    "Friendly phrases that hide negative meaning",
                                    "Technical terms",
                                    "Legal terms"
                                ],
                                correct_answer: 1,
                                explanation: "Euphemisms are friendly phrases used to hide the real meaning, like 'We value your privacy' instead of 'We sell your data.'"
                            },
                            {
                                question: "Why do dark patterns use small text for legal terms?",
                                options: [
                                    "To save space",
                                    "Because they're required by law",
                                    "Because they hope you won't read it",
                                    "Because it looks cleaner"
                                ],
                                correct_answer: 2,
                                explanation: "Dark patterns use small text for legal terms because they hope you won't read it, and will just click through."
                            }
                        ]
                    }
                },

                // ----------------------------------------
                // LESSON 3-3: Layout & White Space
                // ----------------------------------------
                {
                    id: 3,
                    title: "Layout & White Space",
                    topic: "Information Manipulation",
                    duration: 7,
                    interactiveExample: 'comparison',
                    
                    concept: `
                        <h3>Layout Shapes Perception</h3>
                        <p>How information is arranged on a page shapes how we perceive it. Layout can make choices clear or confusing. Ethical design uses layout to create understanding. Dark patterns use layout to bury alternatives.</p>
                        
                        <h4>How Layout Communicates</h4>
                        <p>Elements that are placed prominently are perceived as more important. Elements that are buried or hidden are perceived as less important. We naturally pay attention to what's in our field of view.</p>
                        <p>Think about a store. The candy is at eye level for kids. The healthy snacks are on the bottom shelf. That's layout manipulation.</p>
                        
                        <h4>The Dark Pattern Version</h4>
                        <p>Dark patterns use layout to manipulate:</p>
                        <ul>
                            <li><strong>Buried alternatives</strong> — Options hidden in hard-to-reach places</li>
                            <li><strong>Dominant paths</strong> — One option is clearly preferred by design</li>
                            <li><strong>Removed choices</strong> — Minimalism that removes meaningful options</li>
                            <li><strong>Visual obstacles</strong> — Designs that make it hard to find what you need</li>
                        </ul>
                        
                        <h4>Why It Works</h4>
                        <p>We take the path of least resistance. If one option is easy to find and others are buried, most users will choose the easy option.</p>
                        
                        <h4>Real-World Example</h4>
                        <p>You want to cancel a subscription. The "Cancel" button is hidden three menus deep, while the "Upgrade" button is on every page. You have to work to find what you want. That's layout manipulation.</p>
                    `,
                    
                    goodExample: {
                        title: "Clear & Balanced",
                        description: "All choices equally accessible.",
                        details: [
                            'Clear separation between information and action',
                            'All choices equally readable and accessible',
                            'Balanced layout aids understanding',
                            'No hidden or buried options'
                        ]
                    },
                    
                    badExample: {
                        title: "Buried & Hidden",
                        description: "One dominant path with alternatives buried.",
                        details: [
                            'One dominant path with alternatives buried',
                            '"Clean" minimalism that removes meaningful choice',
                            'Layout forces you toward one choice',
                            'Important options are hard to find'
                        ]
                    },
                    
                    keyTest: "Is simplicity aiding understanding or limiting agency?",
                    
                    howToSpot: [
                        'Look for buried options',
                        'Check if all choices are equally visible',
                        'Notice if you have to scroll or dig for alternatives',
                        'Ask: "Is this layout helping or manipulating me?"'
                    ],
                    
                    summary: "Layout should give you equal access to all choices, not push you toward one option. If alternatives are buried, it's a dark pattern.",
                    
                    quiz: {
                        questions: [
                            {
                                question: "How do dark patterns use layout to manipulate users?",
                                options: [
                                    "They use too many colors",
                                    "They bury alternatives and push users toward one choice",
                                    "They use too much white space",
                                    "They use too many images"
                                ],
                                correct_answer: 1,
                                explanation: "Dark patterns use layout to make one choice dominant and bury alternatives."
                            },
                            {
                                question: "What is ethical use of layout in design?",
                                options: [
                                    "Burying the decline option",
                                    "Using one dominant button",
                                    "Clear separation between information and action",
                                    "Hiding important options"
                                ],
                                correct_answer: 2,
                                explanation: "Ethical layout provides clear separation between information and action, with all choices equally accessible."
                            },
                            {
                                question: "What does 'clean minimalism' sometimes hide?",
                                options: [
                                    "Better design",
                                    "Meaningful choices that have been removed",
                                    "Faster load times",
                                    "More white space"
                                ],
                                correct_answer: 1,
                                explanation: "Sometimes minimalism removes meaningful choices, limiting user agency."
                            },
                            {
                                question: "Why does burying alternatives work?",
                                options: [
                                    "Because users like to search",
                                    "Because users take the path of least resistance",
                                    "Because it looks cleaner",
                                    "Because it saves space"
                                ],
                                correct_answer: 1,
                                explanation: "Burying alternatives works because users take the path of least resistance and choose the easiest option."
                            },
                            {
                                question: "What should you ask when evaluating a layout?",
                                options: [
                                    '"Is this pretty?"',
                                    '"Is this layout helping or manipulating me?"',
                                    '"Is this modern?"',
                                    '"Does this look professional?"'
                                ],
                                correct_answer: 1,
                                explanation: "Ask if the layout is helping you understand or manipulating you toward a choice."
                            }
                        ]
                    }
                }
            ]
        },

        // ========================================
        // MODULE 4: Interaction Manipulation
        // ========================================
        {
            id: 4,
            title: "Interaction Manipulation",
            description: "Understand how interactions are designed to manipulate behavior.",
            interactiveExample: 'comparison',
            lessons: [
                // ----------------------------------------
                // LESSON 4-1: Motion & Animation
                // ----------------------------------------
                {
                    id: 1,
                    title: "Motion & Animation",
                    topic: "Interaction Manipulation",
                    duration: 7,
                    interactiveExample: 'timer',
                    
                    concept: `
                        <h3>Motion as Communication</h3>
                        <p>Motion and animation are powerful tools. They can explain processes, confirm actions, and guide attention. Ethical design uses motion to clarify. Dark patterns use motion to distract and rush.</p>
                        
                        <h4>How Motion Communicates</h4>
                        <p>Subtle animations confirm our actions — a button pulses when clicked. Progress indicators show us what's happening. Transitions explain changes.</p>
                        <p>Think about a game. When you level up, there's a satisfying animation that shows your progress. That's ethical motion — it confirms what happened.</p>
                        
                        <h4>The Dark Pattern Version</h4>
                        <p>Dark patterns use motion to manipulate:</p>
                        <ul>
                            <li><strong>Distracting motion</strong> — Animations that draw attention away from important text</li>
                            <li><strong>Rushing animations</strong> — Motion that hurries you through consent</li>
                            <li><strong>Auto-advancing carousels</strong> — Content that moves before you can read it</li>
                            <li><strong>Loading animations</strong> — Fake loading that creates urgency</li>
                        </ul>
                        
                        <h4>Why It Works</h4>
                        <p>Motion captures our attention automatically. We can't help but look at moving things. Dark patterns exploit this by using motion to distract us from what we should be paying attention to.</p>
                        
                        <h4>Real-World Example</h4>
                        <p>You're reading the terms of service. A flashy animation in the corner keeps drawing your eye. You can't focus on the text. That's distracting motion.</p>
                    `,
                    
                    goodExample: {
                        title: "Explaining Motion",
                        description: "Animations that help users understand.",
                        details: [
                            'Subtle feedback confirming user actions',
                            'Animations that explain processes or transitions',
                            'Motion helps users understand what\'s happening',
                            'No rushing or distracting motion'
                        ]
                    },
                    
                    badExample: {
                        title: "Rushing Motion",
                        description: "Distracting motion during consent moments.",
                        details: [
                            'Distracting motion during consent moments',
                            'Animations that hurry users forward',
                            'Motion designed to make you click faster',
                            'Auto-advancing content before you can read it'
                        ]
                    },
                    
                    keyTest: "Does motion explain or accelerate compliance?",
                    
                    howToSpot: [
                        'Check if motion is distracting you from reading',
                        'Look for animations that rush you',
                        'Notice if content auto-advances before you can read',
                        'Ask: "Is this motion helping me understand?"'
                    ],
                    
                    summary: "Motion should help you understand what's happening, not rush you through important decisions. If motion feels distracting, it probably is.",
                    
                    quiz: {
                        questions: [
                            {
                                question: "How do dark patterns use motion to manipulate users?",
                                options: [
                                    "They use too many animations",
                                    "They use distracting motion during consent moments",
                                    "They use no motion at all",
                                    "They use slow animations"
                                ],
                                correct_answer: 1,
                                explanation: "Dark patterns use distracting motion during consent moments to rush users into making decisions."
                            },
                            {
                                question: "What is ethical use of animation?",
                                options: [
                                    "Using as many animations as possible",
                                    "Animations that help explain processes or confirm actions",
                                    "Fast animations to rush users",
                                    "Distracting motion"
                                ],
                                correct_answer: 1,
                                explanation: "Ethical animation explains processes and confirms user actions, helping users understand what's happening."
                            },
                            {
                                question: "What should you watch for when animations appear on a form?",
                                options: [
                                    "The animation style",
                                    "Whether the motion is distracting you from reading important information",
                                    "The animation speed",
                                    "The color of the animation"
                                ],
                                correct_answer: 1,
                                explanation: "If motion distracts you from reading important information, it may be a dark pattern."
                            },
                            {
                                question: "Why do dark patterns use auto-advancing carousels?",
                                options: [
                                    "To save space",
                                    "To rush users past important information",
                                    "To be more modern",
                                    "To show more content"
                                ],
                                correct_answer: 1,
                                explanation: "Auto-advancing carousels rush users past information before they can read it."
                            },
                            {
                                question: "What type of motion helps users understand?",
                                options: [
                                    "Distracting motion",
                                    "Subtle feedback confirming actions",
                                    "Fast animations",
                                    "Loading animations"
                                ],
                                correct_answer: 1,
                                explanation: "Subtle feedback confirming actions helps users understand what's happening."
                            }
                        ]
                    }
                },

                // ----------------------------------------
                // LESSON 4-2: Defaults & Toggles
                // ----------------------------------------
                {
                    id: 2,
                    title: "Defaults & Toggles",
                    topic: "Interaction Manipulation",
                    duration: 7,
                    interactiveExample: 'checkbox',
                    
                    concept: `
                        <h3>The Power of Defaults</h3>
                        <p>Defaults are the settings that are chosen for you if you don't actively change them. They're incredibly powerful because most people never change defaults.</p>
                        <p>Think about your phone settings. You probably haven't changed most of them — you just use the default. Companies know this.</p>
                        
                        <h4>How Defaults Should Work</h4>
                        <p>Ethical defaults are neutral. They don't benefit the company at the user's expense. Users actively make choices about what they want.</p>
                        
                        <h4>The Dark Pattern Version</h4>
                        <p>Dark patterns use defaults to assume consent:</p>
                        <ul>
                            <li><strong>Pre-checked boxes</strong> — Marketing emails automatically selected</li>
                            <li><strong>Pre-selected options</strong> — The "wrong" choice is already selected</li>
                            <li><strong>Opt-outs framed as losses</strong> — "Unchecking may limit your experience"</li>
                            <li><strong>Hidden toggles</strong> — Settings that are hard to find or change</li>
                        </ul>
                        
                        <h4>Why It Works</h4>
                        <p>Most people never change default settings. Studies show that 90%+ of users accept defaults without changing them. Companies exploit this by making defaults that benefit them.</p>
                        
                        <h4>Real-World Example</h4>
                        <p>You sign up for a game. There's a box that says "Send me promotional emails" — and it's already checked. You don't notice, so you leave it. Now your inbox is full of game spam.</p>
                    `,
                    
                    goodExample: {
                        title: "Neutral Defaults",
                        description: "Users actively make choices.",
                        details: [
                            'Neutral default states',
                            'Clear explanation of what toggles control',
                            'User actively makes choices',
                            'No pre-checked boxes for optional services'
                        ]
                    },
                    
                    badExample: {
                        title: "Assumed Consent",
                        description: "Pre-checked boxes assume consent.",
                        details: [
                            'Pre-checked boxes styled as harmless',
                            'Opt-outs framed as losses',
                            'Assumes consent instead of inviting it',
                            'Hidden toggles that are hard to find'
                        ]
                    },
                    
                    keyTest: "Does the design invite a decision or assume one?",
                    
                    howToSpot: [
                        'Look for pre-checked boxes',
                        'Check if opt-outs are framed as losses',
                        'Notice if settings are hard to find',
                        'Ask: "Did I choose this, or was it chosen for me?"'
                    ],
                    
                    summary: "Good defaults are neutral. Dark patterns assume consent by pre-checking boxes and making opt-outs hard to find.",
                    
                    quiz: {
                        questions: [
                            {
                                question: "What is a 'deceptive default'?",
                                options: [
                                    "A default setting that's clearly explained",
                                    "A pre-selected option that benefits the company",
                                    "A default that the user changes",
                                    "A neutral default state"
                                ],
                                correct_answer: 1,
                                explanation: "Deceptive defaults are pre-selected options that benefit the company, not you."
                            },
                            {
                                question: "What is ethical use of defaults?",
                                options: [
                                    "Pre-checking all boxes",
                                    "Neutral defaults that require active user choice",
                                    "Hiding options",
                                    "Framing opt-outs as losses"
                                ],
                                correct_answer: 1,
                                explanation: "Ethical defaults are neutral and require users to actively choose what they want."
                            },
                            {
                                question: "What should you look for to spot deceptive defaults?",
                                options: [
                                    "Whether the design is pretty",
                                    "Pre-checked boxes that you didn't choose",
                                    "The font size",
                                    "The page layout"
                                ],
                                correct_answer: 1,
                                explanation: "Pre-checked boxes that you didn't actively select are deceptive defaults."
                            },
                            {
                                question: "Why do deceptive defaults work?",
                                options: [
                                    "Because users are lazy",
                                    "Because most users never change default settings",
                                    "Because users don't understand technology",
                                    "Because defaults are always the best option"
                                ],
                                correct_answer: 1,
                                explanation: "Deceptive defaults work because most users never change default settings. Studies show over 90% of users accept defaults without changing them."
                            },
                            {
                                question: "What is an example of an opt-out framed as a loss?",
                                options: [
                                    '"Uncheck here to not receive emails"',
                                    '"Unchecking may limit your experience"',
                                    '"Click here to subscribe"',
                                    '"Select your preferences"'
                                ],
                                correct_answer: 1,
                                explanation: "Framing opt-outs as losses ('Unchecking may limit your experience') is a dark pattern."
                            }
                        ]
                    }
                },

                // ----------------------------------------
                // LESSON 4-3: Consent Flows
                // ----------------------------------------
                {
                    id: 3,
                    title: "Consent Flows",
                    topic: "Interaction Manipulation",
                    duration: 8,
                    interactiveExample: 'checkbox',
                    
                    concept: `
                        <h3>The Importance of Consent</h3>
                        <p>Consent is the foundation of ethical design. Companies should ask for permission before collecting data, sending emails, or taking other actions. Consent should be informed and freely given.</p>
                        
                        <h4>How Consent Should Work</h4>
                        <p>Ethical consent provides clear summaries before acceptance. Accept and reject options have equal prominence. Users can make informed decisions about what they're agreeing to.</p>
                        
                        <h4>The Dark Pattern Version</h4>
                        <p>Dark patterns manufacture consent:</p>
                        <ul>
                            <li><strong>Long text collapsed</strong> — Terms hidden in expandable sections</li>
                            <li><strong>Bright "Accept all"</strong> — One option is visually dominant</li>
                            <li><strong>Dull "Manage settings"</strong> — The alternative is grayed out and hard to find</li>
                            <li><strong>Confusing language</strong> — Terms written to confuse rather than inform</li>
                            <li><strong>Countdown timers</strong> — Fake urgency to force a decision</li>
                        </ul>
                        
                        <h4>Why It Works</h4>
                        <p>When one option is bright and easy and the other is dull and hidden, most users will click the easy option without reading or thinking.</p>
                        
                        <h4>Real-World Example</h4>
                        <p>You open a website. A cookie banner appears:</p>
                        <ul>
                            <li>A big bright green button: "ACCEPT ALL COOKIES"</li>
                            <li>A tiny gray link in the corner: "Manage settings"</li>
                        </ul>
                        <p>You click the big button. You didn't realize you just agreed to let them sell your data to 500 companies.</p>
                    `,
                    
                    goodExample: {
                        title: "Informed Consent",
                        description: "Clear summaries with equal prominence.",
                        details: [
                            'Clear summaries before acceptance',
                            'Equal prominence of accept/reject options',
                            'Users can make informed decisions',
                            'No confusing language or hidden text'
                        ]
                    },
                    
                    badExample: {
                        title: "Manufactured Consent",
                        description: "One choice is prominent, alternatives hidden.",
                        details: [
                            'Long text collapsed or visually muted',
                            'Bright "Accept all" vs dull "Manage settings"',
                            'Consent is recorded, not informed',
                            'Confusing language designed to prevent understanding'
                        ]
                    },
                    
                    keyTest: "Is consent informed — or just recorded?",
                    
                    howToSpot: [
                        'Check if accept and reject options are equally visible',
                        'Look for hidden or collapsed text',
                        'Notice if language is confusing on purpose',
                        'Ask: "Am I being informed or just recorded?"'
                    ],
                    
                    summary: "Consent should be informed. If the accept button is bright and the reject button is dull, or if terms are hidden in small text, it's a dark pattern.",
                    
                    quiz: {
                        questions: [
                            {
                                question: "What is manufactured consent?",
                                options: [
                                    "Consent given after reading all options",
                                    "Consent obtained by making one choice dominant and alternatives hard to find",
                                    "Consent given by an adult",
                                    "Consent that's legally binding"
                                ],
                                correct_answer: 1,
                                explanation: "Manufactured consent is when the design makes one choice dominant (like a bright 'Accept all') while alternatives are hard to find or visually muted."
                            },
                            {
                                question: "What makes a consent flow ethical?",
                                options: [
                                    "Bright 'Accept all' button only",
                                    "Hidden settings",
                                    "Clear summaries with equal prominence for accept and reject",
                                    "Long legal text"
                                ],
                                correct_answer: 2,
                                explanation: "Ethical consent flows provide clear summaries with equal prominence for all options."
                            },
                            {
                                question: "What should you check in a cookie consent flow?",
                                options: [
                                    "The cookie policy",
                                    "If 'Accept' and 'Reject' are equally visible",
                                    "The website's privacy policy",
                                    "How many cookies they use"
                                ],
                                correct_answer: 1,
                                explanation: "If 'Accept' is bright and 'Reject' is dull or hidden, it's a dark pattern."
                            },
                            {
                                question: "Why do dark patterns use confusing language in consent forms?",
                                options: [
                                    "To be legally safe",
                                    "To confuse users so they don't understand what they're agreeing to",
                                    "To sound professional",
                                    "To save space"
                                ],
                                correct_answer: 1,
                                explanation: "Confusing language is used to prevent users from understanding what they're agreeing to."
                            },
                            {
                                question: "What is one sign of manufactured consent?",
                                options: [
                                    "Clear summaries",
                                    "Equal prominence of accept and reject",
                                    "Bright 'Accept all' and dull 'Manage settings'",
                                    "Simple language"
                                ],
                                correct_answer: 2,
                                explanation: "Bright 'Accept all' and dull 'Manage settings' is a common manufactured consent dark pattern."
                            }
                        ]
                    }
                }
            ]
        },

        // ========================================
        // MODULE 5: Trust & Authority
        // ========================================
        {
            id: 5,
            title: "Trust & Authority",
            description: "Learn how trust is signaled and manipulated online.",
            interactiveExample: 'comparison',
            lessons: [
                // ----------------------------------------
                // LESSON 5-1: Trust Badges & Symbols
                // ----------------------------------------
                {
                    id: 1,
                    title: "Trust Badges & Symbols",
                    topic: "Trust & Authority",
                    duration: 7,
                    interactiveExample: 'comparison',
                    
                    concept: `
                        <h3>What Are Trust Badges?</h3>
                        <p>Trust badges are symbols that communicate trustworthiness. They include security seals, certifications, and other marks that tell users "this site is safe."</p>
                        <p>Think about a store with a "BBB Accredited" sticker on the window. That's a trust badge — it signals that the business has been verified.</p>
                        
                        <h4>How Trust Badges Should Work</h4>
                        <p>Ethical trust badges are verifiable. They link to real certifications, standards, or audits. You can check if the claim is legitimate.</p>
                        
                        <h4>The Dark Pattern Version</h4>
                        <p>Dark patterns use fake trust signals:</p>
                        <ul>
                            <li><strong>Decorative shields</strong> — Symbols that look official but mean nothing</li>
                            <li><strong>Fake locks</strong> — Lock icons that don't represent real security</li>
                            <li><strong>Official-looking seals</strong> — Badges designed to look like certifications</li>
                            <li><strong>False authority</strong> — "As seen on" without any verification</li>
                        </ul>
                        
                        <h4>Why It Works</h4>
                        <p>We're trained to trust official-looking symbols. A shield icon or lock icon feels safe, even if it means nothing. Dark patterns exploit this by using symbols that look trustworthy but aren't verified.</p>
                        
                        <h4>Real-World Example</h4>
                        <p>You're on a sketchy website. At the bottom, there's a gold shield that says "100% SECURE." You feel safe. But that shield is just an image — there's no link, no certification, nothing behind it. It's decoration.</p>
                    `,
                    
                    goodExample: {
                        title: "Verifiable Trust",
                        description: "Real certifications you can verify.",
                        details: [
                            'Verifiable certifications with explanations',
                            'Links to standards or audits',
                            'Trust is earned through transparency',
                            'Real security through real technology'
                        ]
                    },
                    
                    badExample: {
                        title: "Fake Trust",
                        description: "Decorative symbols without meaning.",
                        details: [
                            'Decorative shields, locks, or seals',
                            'Authority symbols without accountability',
                            'Trust is signaled but not earned',
                            'Symbols that look official but mean nothing'
                        ]
                    },
                    
                    keyTest: "Is trust earned or merely signaled?",
                    
                    howToSpot: [
                        'Check if the trust badge links to a real certification',
                        'Look for badges that are just decorative',
                        'Notice if the badge is from a real, known organization',
                        'Ask: "Can I verify this trust claim?"'
                    ],
                    
                    summary: "Real trust badges are verifiable. Dark patterns use decorative symbols that look official but mean nothing. If you can't verify it, don't trust it.",
                    
                    quiz: {
                        questions: [
                            {
                                question: "What makes a trust badge a dark pattern?",
                                options: [
                                    "It's from a real certification body",
                                    "It's decorative without any accountability",
                                    "It links to a standards page",
                                    "It has an explanation"
                                ],
                                correct_answer: 1,
                                explanation: "Decorative shields and locks without accountability are dark patterns designed to signal trust that isn't earned."
                            },
                            {
                                question: "What makes a trust badge ethical?",
                                options: [
                                    "It looks official",
                                    "It's verifiable with links to standards or audits",
                                    "It's brightly colored",
                                    "It's large and prominent"
                                ],
                                correct_answer: 1,
                                explanation: "Ethical trust badges are verifiable, with links to standards or audits that back up the claim."
                            },
                            {
                                question: "What should you ask when you see a trust badge?",
                                options: [
                                    '"Does this look official?"',
                                    '"Can I verify this trust claim?"',
                                    '"Is this badge pretty?"',
                                    '"Does this match the brand?"'
                                ],
                                correct_answer: 1,
                                explanation: "Always ask if you can verify the trust claim. If you can't, it might be a dark pattern."
                            },
                            {
                                question: "Why do fake trust badges work?",
                                options: [
                                    "Because users don't care about security",
                                    "Because we're trained to trust official-looking symbols",
                                    "Because they're required by law",
                                    "Because they're expensive"
                                ],
                                correct_answer: 1,
                                explanation: "Fake trust badges work because we're trained to trust official-looking symbols, even if they mean nothing."
                            },
                            {
                                question: "What type of trust badge is ethical?",
                                options: [
                                    "A decorative shield",
                                    "A fake lock icon",
                                    "A verifiable certification with a link",
                                    "An official-looking seal"
                                ],
                                correct_answer: 2,
                                explanation: "Verifiable certifications with links to standards or audits are ethical trust badges."
                            }
                        ]
                    }
                }
            ]
        },

        // ========================================
        // MODULE 6: Final Assessment
        // ========================================
        {
            id: 6,
            title: "Final Assessment",
            description: "Put everything together and test your knowledge.",
            interactiveExample: 'review',
            lessons: [
                {
                    id: 1,
                    title: "Putting It All Together",
                    topic: "Final Assessment",
                    duration: 10,
                    interactiveExample: 'review',
                    
                    concept: `
                        <h3>The Complete Defender's Toolkit</h3>
                        <p>You've learned about 10 different dark patterns. Now it's time to put it all together.</p>
                        
                        <h4>Your Complete Checklist</h4>
                        <p>Every time you're on a website or app, ask yourself:</p>
                        
                        <h5>1. CTA Buttons</h5>
                        <p>Does the button describe the consequence or obscure it?</p>
                        
                        <h5>2. Color Use</h5>
                        <p>Does color clarify meaning or manipulate urgency?</p>
                        
                        <h5>3. Testimonials & Social Proof</h5>
                        <p>Can I verify or contextualize the claim?</p>
                        
                        <h5>4. Imagery & Illustration</h5>
                        <p>Does the image prepare or pacify me?</p>
                        
                        <h5>5. Layout & White Space</h5>
                        <p>Is simplicity aiding understanding or limiting my agency?</p>
                        
                        <h5>6. Motion & Animation</h5>
                        <p>Does motion explain or accelerate compliance?</p>
                        
                        <h5>7. Typography & Language Pairing</h5>
                        <p>What information is visually loud — and what is quiet?</p>
                        
                        <h5>8. Defaults & Toggles</h5>
                        <p>Does the design invite a decision or assume one?</p>
                        
                        <h5>9. Trust Badges & Symbols</h5>
                        <p>Is trust earned or merely signaled?</p>
                        
                        <h5>10. Consent Flows</h5>
                        <p>Is consent informed — or just recorded?</p>
                        
                        <h4>Final Words</h4>
                        <p>You now have the knowledge to spot dark patterns everywhere. Use your skills to protect yourself and others. Remember: if a design feels manipulative, it probably is. Trust your instincts.</p>
                        <p><strong>The Shadow Corporation doesn't stand a chance.</strong></p>
                    `,
                    
                    goodExample: {
                        title: "The Defender's Toolkit",
                        description: "Everything you've learned to spot dark patterns.",
                        details: [
                            'CTA buttons: Check if they describe consequences',
                            'Color: Does it clarify or manipulate?',
                            'Testimonials: Can you verify the claims?',
                            'Imagery: Does it prepare or pacify?',
                            'Layout: Is simplicity aiding understanding?'
                        ]
                    },
                    
                    badExample: {
                        title: "The Shadow Corporation's Toolkit",
                        description: "The dark patterns you've learned to spot.",
                        details: [
                            'Vague CTA buttons that hide consequences',
                            'Emotional colors that manipulate urgency',
                            'Fake testimonials with inflated numbers',
                            'Pacifying imagery that distracts from risk',
                            'Buried alternatives in layouts'
                        ]
                    },
                    
                    keyTest: "Can you spot all 10 dark patterns in the wild?",
                    
                    howToSpot: [
                        'Use everything you\'ve learned',
                        'Trust your instincts',
                        'Ask: "Is this design helping or manipulating me?"'
                    ],
                    
                    summary: "You now have the knowledge to spot dark patterns everywhere. Use your skills to protect yourself and others.",
                    
                    quiz: {
                        questions: [
                            {
                                question: "What is the most important question to ask when evaluating a design?",
                                options: [
                                    '"Does this look nice?"',
                                    '"Is this helping or manipulating me?"',
                                    '"Is this popular?"',
                                    '"Is this from a big company?"'
                                ],
                                correct_answer: 1,
                                explanation: "The most important question is whether the design is helping or manipulating you."
                            },
                            {
                                question: "Which of these is NOT a dark pattern?",
                                options: [
                                    "Vague CTA buttons",
                                    "Clear pricing with all fees visible",
                                    "Pre-checked marketing boxes",
                                    "Hidden alternatives"
                                ],
                                correct_answer: 1,
                                explanation: "Clear pricing with all fees visible is an ethical design practice, not a dark pattern."
                            },
                            {
                                question: "What is the best defense against dark patterns?",
                                options: [
                                    "Never use the internet",
                                    "Always click the biggest button",
                                    "Question designs and trust your instincts",
                                    "Trust all companies"
                                ],
                                correct_answer: 2,
                                explanation: "The best defense is to question designs and trust your instincts. If something feels off, it probably is."
                            },
                            {
                                question: "How many categories of dark patterns did you learn?",
                                options: [
                                    "5",
                                    "7",
                                    "10",
                                    "12"
                                ],
                                correct_answer: 2,
                                explanation: "You learned about 10 categories of dark patterns."
                            },
                            {
                                question: "What should you do when a design feels manipulative?",
                                options: [
                                    "Ignore it",
                                    "Trust your instincts",
                                    "Click the biggest button",
                                    "Assume it's fine"
                                ],
                                correct_answer: 1,
                                explanation: "Trust your instincts. If a design feels manipulative, it probably is."
                            }
                        ]
                    }
                }
            ]
        }
    ]
};