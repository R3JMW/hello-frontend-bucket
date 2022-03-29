import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PopupContentComponent } from './popup-content/popup-content.component';
import { fromEvent } from 'rxjs';
import { SplitButton } from 'primeng/splitbutton';

@Directive({
  selector: '[appTestPopup]',
  providers: [DialogService]
})
export class TestPopupDirective implements AfterViewInit {
  popup: DynamicDialogRef;

  menu: any;

  @ViewChild('menu', { static: true }) sb: ElementRef;

  constructor(public dialogService: DialogService, private render: Renderer2, private cElementRef: ElementRef) {}

  @HostListener('onClick', ['$event'])
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

  ngAfterViewInit(): void {
    fromEvent(this.cElementRef.nativeElement, 'click').subscribe((e: any) => {
      if (e.target.id === '1') this.show();
    });
  }
}
