import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {CritroleSearchTranscriptsComponent} from "./critrole-search-transcripts/critrole-search-transcripts.component";
import {CritroleSearchCharactersComponent} from "./critrole-search-characters/critrole-search-characters.component";
import {CritroleAvgDicerollsComponent} from "./critrole-avg-dicerolls/critrole-avg-dicerolls.component";
import {CritroleWordUsageComponent} from "./critrole-word-usage/critrole-word-usage.component";
import {
  CritroleInCombatTranscriptsComponent
} from "./critrole-in-combat-transcripts/critrole-in-combat-transcripts.component";
import {
  CritroleCharacterInteractionComponent
} from "./critrole-character-interaction/critrole-character-interaction.component";
import {CritroleWordcloudComponent} from "./critrole-wordcloud/critrole-wordcloud.component";
import {CritroleDiceWordcloudComponent} from "./critrole-dice-wordcloud/critrole-dice-wordcloud.component";
import {CritroleRankWordUsageComponent} from "./critrole-rank-word-usage/critrole-rank-word-usage.component";


const routes: Routes = [
  { path: 'search-characters', component: CritroleSearchCharactersComponent },
  { path: 'search-transcripts', component: CritroleSearchTranscriptsComponent },
  { path: 'analyze-dice-rolls', component: CritroleAvgDicerollsComponent },
  { path: 'word-usage', component: CritroleWordUsageComponent },
  { path: 'in-combat-transcripts', component: CritroleInCombatTranscriptsComponent },
  { path: 'character-interaction', component: CritroleCharacterInteractionComponent },
  { path: 'wordcloud', component: CritroleWordcloudComponent },
  { path: 'dice-wordcloud', component: CritroleDiceWordcloudComponent },
  { path: 'rank-word-usage', component: CritroleRankWordUsageComponent },
  { path: '**', redirectTo: 'search-transcripts', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollOffset: [0, 0],
      scrollPositionRestoration: 'top', // Add options right here
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}
