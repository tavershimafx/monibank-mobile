import { NgModule } from '@angular/core';
import { CheckCircleComponent } from './check-circle/check-circle.component';
import { BackNavComponent } from './back-nav/back-nav.component';
import { StepsComponent } from './steps/steps.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { CommonModule } from '@angular/common';
import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';
import { TransparentDialogComponent } from './transparent-dialog/transparent-dialog.component';
import { WhiteDialogComponent } from './white-dialog/white-dialog.component';

@NgModule({
  declarations: [
    CheckCircleComponent,
    BackNavComponent,
    StepsComponent,
    ModalDialogComponent,
    LoadingDialogComponent,
    TransparentDialogComponent,
    WhiteDialogComponent
  ],
  imports: [ 
    CommonModule
  ],
  exports:[
    CheckCircleComponent,
    BackNavComponent,
    StepsComponent,
    ModalDialogComponent,
    LoadingDialogComponent,
    TransparentDialogComponent,
    WhiteDialogComponent
  ],
  providers: [],
})
export class ComponentsModule { }
