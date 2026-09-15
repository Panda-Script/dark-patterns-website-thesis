// src/data/storyData.js
export const storyData = {
    chapters: [
        // ========================================
        // PROLOGUE: The Awakening
        // ========================================
        {
            id: 0,
            title: "The Awakening",
            type: 'prologue',
            trigger: 'module-1-lesson-1',
            scenes: [
                {
                    id: 'prologue-1',
                    speaker: 'narrator',
                    text: "You wake up to a dimly lit room. It's cold, musty, and surprisingly clean. A single holographic screen flickers before you, casting a pale blue light across your face and the room.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'prologue-2' }
                    ]
                },
                {
                    id: 'prologue-2',
                    speaker: 'narrator',
                    text: "It displays a figure — but not a person. Not exactly. It's a silhouette made of many silhouettes, overlapping and shifting like a crowd seen through frosted glass. When it speaks, the voice is layered — hundreds of voices speaking in unison.",
                    choices: [
                        { id: 'continue', text: "Listen", nextScene: 'prologue-3' }
                    ]
                },
                {
                    id: 'prologue-3',
                    speaker: 'guild',
                    text: "You got too close. They're watching you now. All you've ever known has changed. If you're getting this message, we need your help.",
                    choices: [
                        { id: 'continue', text: "Who are you?", nextScene: 'prologue-4' }
                    ]
                },
                {
                    id: 'prologue-4',
                    speaker: 'narrator',
                    text: "You don't remember much from before the room — just small fragments of a life. Bright lights. Laughing voices. A city. That's it. You look around. The room is bare with just a single window looking out into a neon-lit city. The buildings stretch into the sky, their surfaces covered in ads that shift when viewed out of the corner of your eye. A smiling happy family, then a glance away and it's changed to screaming, but glance back and it's the same happy family.",
                    choices: [
                        { id: 'continue', text: "Turn back to the screen", nextScene: 'prologue-5' }
                    ]
                },
                {
                    id: 'prologue-5',
                    speaker: 'guild',
                    text: "E.V. Inc. Llc has been manipulating the digital world for decades. They use something called Dark Patterns — deceptive designs that trick people into doing things they never intended. They have infiltrated every corner of the internet. And they are winning.",
                    choices: [
                        { id: 'continue', text: "Keep listening", nextScene: 'prologue-6' }
                    ]
                },
                {
                    id: 'prologue-6',
                    speaker: 'guild',
                    text: "We are the Guild. We are not one person. We are everyone who has ever been tricked, manipulated, erased, or forgotten by E.V. Inc. Llc. We are the ones who lost our savings to hidden fees. We are the ones who lost our privacy to pre-checked boxes. We are the ones who lost our identity to terms we never agreed to.",
                    choices: [
                        { id: 'continue', text: "Keep listening", nextScene: 'prologue-7' }
                    ]
                },
                {
                    id: 'prologue-7',
                    speaker: 'guild',
                    text: "We have been watching you. You see things others miss. You question things others accept. You are a natural Defender. You just don't know it yet.",
                    choices: [
                        { id: 'accept', text: "Accept the mission", nextScene: 'prologue-accept' },
                        { id: 'question', text: "Who are you, really?", nextScene: 'prologue-question' }
                    ]
                },
                {
                    id: 'prologue-question',
                    speaker: 'narrator',
                    text: "The silhouette shifts. For a moment, it resolves into a single figure — a young woman with dark circles under her eyes. She speaks alone, her voice quiet.",
                    choices: [
                        { id: 'continue', text: "Listen", nextScene: 'prologue-mira' }
                    ]
                },
                {
                    id: 'prologue-mira',
                    speaker: 'mira',
                    text: "My name was Mira. I was a data analyst for E.V. Inc. Llc. I saw what they were doing — the patterns, the manipulation, the lies. I tried to expose them. They erased me. My accounts, my records, my family's memories of me. To the world, I never existed.",
                    choices: [
                        { id: 'continue', text: "Keep listening", nextScene: 'prologue-daniel' }
                    ]
                },
                {
                    id: 'prologue-daniel',
                    speaker: 'daniel',
                    text: "I'm Daniel. I lost my life savings to a subscription I never signed up for. When I tried to cancel, they made it impossible. I spent three years fighting them. I won, but I lost everything else.",
                    choices: [
                        { id: 'continue', text: "Keep listening", nextScene: 'prologue-zoe' }
                    ]
                },
                {
                    id: 'prologue-zoe',
                    speaker: 'zoe',
                    text: "I'm Zoe. My entire friend group got scammed by a game with fake reviews. We all spent money we didn't have. Some of us are still paying it off.",
                    choices: [
                        { id: 'continue', text: "Keep listening", nextScene: 'prologue-collective' }
                    ]
                },
                {
                    id: 'prologue-collective',
                    speaker: 'guild',
                    text: "We are not one person. We are the ones who survived. We are the Guild. And we are asking you to join us.",
                    choices: [
                        { id: 'accept', text: "Accept the mission", nextScene: 'prologue-accept' },
                        { id: 'think', text: "I need to think about it", nextScene: 'prologue-think' }
                    ]
                },
                {
                    id: 'prologue-think',
                    speaker: 'guild',
                    text: "We understand. It's a lot to take in. But we'll say this: you don't have much time. E.V. Inc. Llc knows you're awake. They know you're here. They have agents already on their way.",
                    choices: [
                        { id: 'continue', text: "Agents?", nextScene: 'prologue-agents' }
                    ]
                },
                {
                    id: 'prologue-agents',
                    speaker: 'guild',
                    text: "Shadow Agents. Enforcers. They don't ask questions. They don't negotiate. They erase. And they're coming for you.",
                    choices: [
                        { id: 'accept', text: "Fine. I'll do it.", nextScene: 'prologue-accept' }
                    ]
                },
                {
                    id: 'prologue-accept',
                    speaker: 'guild',
                    text: "Good. You've made the right choice. We won't lie to you — this will be hard. E.V. Inc. Llc has resources beyond anything you can imagine. They have infiltrated every system. They have eyes everywhere. But they have one weakness.",
                    choices: [
                        { id: 'continue', text: "What's that?", nextScene: 'prologue-weakness' }
                    ]
                },
                {
                    id: 'prologue-weakness',
                    speaker: 'guild',
                    text: "Their patterns. Every dark pattern has a weakness. Every trick has a tell. The more you understand their methods, the harder it becomes for them to fool you. Knowledge is your weapon.",
                    choices: [
                        { id: 'continue', text: "How do I start?", nextScene: 'prologue-start' }
                    ]
                },
                {
                    id: 'prologue-start',
                    speaker: 'guild',
                    text: "You will train in the Grimoire — a magical book that contains all the knowledge of the Guild. Each lesson you complete will unlock new abilities. Each boss you defeat will make you stronger. And when you're ready, you'll face the Shadow Lord himself.",
                    choices: [
                        { id: 'continue', text: "The Shadow Lord?", nextScene: 'prologue-lord' }
                    ]
                },
                {
                    id: 'prologue-lord',
                    speaker: 'guild',
                    text: "The leader of E.V. Inc. Llc. He has six lieutenants — each a master of a different dark pattern. Defeat them, and you defeat him. But first, you must train.",
                    choices: [
                        { id: 'begin', text: "I'm ready.", nextScene: 'chapter-end' }
                    ]
                }
            ]
        },

        // ========================================
        // MODULE 1: Introduction to Dark Patterns
        // ========================================
        {
            id: 1,
            title: "The First Lesson",
            type: 'interlude',
            trigger: 'module-1-lesson-1',
            scenes: [
                {
                    id: 'lesson1-1-1',
                    speaker: 'narrator',
                    text: "You emerge from the Grimoire feeling... different. Sharper. Like a fog has lifted from your mind.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson1-1-2' }
                    ]
                },
                {
                    id: 'lesson1-1-2',
                    speaker: 'daniel',
                    text: "You've completed your first lesson. Dark patterns are everywhere, hidden in plain sight. Remember: if a design seems too good to be true, it probably is.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson1-1-3' }
                    ]
                },
                {
                    id: 'lesson1-1-3',
                    speaker: 'mira',
                    text: "That's not enough. 'Too good to be true' isn't a test. We need specifics. You need to know exactly what to look for.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson1-1-4' }
                    ]
                },
                {
                    id: 'lesson1-1-4',
                    speaker: 'daniel',
                    text: "She's right. But so am I. You need instincts and specifics. One without the other is useless.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson1-1-5' }
                    ]
                },
                {
                    id: 'lesson1-1-5',
                    speaker: 'guild',
                    text: "E.V. Inc. Llc has six lieutenants. Each one is a master of a different dark pattern. The first is a scout — a Shadow Scout. They've been watching you since you woke up.",
                    choices: [
                        { id: 'continue', text: "Watching me?", nextScene: 'lesson1-1-6' }
                    ]
                },
                {
                    id: 'lesson1-1-6',
                    speaker: 'mira',
                    text: "Always. They've been watching all of us. That's how they erased me. That's how they erased everyone here.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson1-1-7' }
                    ]
                },
                {
                    id: 'lesson1-1-7',
                    speaker: 'daniel',
                    text: "But they can't erase what they can't catch. You're not caught yet. Prepare yourself.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'chapter-end' }
                    ]
                }
            ]
        },

        // MODULE 1 BOSS FIGHT - Shadow Scout
        {
            id: 2,
            title: "The First Battle",
            type: 'boss',
            trigger: 'module-1-complete',
            isCombat: true,
            enemyId: 'shadow-scout',
            scenes: [
                {
                    id: 'boss1-1',
                    speaker: 'narrator',
                    text: "You step into a darkened alley. The neon lights of the city flicker above. Rain falls in sheets, but it doesn't touch you — a small shield of energy the Guild gave you. Suddenly, a figure drops from the rooftops, landing silently in front of you.",
                    choices: [
                        { id: 'continue', text: "Face them", nextScene: 'boss1-2' }
                    ]
                },
                {
                    id: 'boss1-2',
                    speaker: 'shadow-scout',
                    text: "So you're the new Defender. I've been watching you. I've seen you study. I've seen you learn. And I've seen you fail — over and over again in your training. You think you can stop E.V. Inc. Llc? You're nothing but a novice. A child playing at hero.",
                    choices: [
                        { id: 'respond', text: "I'm not a child. And I'm not alone.", nextScene: 'boss1-3' }
                    ]
                },
                {
                    id: 'boss1-3',
                    speaker: 'mira',
                    text: "Don't listen to him. He's trying to shake you. That's their first trick — fear.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'boss1-4' }
                    ]
                },
                {
                    id: 'boss1-4',
                    speaker: 'daniel',
                    text: "But don't ignore him either. Fear is useful. It keeps you sharp.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'boss1-5' }
                    ]
                },
                {
                    id: 'boss1-5',
                    speaker: 'shadow-scout',
                    text: "The Guild? A ghost story. A whisper in the dark. I've killed a hundred of you. A thousand. You all say the same thing. You all fall the same way. Let's see if you can spot a dark pattern in the wild.",
                    choices: [
                        {
                            id: 'fight',
                            text: "⚔️ Fight!",
                            isCombat: true,
                            enemyId: 'shadow-scout'
                        }
                    ]
                }
            ]
        },

        // ========================================
        // MODULE 2: Visual Manipulation
        // ========================================
        {
            id: 3,
            title: "The Big Bright Button",
            type: 'interlude',
            trigger: 'module-2-lesson-1',
            scenes: [
                {
                    id: 'lesson2-1-1',
                    speaker: 'mira',
                    text: "E.V. Inc. Llc loves big, bright buttons. They know you'll click the shiny one without reading the tiny text next to it. That's the path of least resistance — and they're counting on it.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson2-1-2' }
                    ]
                },
                {
                    id: 'lesson2-1-2',
                    speaker: 'daniel',
                    text: "I've seen people lose their entire savings with one click. A single button — 'Download Now' — and suddenly they've signed up for a subscription they never wanted. The button didn't tell them what would happen. It didn't have to.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson2-1-3' }
                    ]
                },
                {
                    id: 'lesson2-1-3',
                    speaker: 'mira',
                    text: "Because the button was designed not to tell them. It was designed to trick them. There's a difference between a bad choice and a rigged choice.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson2-1-4' }
                    ]
                },
                {
                    id: 'lesson2-1-4',
                    speaker: 'daniel',
                    text: "I know. I've lived it. But not everyone can see the difference in the moment. That's why we teach them.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson2-1-5' }
                    ]
                },
                {
                    id: 'lesson2-1-5',
                    speaker: 'guild',
                    text: "Let's begin with the basics. What makes a button deceptive? How do you spot one in the wild?",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'chapter-end' }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "The Color of Deception",
            type: 'interlude',
            trigger: 'module-2-lesson-2',
            scenes: [
                {
                    id: 'lesson2-2-1',
                    speaker: 'mira',
                    text: "Colors aren't just for decoration. E.V. Inc. Llc uses red and green to manipulate your decisions. Green makes you feel safe; red creates urgency. Your brain reacts before you even think.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson2-2-2' }
                    ]
                },
                {
                    id: 'lesson2-2-2',
                    speaker: 'daniel',
                    text: "I've felt that. I've clicked buttons without knowing why.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson2-2-3' }
                    ]
                },
                {
                    id: 'lesson2-2-3',
                    speaker: 'mira',
                    text: "Everyone has. That's what makes it so effective. And so dangerous.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson2-2-4' }
                    ]
                },
                {
                    id: 'lesson2-2-4',
                    speaker: 'guild',
                    text: "Anger is fuel. But fuel without direction burns the wrong things. Let's focus. When you see a green button, pause. Ask yourself: 'Is this really the best choice? Or is it just the most colorful one?'",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'chapter-end' }
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "The Friendly Face",
            type: 'interlude',
            trigger: 'module-2-lesson-3',
            scenes: [
                {
                    id: 'lesson2-3-1',
                    speaker: 'daniel',
                    text: "Watch out for friendly mascots. E.V. Inc. Llc puts cute characters next to dangerous permissions. When you see a smiling cartoon next to a data-collection form, be suspicious.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson2-3-2' }
                    ]
                },
                {
                    id: 'lesson2-3-2',
                    speaker: 'mira',
                    text: "They used that kitten to convince millions of users to hand over their contact lists. It was one of the largest data breaches in history. And no one noticed.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson2-3-3' }
                    ]
                },
                {
                    id: 'lesson2-3-3',
                    speaker: 'daniel',
                    text: "The kitten was adorable. The breach was not. People trusted the kitten, not realizing it was just a distraction.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson2-3-4' }
                    ]
                },
                {
                    id: 'lesson2-3-4',
                    speaker: 'zoe',
                    text: "I was one of those people. I gave them my contacts. My friends. My family. All because of a cat.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson2-3-5' }
                    ]
                },
                {
                    id: 'lesson2-3-5',
                    speaker: 'daniel',
                    text: "You're not alone. That's why we're here.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson2-3-6' }
                    ]
                },
                {
                    id: 'lesson2-3-6',
                    speaker: 'guild',
                    text: "Don't trust an image just because it's friendly. Trust what it's asking you to do. If the action feels wrong, the image is probably a mask.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'chapter-end' }
                    ]
                }
            ]
        },

        // MODULE 2 BOSS FIGHT - Default Destroyer
        {
            id: 6,
            title: "The Default Destroyer",
            type: 'boss',
            trigger: 'module-2-complete',
            isCombat: true,
            enemyId: 'default-destroyer',
            scenes: [
                {
                    id: 'boss2-1',
                    speaker: 'narrator',
                    text: "You step into a digital marketplace. The air hums with the sound of a thousand buttons, each one begging to be clicked. Colors flash. Images shift. Everywhere you look, there's something trying to grab your attention. In the center of the chaos stands a figure clad in shifting colors — the Default Destroyer.",
                    choices: [
                        { id: 'continue', text: "Face them", nextScene: 'boss2-2' }
                    ]
                },
                {
                    id: 'boss2-2',
                    speaker: 'default-destroyer',
                    text: "You think you can see through my tricks? I've been studying you. I've watched you click the biggest button, choose the prettiest color, trust the friendliest face. You're not a Defender. You're a puppet.",
                    choices: [
                        { id: 'respond', text: "I'm not a puppet anymore.", nextScene: 'boss2-3' }
                    ]
                },
                {
                    id: 'boss2-3',
                    speaker: 'mira',
                    text: "He's trying to undermine you. That's his first trick — erosion of confidence.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'boss2-4' }
                    ]
                },
                {
                    id: 'boss2-4',
                    speaker: 'daniel',
                    text: "But he's also not entirely wrong. You have clicked the wrong buttons. So have I. So has everyone. The difference is that you're learning.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'boss2-5' }
                    ]
                },
                {
                    id: 'boss2-5',
                    speaker: 'default-destroyer',
                    text: "I'll use every color, every image, every button to trap you. Let's begin. Answer my questions, and you might survive. Fail, and you'll never leave this marketplace.",
                    choices: [
                        {
                            id: 'fight',
                            text: "⚔️ Fight!",
                            isCombat: true,
                            enemyId: 'default-destroyer'
                        }
                    ]
                }
            ]
        },

        // ========================================
        // MODULE 3: Information Manipulation
        // ========================================
        {
            id: 7,
            title: "The Echo Chamber",
            type: 'interlude',
            trigger: 'module-3-lesson-1',
            scenes: [
                {
                    id: 'lesson3-1-1',
                    speaker: 'mira',
                    text: "E.V. Inc. Llc pays people to write fake reviews. They call them 'influencers' but they're just puppets. You can spot them by their hollow praise and lack of real details.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson3-1-2' }
                    ]
                },
                {
                    id: 'lesson3-1-2',
                    speaker: 'daniel',
                    text: "I once saw a product with ten thousand 5-star reviews. Every single one was written in the same style, using the same phrases. 'Life-changing,' they said. 'Best purchase ever.' None of them mentioned what the product actually did. It was all noise.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson3-1-3' }
                    ]
                },
                {
                    id: 'lesson3-1-3',
                    speaker: 'mira',
                    text: "Because they weren't written by real people. They were written by bots. Or by people paid to write them. Either way, they were designed to deceive.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson3-1-4' }
                    ]
                },
                {
                    id: 'lesson3-1-4',
                    speaker: 'daniel',
                    text: "I looked for the details. Real reviews have specifics. 'Battery lasts 8 hours,' one might say. 'Shipping took 3 days,' another might mention. Fake reviews are vague. They shout without saying anything.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson3-1-5' }
                    ]
                },
                {
                    id: 'lesson3-1-5',
                    speaker: 'guild',
                    text: "Always look for the details. That's how you spot a fake.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'chapter-end' }
                    ]
                }
            ]
        },
        {
            id: 8,
            title: "The Fine Print",
            type: 'interlude',
            trigger: 'module-3-lesson-2',
            scenes: [
                {
                    id: 'lesson3-2-1',
                    speaker: 'daniel',
                    text: "The most important information is often the smallest text. E.V. Inc. Llc buries the truth in tiny fonts, hoping you won't read it. Always check the fine print.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson3-2-2' }
                    ]
                },
                {
                    id: 'lesson3-2-2',
                    speaker: 'mira',
                    text: "I know someone who signed up for a 'free' trial. The word 'free' was in giant letters. The words 'auto-renews at $99/month' were in 6-point font at the bottom of the page. He didn't see it. He paid for a year before he realized.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson3-2-3' }
                    ]
                },
                {
                    id: 'lesson3-2-3',
                    speaker: 'daniel',
                    text: "That was me. You're talking about me.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson3-2-4' }
                    ]
                },
                {
                    id: 'lesson3-2-4',
                    speaker: 'mira',
                    text: "...I know. I'm sorry. But it's a good example.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson3-2-5' }
                    ]
                },
                {
                    id: 'lesson3-2-5',
                    speaker: 'daniel',
                    text: "It is. And I'm not ashamed of it. I was tricked. That doesn't make me stupid. It makes me human.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson3-2-6' }
                    ]
                },
                {
                    id: 'lesson3-2-6',
                    speaker: 'guild',
                    text: "If something feels hidden, it probably is. If something feels too small to read, it's probably important.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'chapter-end' }
                    ]
                }
            ]
        },
        {
            id: 9,
            title: "The Hidden Path",
            type: 'interlude',
            trigger: 'module-3-lesson-3',
            scenes: [
                {
                    id: 'lesson3-3-1',
                    speaker: 'mira',
                    text: "E.V. Inc. Llc knows most people take the path of least resistance. They bury the 'cancel' button three menus deep while making 'upgrade' impossible to miss. That's layout manipulation.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson3-3-2' }
                    ]
                },
                {
                    id: 'lesson3-3-2',
                    speaker: 'daniel',
                    text: "I spent three hours trying to cancel a subscription once. I had to call a phone number, wait on hold, and then argue with a representative. Meanwhile, the 'upgrade to premium' button was on every single page. The layout told me what they wanted me to do.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson3-3-3' }
                    ]
                },
                {
                    id: 'lesson3-3-3',
                    speaker: 'mira',
                    text: "And what did you do?",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson3-3-4' }
                    ]
                },
                {
                    id: 'lesson3-3-4',
                    speaker: 'daniel',
                    text: "I canceled it anyway. It took time, but I won. Never let the layout decide for you. If something is hard to find, it's because someone wants it that way. Fight the design. Choose your own path.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson3-3-5' }
                    ]
                },
                {
                    id: 'lesson3-3-5',
                    speaker: 'mira',
                    text: "...Good. That's the right answer.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson3-3-6' }
                    ]
                },
                {
                    id: 'lesson3-3-6',
                    speaker: 'guild',
                    text: "That's the spirit. Now — let's test what you've learned.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'chapter-end' }
                    ]
                }
            ]
        },

        // MODULE 3 BOSS FIGHT - Cost Collector
        {
            id: 10,
            title: "The Cost Collector",
            type: 'boss',
            trigger: 'module-3-complete',
            isCombat: true,
            enemyId: 'cost-collector',
            scenes: [
                {
                    id: 'boss3-1',
                    speaker: 'narrator',
                    text: "You enter a vast chamber filled with floating numbers and contracts. Everywhere you look, there are prices, fees, and terms written in different sizes. Some are huge. Some are so small they're invisible. At the center of it all stands the Cost Collector — a figure made of shadow and fine print.",
                    choices: [
                        { id: 'continue', text: "Face them", nextScene: 'boss3-2' }
                    ]
                },
                {
                    id: 'boss3-2',
                    speaker: 'cost-collector',
                    text: "You've made it through the defaults and visuals, but now you face me. I am the Cost Collector. I have buried the truth in a thousand pages of fine print. Let's see if you can find it.",
                    choices: [
                        { id: 'respond', text: "I'll find the truth.", nextScene: 'boss3-3' }
                    ]
                },
                {
                    id: 'boss3-3',
                    speaker: 'mira',
                    text: "Don't let him overwhelm you. Focus on one thing at a time.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'boss3-4' }
                    ]
                },
                {
                    id: 'boss3-4',
                    speaker: 'daniel',
                    text: "But don't ignore the whole picture. See the pattern, not just the parts.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'boss3-5' }
                    ]
                },
                {
                    id: 'boss3-5',
                    speaker: 'cost-collector',
                    text: "Listen to them bicker. They can't even agree on how to help you. How do you expect to win?",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'boss3-6' }
                    ]
                },
                {
                    id: 'boss3-6',
                    speaker: 'mira',
                    text: "We don't need to agree. We just need to fight.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'boss3-7' }
                    ]
                },
                {
                    id: 'boss3-7',
                    speaker: 'daniel',
                    text: "And we've been fighting longer than you've been alive.",
                    choices: [
                        {
                            id: 'fight',
                            text: "⚔️ Fight!",
                            isCombat: true,
                            enemyId: 'cost-collector'
                        }
                    ]
                }
            ]
        },

        // ========================================
        // MODULE 4: Interaction Manipulation
        // ========================================
        {
            id: 11,
            title: "The Clock is Ticking",
            type: 'interlude',
            trigger: 'module-4-lesson-1',
            scenes: [
                {
                    id: 'lesson4-1-1',
                    speaker: 'daniel',
                    text: "Motion captures our attention automatically. E.V. Inc. Llc uses countdown timers and flashy animations to create urgency. They want you to act before you think.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson4-1-2' }
                    ]
                },
                {
                    id: 'lesson4-1-2',
                    speaker: 'mira',
                    text: "I once saw a timer that reset every time the page refreshed. It said 'Limited Time Offer: 5 minutes left!' But it was always five minutes. It was never going to end. The urgency was fake. The timer was a lie.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson4-1-3' }
                    ]
                },
                {
                    id: 'lesson4-1-3',
                    speaker: 'daniel',
                    text: "How did you figure it out?",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson4-1-4' }
                    ]
                },
                {
                    id: 'lesson4-1-4',
                    speaker: 'mira',
                    text: "I refreshed the page. The timer reset. If a timer resets, it's not real. If motion distracts you, it's not helping. Watch for motion that rushes you. It's a sign you're being manipulated.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson4-1-5' }
                    ]
                },
                {
                    id: 'lesson4-1-5',
                    speaker: 'guild',
                    text: "Focus. Watch for motion that rushes you. That's the lesson.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'chapter-end' }
                    ]
                }
            ]
        },
        {
            id: 12,
            title: "The Silent Choice",
            type: 'interlude',
            trigger: 'module-4-lesson-2',
            scenes: [
                {
                    id: 'lesson4-2-1',
                    speaker: 'mira',
                    text: "Most people never change default settings. E.V. Inc. Llc knows this. They make the default choice benefit them, knowing you'll probably just click 'next' without thinking.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson4-2-2' }
                    ]
                },
                {
                    id: 'lesson4-2-2',
                    speaker: 'daniel',
                    text: "I once saw a sign-up form with eighteen pre-checked boxes. Eighteen. Most people just clicked 'submit' without realizing what they agreed to.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson4-2-3' }
                    ]
                },
                {
                    id: 'lesson4-2-3',
                    speaker: 'mira',
                    text: "That's overwhelming by design. E.V. Inc. Llc wants you to give up. They want you to click 'accept all' because reading everything would take too long.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson4-2-4' }
                    ]
                },
                {
                    id: 'lesson4-2-4',
                    speaker: 'daniel',
                    text: "Don't let them win. Take the time. Uncheck the boxes. Make your own choices.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson4-2-5' }
                    ]
                },
                {
                    id: 'lesson4-2-5',
                    speaker: 'guild',
                    text: "Take the time. Make your own choices.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'chapter-end' }
                    ]
                }
            ]
        },
        {
            id: 13,
            title: "The Consent Trap",
            type: 'interlude',
            trigger: 'module-4-lesson-3',
            scenes: [
                {
                    id: 'lesson4-3-1',
                    speaker: 'daniel',
                    text: "Consent should be informed. But E.V. Inc. Llc has turned it into a trap. They make 'accept all' easy and 'manage settings' impossible. Most people click the easy button and move on.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson4-3-2' }
                    ]
                },
                {
                    id: 'lesson4-3-2',
                    speaker: 'mira',
                    text: "I've seen cookie banners with 'Accept All' in bright green and 'Manage Settings' in gray, hidden in the corner. The design tells you which choice is preferred. It's not a choice if you're being pushed toward one option.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson4-3-3' }
                    ]
                },
                {
                    id: 'lesson4-3-3',
                    speaker: 'daniel',
                    text: "So what can we do?",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson4-3-4' }
                    ]
                },
                {
                    id: 'lesson4-3-4',
                    speaker: 'mira',
                    text: "Take your time. Read the options. If you can't understand the terms, don't agree. Consent means knowing what you're agreeing to. If you don't know, it's not consent. It's just manipulation.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson4-3-5' }
                    ]
                },
                {
                    id: 'lesson4-3-5',
                    speaker: 'guild',
                    text: "Consent means knowing. Don't agree to what you don't understand.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'chapter-end' }
                    ]
                }
            ]
        },

        // MODULE 4 BOSS FIGHT - Urgency Wraith
        {
            id: 14,
            title: "The Urgency Wraith",
            type: 'boss',
            trigger: 'module-4-complete',
            isCombat: true,
            enemyId: 'urgency-wraith',
            scenes: [
                {
                    id: 'boss4-1',
                    speaker: 'narrator',
                    text: "You enter a chamber where time itself seems to speed up and slow down. Clocks tick backwards. Timers reset. And in the center stands a translucent figure — the Urgency Wraith.",
                    choices: [
                        { id: 'continue', text: "Face them", nextScene: 'boss4-2' }
                    ]
                },
                {
                    id: 'boss4-2',
                    speaker: 'urgency-wraith',
                    text: "You've learned about motion and defaults and consent. But knowing isn't enough. You must resist the pressure. The countdown. The urgency. Let's see if you can stay calm under fire.",
                    choices: [
                        { id: 'respond', text: "I'm not afraid of a timer.", nextScene: 'boss4-3' }
                    ]
                },
                {
                    id: 'boss4-3',
                    speaker: 'mira',
                    text: "Stay calm. Panic is their weapon. Calm is yours.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'boss4-4' }
                    ]
                },
                {
                    id: 'boss4-4',
                    speaker: 'daniel',
                    text: "That's easier said than done. Panic is natural. It's human. But we learn to manage it. That's the fight.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'boss4-5' }
                    ]
                },
                {
                    id: 'boss4-5',
                    speaker: 'urgency-wraith',
                    text: "We'll see. I'll rush you. I'll pressure you. I'll make you feel like you're running out of time. But if you can answer my questions correctly, you might survive the storm.",
                    choices: [
                        {
                            id: 'fight',
                            text: "⚔️ Fight!",
                            isCombat: true,
                            enemyId: 'urgency-wraith'
                        }
                    ]
                }
            ]
        },

        // ========================================
        // MODULE 5: Trust & Authority
        // ========================================
        {
            id: 15,
            title: "The False Shield",
            type: 'interlude',
            trigger: 'module-5-lesson-1',
            scenes: [
                {
                    id: 'lesson5-1-1',
                    speaker: 'daniel',
                    text: "Trust badges are symbols that communicate trustworthiness. But E.V. Inc. Llc uses them as decoration. They put fake locks and shields on their websites to make you feel safe.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson5-1-2' }
                    ]
                },
                {
                    id: 'lesson5-1-2',
                    speaker: 'mira',
                    text: "I once saw a website with a gold badge that said '100% Secure.' It looked official. But when I clicked on it, nothing happened. There was no certification. No link. No proof. It was just an image. A lie.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson5-1-3' }
                    ]
                },
                {
                    id: 'lesson5-1-3',
                    speaker: 'daniel',
                    text: "That's sneaky.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson5-1-4' }
                    ]
                },
                {
                    id: 'lesson5-1-4',
                    speaker: 'mira',
                    text: "It is. But now you know. Real trust badges link to real certifications. If it doesn't link, it's not real. If you can't verify it, don't trust it. Trust must be earned, not just signaled.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'chapter-end' }
                    ]
                }
            ]
        },

        // MODULE 5 BOSS FIGHT - Shadow Agent
        {
            id: 16,
            title: "The Shadow Agent",
            type: 'boss',
            trigger: 'module-5-complete',
            isCombat: true,
            enemyId: 'shadow-agent',
            scenes: [
                {
                    id: 'boss5-1',
                    speaker: 'narrator',
                    text: "You enter a grand hall. Every wall is covered in badges, certificates, and official-looking seals. But something feels wrong. The badges are too shiny. The seals are too perfect. In the center, a figure in a dark suit — the Shadow Agent.",
                    choices: [
                        { id: 'continue', text: "Face them", nextScene: 'boss5-2' }
                    ]
                },
                {
                    id: 'boss5-2',
                    speaker: 'shadow-agent',
                    text: "You've done well to make it this far. But you're in my domain now. Here, trust is currency. And I've been counterfeiting it for years. Let's see if you can tell the real from the fake.",
                    choices: [
                        { id: 'respond', text: "I'll know the difference.", nextScene: 'boss5-3' }
                    ]
                },
                {
                    id: 'boss5-3',
                    speaker: 'mira',
                    text: "Don't trust the symbols. Trust the evidence. If you can't verify it, it's not real.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'boss5-4' }
                    ]
                },
                {
                    id: 'boss5-4',
                    speaker: 'daniel',
                    text: "And don't let them rush you. They want you to trust without thinking. Take your time. Verify everything.",
                    choices: [
                        {
                            id: 'fight',
                            text: "⚔️ Fight!",
                            isCombat: true,
                            enemyId: 'shadow-agent'
                        }
                    ]
                }
            ]
        },

        // ========================================
        // MODULE 6: Final Assessment
        // ========================================
        {
            id: 17,
            title: "The Final Lesson",
            type: 'interlude',
            trigger: 'module-6-lesson-1',
            scenes: [
                {
                    id: 'lesson6-1-1',
                    speaker: 'guild',
                    text: "You've learned so much. You've faced shadows, colors, lies, and pressure. But now, the final challenge awaits. The Shadow Lord himself.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'lesson6-1-2' }
                    ]
                },
                {
                    id: 'lesson6-1-2',
                    speaker: 'mira',
                    text: "I've watched you grow from a novice into a true Defender. You've spotted what others missed. You've resisted what others fell for. You're ready. But the Shadow Lord won't make it easy.",
                    choices: [
                        { id: 'continue', text: "What do I need to know?", nextScene: 'lesson6-1-3' }
                    ]
                },
                {
                    id: 'lesson6-1-3',
                    speaker: 'daniel',
                    text: "You need to know that everything you've learned matters. Every lesson. Every trick. Every test. The Shadow Lord will try to use them all against you. But you'll see through them. Because you're a Defender now.",
                    choices: [
                        { id: 'continue', text: "What if I fail?", nextScene: 'lesson6-1-4' }
                    ]
                },
                {
                    id: 'lesson6-1-4',
                    speaker: 'guild',
                    text: "You won't. We've seen something in you — something we haven't seen in a long time. Hope.",
                    choices: [
                        { id: 'continue', text: "Let's finish this", nextScene: 'chapter-end' }
                    ]
                }
            ]
        },

        // MODULE 6 FINAL BOSS FIGHT - Shadow Lord
        {
            id: 18,
            title: "The Shadow Lord",
            type: 'boss',
            trigger: 'module-6-complete',
            isCombat: true,
            enemyId: 'shadow-lord',
            scenes: [
                {
                    id: 'boss6-1',
                    speaker: 'narrator',
                    text: "You enter a throne room made entirely of shadows. The walls shift and breathe. The floor is a mirror that reflects nothing. And at the center, on a dark throne, sits the Shadow Lord. He is calm. Collected. Powerful. His eyes are like black holes that pull you in.",
                    choices: [
                        { id: 'continue', text: "Stand tall", nextScene: 'boss6-2' }
                    ]
                },
                {
                    id: 'boss6-2',
                    speaker: 'shadow-lord',
                    text: "So. You've made it to me at last. You've defeated my scouts, my destroyer, my collector, my wraith, my agent. I should be impressed. And yet... I've watched every move you've made. You're still just one person against an empire.",
                    choices: [
                        { id: 'respond', text: "One person is enough.", nextScene: 'boss6-3' }
                    ]
                },
                {
                    id: 'boss6-3',
                    speaker: 'shadow-lord',
                    text: "You're not even a person. You're a memory of a memory. A ghost made of ghosts. I've erased hundreds of you. Thousands. And you keep coming back. Why?",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'boss6-4' }
                    ]
                },
                {
                    id: 'boss6-4',
                    speaker: 'mira',
                    text: "Because we're not one person. We're everyone. And we don't forget.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'boss6-5' }
                    ]
                },
                {
                    id: 'boss6-5',
                    speaker: 'shadow-lord',
                    text: "Mira. Daniel. The others. I remember every single one of you. You think I don't? You think anonymity makes you strong? It makes you nothing. No one to mourn you. No one to remember.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'boss6-6' }
                    ]
                },
                {
                    id: 'boss6-6',
                    speaker: 'daniel',
                    text: "You're wrong. We remember each other. That's enough.",
                    choices: [
                        { id: 'continue', text: "Continue", nextScene: 'boss6-7' }
                    ]
                },
                {
                    id: 'boss6-7',
                    speaker: 'shadow-lord',
                    text: "The Guild isn't a resistance. It's a graveyard. And I built it. But fine. You want to prove yourself? Let's end this. One question at a time. I'll ask. You answer. If you're right, you might win. If you're wrong, you'll become part of my collection.",
                    choices: [
                        {
                            id: 'fight',
                            text: "⚔️ Fight!",
                            isCombat: true,
                            enemyId: 'shadow-lord'
                        }
                    ]
                }
            ]
        }
    ]
};

// Helper function to get story chapter by trigger
export const getStoryChapter = (trigger) => {
    return storyData.chapters.find(c => c.trigger === trigger);
};

// Helper function to check if chapter is completed
export const isChapterCompleted = (userData, chapterId) => {
    return userData?.storyProgress?.[chapterId] || false;
};