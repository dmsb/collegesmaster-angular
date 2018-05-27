import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChallengesComponent } from './challenges.component';
import { CreateChallengeComponent } from './create-challenge/create-challenge.component';
import { EditChallengeComponent } from './edit-challenge/edit-challenge.component';
import { AddQuestionComponent } from './add-question/add-question.component';

const challengesRoutes: Routes = [
  { path: '', component: ChallengesComponent, 
    children: [
        { path: 'create-challenge', component: CreateChallengeComponent },
        { path: 'edit-challenge', component: EditChallengeComponent },
        { path: 'add-question', component: AddQuestionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(challengesRoutes)],
  exports: [RouterModule],
})
export class ChallengesRoutingModule {
}
