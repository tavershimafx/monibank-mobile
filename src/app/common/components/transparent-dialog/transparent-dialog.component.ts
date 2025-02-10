import { Component, Input } from '@angular/core';

@Component({
  selector: 'transparent-dialog',
  templateUrl: './transparent-dialog.component.html',
  styleUrls: ['./transparent-dialog.component.css']
})
export class TransparentDialogComponent {
  @Input("size") size: string = "md"
}
