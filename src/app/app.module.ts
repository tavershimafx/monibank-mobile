import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OnboardingModule } from './layouts/onboarding/onboarding.module';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { ComponentsModule } from './common/components/components.module';
import { StoreModule } from '@ngrx/store';
import { GlobalCacheReducer, UserProfileReducer } from './store/reducers/left-nav.reducer';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    OnboardingModule,
    DashboardModule,
    ComponentsModule,
    BrowserModule, 
    CommonModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    StoreModule.forRoot({
      profile: UserProfileReducer,
      data: GlobalCacheReducer,
    })
  ],
  providers: [
    provideHttpClient(),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
