import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionImpl } from '../../domain-model/impl/question-impl';

@Component({
  selector: 'add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  modalHeader: string;
  question: QuestionImpl;

  ngOnInit() {
  }

  constructor(private activeModal: NgbActiveModal) {
    this.question = new QuestionImpl;
  }

  closeModal() {
    this.activeModal.close();
  }

  addQuestion() {

  }
}
