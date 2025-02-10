import { Component, Input } from '@angular/core';

@Component({
  selector: 'white-dialog',
  templateUrl: './white-dialog.component.html',
  styleUrls: ['./white-dialog.component.css']
})
export class WhiteDialogComponent {
  @Input("size") size: string = "md"
}
