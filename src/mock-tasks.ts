import { Task } from './task';

export const TASKS: Task[] = [
    {
        id: 1,
        title: 'New website for Symu.co',
        days: 5,
        overdueStatus: 'delays',
        personName : './assets/n.type.png' 
      },
      {
        id: 2,
        title: 'Free business PSD Template',
        days: 2,
        overdueStatus: 'delays',
        personName : './assets/f.type.png' 
      },
      {
        id: 3,
        title: 'New logo for JCD.pl',
        days: 5,
        overdueStatus: 'left',
        personName : './assets/n.type.png'
      },
      {
        id: 4,
        title: 'Free Icon set vol.3',
        days: 10,
        overdueStatus: 'left',
        personName : './assets/f.type.png'  
      }
];
