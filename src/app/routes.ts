import { Routes } from '@angular/router';

import { PromotionComponent } from './promotion/promotion.component';

export const routes: Routes = [
  { path: 'home',  component: PromotionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
