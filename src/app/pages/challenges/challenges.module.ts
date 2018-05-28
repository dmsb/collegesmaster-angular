import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengesComponent } from './challenges.component';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AddQuestionButtonComponent } from './add-question-button/add-question-button.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReplyChallengeButtonComponent } from './reply-challenge-button/reply-challenge-button.component';
import { ReplyChallengeComponent } from './reply-challenge/reply-challenge.component';
import { MyChallengesComponent } from './my-challenges/my-challenges.component';
import { ChallengeListingComponent } from './challenge-listing/challenge-listing.component';

@NgModule({
  imports: [
    CommonModule,
    ChallengesRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NgbModalModule
  ],
  declarations: [
    ChallengesComponent,
    AddQuestionComponent,
    AddQuestionButtonComponent,
    ReplyChallengeButtonComponent,
    ReplyChallengeComponent,
    MyChallengesComponent,
    ChallengeListingComponent]
})
export class ChallengesModule { }
