import { Activity } from './acivity';

export const ACTIVITIES: Activity[] = [
    {
        id: 1,
        name: 'Nina Jones',
        senderPhoto:'../assets/users/user2.png',
        activityName: 'added a new project',
        activityTitle: 'Free UI Kit',
        activityTimeRef: 'Just now'
    },
    {
        id: 2,
        name: 'James Smith',
        senderPhoto: '../assets/users/user3.png',
        activityName: 'commented project',
        activityTitle: 'Free PSD Template',
        activityTimeRef: '40 minutes ago'
    },
    {
        id: 3,
        name: 'Alex Clooney',
        senderPhoto: '../assets/users/user4.png',
        activityName: 'completed tesk',
        activityTitle: 'Symu Website',
        activityTimeRef: '1 hour ago'
    },
    {
        id: 4,
        name: 'Alex Spears',
        senderPhoto: '../assets/users/user5.png',
        activityName: 'added a new project',
        activityTitle: 'Free PSD (...)',
        activityTimeRef: '3 hours ago'
    }
]