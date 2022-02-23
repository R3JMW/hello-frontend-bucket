import { Directive, HostListener } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PopupContentComponent } from './popup-content/popup-content.component';

@Directive({
  selector: '[appTestPopup]',
  providers: [DialogService]
})
export class TestPopupDirective {
  popup: DynamicDialogRef;

  constructor(public dialogService: DialogService) {}

  @HostListener('click', ['$event'])
  show(): void {
    this.popup = this.dialogService.open(PopupContentComponent, {
      header: 'Popup Header',
      width: '75%',
      height: '50%',
      closeOnEscape: false,
      closable: false
    });

    this.popup.onClose.subscribe(res => {});
  }
}
