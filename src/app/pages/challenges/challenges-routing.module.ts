import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChallengesComponent } from './challenges.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AddQuestionButtonComponent } from './add-question-button/add-question-button.component';
import { ReplyChallengeButtonComponent } from './reply-challenge-button/reply-challenge-button.component';
import { ReplyChallengeComponent } from './reply-challenge/reply-challenge.component';
import { ChallengeListingComponent } from './challenge-listing/challenge-listing.component';
import { MyChallengesComponent } from './my-challenges/my-challenges.component';

const challengesRoutes: Routes = [
  { path: '', component: ChallengesComponent,
    children: [
        { path: 'challenge-listing', component: ChallengeListingComponent },
        { path: 'my-challenges', component: MyChallengesComponent },
        { path: 'reply-challenge-button', component: ReplyChallengeButtonComponent },
        { path: 'reply-challenge', component: ReplyChallengeComponent },
        { path: 'add-question-button', component: AddQuestionButtonComponent },
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
