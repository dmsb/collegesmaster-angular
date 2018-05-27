import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengesComponent } from './challenges.component';
import { CreateChallengeComponent } from './create-challenge/create-challenge.component';
import { EditChallengeComponent } from './edit-challenge/edit-challenge.component';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { AddQuestionComponent } from './add-question/add-question.component';

@NgModule({
  imports: [
    CommonModule,
    ChallengesRoutingModule,
    NbCardModule,
    Ng2SmartTableModule
  ],
  declarations: [ChallengesComponent, CreateChallengeComponent, EditChallengeComponent, AddQuestionComponent]
})
export class ChallengesModule { }
