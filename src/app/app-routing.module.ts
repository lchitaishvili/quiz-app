import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './features/results/results.component';
import { TriviaComponent } from './features/trivia/trivia.component';
import { MainComponent } from './shared-with-app/components/main/main.component';
import { DirectAccessGuard } from './shared/guards/direct-access.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'main', component: MainComponent
  },
  {
    path: 'trivia',
    component: TriviaComponent,
    canActivate: [DirectAccessGuard],
    loadChildren: () => import('./features/trivia/trivia.module').then(m => m.TriviaModule)
  },
  {
    path: 'results',
    component: ResultsComponent,
    canActivate: [DirectAccessGuard],
    loadChildren: () => import('./features/results/results.module').then(m => m.ResultsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
