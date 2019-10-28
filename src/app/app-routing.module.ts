import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { FeatureComponent } from './feature/feature.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome',    component: WelcomeComponent },
  { path: 'features',   component: FeatureComponent }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }