import { Component, OnInit } from '@angular/core';
import { ReplyChallengeButtonComponent } from '../reply-challenge-button/reply-challenge-button.component';

@Component({
  selector: 'challenge-listing',
  templateUrl: './challenge-listing.component.html',
  styleUrls: ['./challenge-listing.component.scss']
})
export class ChallengeListingComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  disciplineList = [
    { value: '1', title: 'Corporative Development' },
    { value: '2', title: 'Requeriments Engineering' },
    { value: '3', title: 'Mobile Development' }
  ];

  data = [
    {
      title: 'Challenge 1',
      discipline: 'Corporative Development',
      submitted: 'False',
      totalPontuation: 10,
    },
    {
      title: 'Challenge 2',
      discipline: 'Soft. Engeen',
      submitted: 'True',
      totalPontuation: 20,
    }
  ]

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      title: {
        title: 'Title'
      },
      discipline: {
        title: 'Discipline',
        editor: {
          type: 'list',
          config: {
            list: this.disciplineList
          },
        },
        filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: this.disciplineList
          },
        },
      },
      submitted: {
        title: 'Submitted',
        editor: {
          type: 'list',
          config: {
            list: [
              { value: true, title: 'Yes' },
              { value: false, title: 'No' }
            ]
          },
        },
        filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: [
              { value: true, title: 'Yes' },
              { value: false, title: 'No' }
            ]
          },
        },
      },
      totalPontuation: {
        title: 'Total pontuation',
        addable: false,
        editable: false
      },
      addQuestionButton: {
        title: 'Reply',
        type: 'custom',
        renderComponent: ReplyChallengeButtonComponent,
        addable : false,
        editable : false,
        filter: false,
        editor: {
          type: 'custom',
          component: ReplyChallengeButtonComponent
        }
      }
    }
  }
}
