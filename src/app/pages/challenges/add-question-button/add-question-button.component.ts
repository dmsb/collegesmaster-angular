import { Component, AfterViewInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddQuestionComponent } from '../add-question/add-question.component';

@Component({
  selector: 'add-question-button',
  template: `<button class="btn btn-block btn-hero-success" (click)="onClickEvent($event)">Add Question</button>`
})
export class AddQuestionButtonComponent extends DefaultEditor implements AfterViewInit {

  constructor(private modalService: NgbModal) {
    super();
  }

  ngAfterViewInit() { }

  onClickEvent(event) {
    const activeModal = this.modalService.open(AddQuestionComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Add Question';
  }
}