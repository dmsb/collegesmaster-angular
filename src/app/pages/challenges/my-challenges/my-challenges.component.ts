import { Component, OnInit } from '@angular/core';
import { AddQuestionButtonComponent } from '../add-question-button/add-question-button.component';

@Component({
  selector: 'my-challenges',
  templateUrl: './my-challenges.component.html',
  styleUrls: ['./my-challenges.component.scss']
})
export class MyChallengesComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }

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
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
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
        title: 'Add Question',
        type: 'custom',
        renderComponent: AddQuestionButtonComponent,
        addable : false,
        editable : false,
        filter: false,
        editor: {
          type: 'custom',
          component: AddQuestionButtonComponent
        }
      }
    }
  }

  onConfirmCreateEvent(event):void  {
    if (window.confirm('Are you sure you want to create?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
