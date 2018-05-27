import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ViewCell, DefaultEditor } from 'ng2-smart-table';

@Component({
  selector: 'add-question',
  template: `<button class="btn btn-block btn-hero-success" (click)="onClickEvent()">Add Question</button>`
})
export class AddQuestionComponent extends DefaultEditor implements AfterViewInit {

  constructor() {
    super();
  }

  ngAfterViewInit() {

  }

  onClickEvent(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
