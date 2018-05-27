import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'MENU',
    group: true,
  },
  {
    title: 'Challenges',
    icon: 'nb-keypad',
    link: '/pages/challenges',
    children: [
      {
        title: 'Create',
        link: '/pages/challenges/create-challenge',
      },
      {
        title: 'Show All',
        link: '/pages/challenges/edit-challenge',
      }
    ],
  },
  {
    title: 'Sing out',
    icon: 'nb-keypad',
    link: '/auth'
  }
];
