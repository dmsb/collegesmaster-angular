
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionImpl } from '../domain-model/impl/question-impl';
import { OnInit, Component } from '@angular/core';
import { CalculedQuestionImpl } from '../domain-model/impl/calculed-question-impl';
import { AlternativeImpl } from '../domain-model/impl/alternative-impl';
import { QuestionWithAlternativesImpl } from '../domain-model/impl/question-with-alternatives-impl';
import { Alternative } from '../domain-model/alternative';
import { Letter } from '../domain-model/enums/letter';

enum QuestionType {
  MultipleChoice,
  CheckBox,
  CalculationAnswer
}

@Component({
  selector: 'add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']  
})
export class AddQuestionComponent implements OnInit {

  radioModel = 'left';
  modalHeader: string;
  question: QuestionImpl;
  
  rightAnswer: number;
  alternatives: Array<Alternative>;

  questionTypes = QuestionType;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.question = new QuestionImpl;
    
    this.alternatives = new Array;
    this.alternatives[0].letter = Letter.A;
    this.alternatives[1].letter = Letter.B;
    this.alternatives[2].letter = Letter.C;
    this.alternatives[3].letter = Letter.D;
    
  }
  closeModal() {
    this.activeModal.close();
  }

  updateAlternativesTemplate(type: QuestionType) {
    const currentQuestion: QuestionImpl = this.question;
    if(type = QuestionType.CalculationAnswer) {
      this.question = new CalculedQuestionImpl(currentQuestion);
    } else if(type = QuestionType.MultipleChoice) {
      this.question = new QuestionWithAlternativesImpl(currentQuestion);
    }
  }
}
