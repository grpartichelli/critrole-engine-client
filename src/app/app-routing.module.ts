import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {CritroleSearchTranscriptsComponent} from "./critrole-search-transcripts/critrole-search-transcripts.component";
import {CritroleSearchCharactersComponent} from "./critrole-search-characters/critrole-search-characters.component";


const routes: Routes = [
  { path: 'search-characters', component: CritroleSearchCharactersComponent },
  { path: 'search-transcripts', component: CritroleSearchTranscriptsComponent },
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
