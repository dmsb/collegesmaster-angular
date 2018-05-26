import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChallengesComponent } from './challenges.component';
import { CreateChallengeComponent } from './create-challenge/create-challenge.component';
import { EditChallengeComponent } from './edit-challenge/edit-challenge.component';

const challengesRoutes: Routes = [
  { path: 'challenges', component: ChallengesComponent, 
    children: [
        { path: 'create-challenge', component: CreateChallengeComponent },
        { path: 'edit-challenge', component: EditChallengeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(challengesRoutes)],
  exports: [RouterModule],
})
export class ChallengesRoutingModule {
}
