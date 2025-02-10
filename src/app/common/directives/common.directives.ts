import { Directive, ViewContainerRef } from "@angular/core";

@Directive({  
    selector: '[dialog]'  
  })  
  export class DialogDirective {  
    constructor(public viewContainerRef: ViewContainerRef) { }  
  }