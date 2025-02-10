import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", loadChildren: () => import('./layouts/onboarding/onboarding.module').then(x => x.OnboardingModule)},
  { path: "dashboard", loadChildren: () => import('./layouts/dashboard/dashboard.module').then(x => x.DashboardModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
