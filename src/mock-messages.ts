import { Massage } from './message';

export const MESSAGES: Massage[] = [
    {
        id:1,
        senderName : "Nina Jones",
        senderPhoto: '../assets/users/user2.png',
        readStatus: false,
        messegeSendTime : '5 minutes ago' ,
        messageContent :"Hey You! It/'s me again :-) I attached new (...)"
    },
    {
        id : 2,
        senderName : 'Nina Jones',
        senderPhoto: '../assets/users/user2.png',
        readStatus: false,
        messegeSendTime : 'About 20 hours ago' ,
        messageContent : 'Hey! I attached some new PSD files for (...)' 
    },
    {
        id : 3,
        senderName : 'James Smith',
        senderPhoto: '../assets/users/user3.png',
        readStatus: true,
        messegeSendTime : '2 days ago' ,
        messageContent : 'Good morning, you are fired!' 
    },
    {
        id : 4,
        senderName : 'Nina Jones',
        senderPhoto: '../assets/users/user2.png',
        readStatus: true,
        messegeSendTime : 'About 2 weeks ago' ,
        messageContent : 'Hello! Could you bring me coffee please?' 
    }
]