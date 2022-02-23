import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-popup-content',
  templateUrl: './popup-content.component.html',
  styleUrls: ['./popup-content.component.scss']
})
export class PopupContentComponent implements OnInit {
  constructor(public ref: DynamicDialogRef) {}

  ngOnInit(): void {}

  onClose(): void {
    this.ref.close(null);
  }

  onConfirm(): void {
    this.ref.close(true);
  }
}
