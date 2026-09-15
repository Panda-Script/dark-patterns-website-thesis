// src/data/tutorialData.js

export const tutorials = {
    dashboard: {
        id: 'dashboard',
        title: 'Dashboard',
        steps: [
            {
                title: 'Welcome to your Dashboard',
                text: 'This is your command center. Check your stats, open the Grimoire, and start a mission.'
            },
            {
                title: 'Missions',
                text: 'Click any mission card to continue your training. Locked missions unlock as you progress.'
            },
            {
                title: 'The Grimoire',
                text: 'Click the Grimoire card to open your personal archive of knowledge, abilities, and badges.'
            }
        ]
    },
    modules: {
        id: 'modules',
        title: 'Missions',
        steps: [
            {
                title: 'Your Missions',
                text: 'Each mission covers a different dark pattern. Complete them in order to unlock the next.'
            },
            {
                title: 'Lessons',
                text: 'Click a mission to see its lessons. Complete each lesson and its quiz to finish the mission.'
            }
        ]
    },
    lesson: {
        id: 'lesson',
        title: 'Lesson',
        steps: [
            {
                title: 'Read the Concept',
                text: 'Each lesson starts with an explanation of the dark pattern you\'re learning about.'
            },
            {
                title: 'See Examples',
                text: 'You\'ll see side-by-side examples of good design vs. dark patterns.'
            },
            {
                title: 'Practice',
                text: 'Test yourself with an interactive example. Then take the quiz to complete the lesson.'
            }
        ]
    },
    quiz: {
        id: 'quiz',
        title: 'Quiz',
        steps: [
            {
                title: 'Answer Questions',
                text: 'Pick the best answer for each question. You need 60% or higher to pass.'
            },
            {
                title: 'Learn from Feedback',
                text: 'Each answer gives you immediate feedback, so you learn even when you get one wrong.'
            }
        ]
    },
    combat: {
        id: 'combat',
        title: 'Combat',
        steps: [
            {
                title: 'Your Turn',
                text: 'Click "Attack" to launch an attack. You\'ll answer a question to deal damage.'
            },
            {
                title: 'Correct = Full Damage',
                text: 'Get the question right for full damage. Get it wrong and you\'ll deal half damage.'
            },
            {
                title: 'Defeat the Boss',
                text: 'Defeat the boss to earn XP and unlock a new ability for your Grimoire.'
            }
        ]
    },
    grimoire: {
        id: 'grimoire',
        title: 'The Grimoire',
        steps: [
            {
                title: 'Your Personal Archive',
                text: 'The Grimoire holds everything about your journey — profile, logs, badges, and abilities.'
            },
            {
                title: 'Explore the Tabs',
                text: 'Click the tabs on the side to navigate between Profile, Archive, Badges, and Abilities.'
            }
        ]
    },
    badges: {
        id: 'badges',
        title: 'Badges',
        steps: [
            {
                title: 'Earn Badges',
                text: 'Complete lessons, pass quizzes, and defeat bosses to earn badges. Collect them all!'
            },
            {
                title: 'Locked vs. Earned',
                text: 'Earned badges show in color. Locked badges show what you need to do to unlock them.'
            }
        ]
    },
    profile: {
        id: 'profile',
        title: 'Profile',
        steps: [
            {
                title: 'Your Identity',
                text: 'This is where you can see your progress and change your settings.'
            },
            {
                title: 'Settings',
                text: 'Adjust your theme, notifications, and other preferences here.'
            }
        ]
    }
};