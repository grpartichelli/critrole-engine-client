import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {CritroleHomeComponent} from "../critrole-home/critrole-home.component";


const routes: Routes = [
  { path: 'home', component: CritroleHomeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
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
