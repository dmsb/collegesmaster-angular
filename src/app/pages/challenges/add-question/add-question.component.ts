
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionImpl } from '../domain-model/impl/question-impl';
import { OnInit, Component } from '@angular/core';
import { CalculedQuestionImpl } from '../domain-model/impl/calculed-question-impl';
import { AlternativeImpl } from '../domain-model/impl/alternative-impl';
import { QuestionWithAlternativesImpl } from '../domain-model/impl/question-with-alternatives-impl';
import { Alternative } from '../domain-model/alternative';
import { Letter } from '../domain-model/enums/letter';

enum QuestionType {
  MultipleChoice = "Multiple Choice",
  CheckBox = "Checkbox",
  CalculationAnswer = "Calculation Answer"
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
  alternatives: Alternative[];
  letters = Letter;
  questionTypes = QuestionType;
  selectedQuestionType: string;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.question = new QuestionImpl;
    
    this.alternatives = [];

    this.alternatives[0] = new AlternativeImpl();
    this.alternatives[0].letter = Letter.A;

    this.alternatives[1] = new AlternativeImpl();
    this.alternatives[1].letter = Letter.B;
    
    this.alternatives[2] = new AlternativeImpl();
    this.alternatives[2].letter = Letter.C;
    
    this.alternatives[3] = new AlternativeImpl();
    this.alternatives[3].letter = Letter.D;
    this.selectedQuestionType = QuestionType.MultipleChoice;
    
  }
  closeModal() {
    this.activeModal.close();
  }

  updateAlternativesTemplate(value: string) {
    const currentQuestion: QuestionImpl = this.question;
    if(value == QuestionType.CalculationAnswer) {
      this.question = new CalculedQuestionImpl(currentQuestion);
    } else if(value == QuestionType.MultipleChoice) {
      this.question = new QuestionWithAlternativesImpl(currentQuestion);
    }
    this.selectedQuestionType = value;
  }
}
