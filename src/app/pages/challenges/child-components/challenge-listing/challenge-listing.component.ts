import { Component, OnInit } from '@angular/core';
import { ReplyChallengeButtonComponent } from './reply-challenge-button/reply-challenge-button.component';

@Component({
  selector: 'challenge-listing',
  templateUrl: './challenge-listing.component.html'
})
export class ChallengeListingComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  disciplineList = [
    { id: '1', name: 'Corporative Development' },
    { id: '2', name: 'Requeriments Engineering' },
    { id: '3', name: 'Mobile Development' }
  ];

  types = [
    { value: 'Kill Faster', title: 'Kill Faster' },
    { value: 'Deadline', title: 'Deadline' },
    { value: 'Activity', title: 'Activity' }
  ]

  source = [
    {
      title: 'Challenge 1',
      discipline: 'Corporative Development',
      submitted: 'No',
      type: 'Kill Faster',
      totalPontuation: 10,
    },
    {
      title: 'Challenge 2',
      discipline: 'Soft. Engeen',
      submitted: 'No',
      type: 'Deadline',
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
      },
      submitted: {
        title: 'Submitted',
        editor: {
          type: 'list',
          config: {
            list: [
              { value: 'Yes', title: 'Yes' },
              { value: 'No', title: 'No' }
            ]
          },
        },
        filter: {
          type: 'list',
          config: {
            selectText: '---Select---',
            list: [
              { value: 'Yes', title: 'Yes' },
              { value: 'No', title: 'No' }
            ]
          },
        },
      },
      type: {
        title: 'Type',
        editor: {
          type: 'list',
          config: {
            list: this.types
          },
        },
        filter: {
          type: 'list',
          config: {
            selectText: '---Select---',
            list: this.types
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
