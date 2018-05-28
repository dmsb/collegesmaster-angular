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
    children: [
      {
        //Alunos responder
        title: 'Show All',
        link: '/pages/challenges/challenge-listing',
      },
      {
        //Criação de Desafios
        title: 'My Challenges',
        link: '/pages/challenges/my-challenges',
      },
      {
        //Visualização de desafios respondidos
        title: 'My Results',
        link: '/pages/challenges/replied-challenges',
      }
    ],
  },
  {
    title: 'Ranking',
    icon: 'nb-keypad',
    children: [ 
      {
         //Tela de ranking geral do curso
         title: 'Course Ranking',
         link: '/pages/ranking/course-ranking',
      },
      {
        //Tela de ranking por disciplina
        title: 'Discipline Ranking',
        link: '/pages/ranking/discipline-ranking',
     },

    ]
  },
  {
    title: 'Sing out',
    icon: 'nb-keypad',
    link: '/auth'
  }
];
