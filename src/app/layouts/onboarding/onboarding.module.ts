import { NgModule } from '@angular/core';
import { OnboardingRoutingModule } from './onboarding.routing.module';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { SplashComponent } from 'src/app/pages/splash/splash.component';
import { WelcomeComponent } from 'src/app/pages/welcome/welcome.component';
import { ComponentsModule } from "../../common/components/components.module";
import { CreateAccountComponent } from 'src/app/pages/onboard/create-account/create-account.component';
import { VEmailComponent } from 'src/app/pages/onboard/v-email/v-email.component';
import { EVerifiedComponent } from 'src/app/pages/onboard/e-verified/e-verified.component';
import { CaptureRulesComponent } from 'src/app/pages/onboard/capture-rules/capture-rules.component';
import { TermsComponent } from 'src/app/pages/onboard/terms/terms.component';
import { FinalizingComponent } from 'src/app/pages/onboard/finalizing/finalizing.component';
import { OnboardingComponent } from './onboarding.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OnboardingComponent,
    // pages
    LoginComponent,
    SplashComponent,
    WelcomeComponent,
    CaptureRulesComponent,

    // onboarding
    CreateAccountComponent,
    VEmailComponent,
    EVerifiedComponent,
    TermsComponent,
    FinalizingComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    OnboardingRoutingModule, 
    ComponentsModule],
  exports: []
})
export class OnboardingModule {
  
}
