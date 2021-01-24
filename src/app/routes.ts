import { Routes } from '@angular/router';
import { MainComponent } from './shared-with-app/components/main/main.component';
import { DirectAccessGuard } from './shared/guards/direct-access.guard';

export const routes: Routes = [
  {
    path: '', redirectTo: 'info', pathMatch: 'full'
  },
  {
    path: 'info', component: MainComponent
  },
  {
    path: 'trivia',
    canActivate: [DirectAccessGuard],
    loadChildren: () => import('./features/trivia/trivia.module').then(m => m.TriviaModule)
  },
  {
    path: 'results',
    canActivate: [DirectAccessGuard],
    loadChildren: () => import('./features/results/results.module').then(m => m.ResultsModule)
  },
];
