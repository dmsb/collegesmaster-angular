import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NbCardModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ChallengesComponent } from './challenges.component';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AddQuestionButtonComponent } from './my-challenges/add-question-button/add-question-button.component';
import { ReplyChallengeButtonComponent } from './challenge-listing/reply-challenge-button/reply-challenge-button.component';
import { ReplyChallengeComponent } from './reply-challenge/reply-challenge.component';
import { MyChallengesComponent } from './my-challenges/my-challenges.component';
import { ChallengeListingComponent } from './challenge-listing/challenge-listing.component';
import { PipeModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChallengesRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NgbDropdownModule,
    PipeModule
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
