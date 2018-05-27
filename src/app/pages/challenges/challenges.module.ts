import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengesComponent } from './challenges.component';
import { CreateChallengeComponent } from './create-challenge/create-challenge.component';
import { EditChallengeComponent } from './edit-challenge/edit-challenge.component';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { PagesModule } from '../pages.module';

@NgModule({
  imports: [
    CommonModule,
    ChallengesRoutingModule
  ],
  declarations: [ChallengesComponent, CreateChallengeComponent, EditChallengeComponent]
})
export class ChallengesModule { }
