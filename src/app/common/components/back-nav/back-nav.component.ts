import { Location } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'back-nav',
  templateUrl: './back-nav.component.html',
  styleUrls: ['./back-nav.component.css']
})
export class BackNavComponent {

  @Output() finalizePage: EventEmitter<any> = new EventEmitter()
  constructor(private navi: Location){

  }

  navBack(){
    this.finalizePage.emit()
    setTimeout(() => {
      this.navi.back()
    }, 100);
  }
}
