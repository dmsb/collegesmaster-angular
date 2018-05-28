import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NbCardModule } from '@nebular/theme';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ChallengesComponent } from './challenges.component';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { AddQuestionComponent } from './child-components/add-question/add-question.component';
import { AddQuestionButtonComponent } from './child-components/my-challenges/add-question-button/add-question-button.component';
import { ReplyChallengeButtonComponent } from './child-components/challenge-listing/reply-challenge-button/reply-challenge-button.component';
import { ReplyChallengeComponent } from './child-components/reply-challenge/reply-challenge.component';
import { MyChallengesComponent } from './child-components/my-challenges/my-challenges.component';
import { ChallengeListingComponent } from './child-components/challenge-listing/challenge-listing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChallengesRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NgbModalModule,
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
