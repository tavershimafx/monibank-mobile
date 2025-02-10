import { Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private animationCtrl: AnimationController) {}

  myCustomPageTransition = (baseEl: any, opts?: any) => {
    
    var anim1 = this.animationCtrl
      .create()
      .addElement(opts.leavingEl)
      .duration(500)
      .iterations(1)
      .easing('ease-out')
      .fromTo('opacity', '1', '0');

    var anim2 = this.animationCtrl
      .create()
      .addElement(opts.enteringEl)
      .duration(500)
      .iterations(1)
      .easing('ease-out')
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateX(100%)', 'translateX(0)');

    var parentAnim = this.animationCtrl
      .create()
      .duration(500)
      .iterations(1)
      .addAnimation([anim1, anim2]);

    return parentAnim;
  };
}
