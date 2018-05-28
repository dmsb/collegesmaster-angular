import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChallengesComponent } from './challenges.component';
import { ChallengeListingComponent } from './child-components/challenge-listing/challenge-listing.component';
import { MyChallengesComponent } from './child-components/my-challenges/my-challenges.component';
import { ReplyChallengeComponent } from './child-components/reply-challenge/reply-challenge.component';
import { AddQuestionButtonComponent } from './child-components/my-challenges/add-question-button/add-question-button.component';
import { AddQuestionComponent } from './child-components/add-question/add-question.component';
import { ReplyChallengeButtonComponent } from './child-components/challenge-listing/reply-challenge-button/reply-challenge-button.component';

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
