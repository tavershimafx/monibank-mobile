import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { SplashComponent } from 'src/app/pages/splash/splash.component';
import { WelcomeComponent } from 'src/app/pages/welcome/welcome.component';
import { OnboardingComponent } from './onboarding.component';
import { CreateAccountComponent } from 'src/app/pages/onboard/create-account/create-account.component';
import { VEmailComponent } from 'src/app/pages/onboard/v-email/v-email.component';
import { EVerifiedComponent } from 'src/app/pages/onboard/e-verified/e-verified.component';
import { CaptureRulesComponent } from 'src/app/pages/onboard/capture-rules/capture-rules.component';
import { TermsComponent } from 'src/app/pages/onboard/terms/terms.component';
import { FinalizingComponent } from 'src/app/pages/onboard/finalizing/finalizing.component';

const routes:Routes = [
  { path: "splash", component: SplashComponent},
  { path: "", component: WelcomeComponent},
  { path: "onboarding", component: OnboardingComponent, children: [
    { path: "login", component: LoginComponent},
    { path: "create-account", component: CreateAccountComponent},
    { path: "v-email", component: VEmailComponent},
    { path: "e-verified", component: EVerifiedComponent},
    { path: "capture-rules", component: CaptureRulesComponent},
    { path: "terms", component: TermsComponent},
    { path: "finalizing", component: FinalizingComponent}
  ]},
  
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule {
 
}
