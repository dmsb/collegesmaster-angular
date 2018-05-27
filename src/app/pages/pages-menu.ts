import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
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
        title: 'Edit',
        link: '/pages/challenges/edit-challenge',
      }
    ],
  }
];
