import { Routes } from '@angular/router';
import { MainComponent } from './shared-with-app/components/main/main.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'info', pathMatch: 'full'
  },
  {
    path: 'info', component: MainComponent
  },
  {
    path: 'trivia',
    loadChildren: () => import('./features/trivia/trivia.module').then(m => m.TriviaModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./features/results/results.module').then(m => m.ResultsModule)
  },
  {
    path: '**', redirectTo: 'info', pathMatch: 'full'
  }
];
