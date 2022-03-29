import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestPopupRouting } from './test-popup.routing';
import { TestPopupComponent } from './test-popup.component';

import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TestPopupDirective } from './test-popup.directive';
import { PopupContentComponent } from './popup-content/popup-content.component';
import { SplitButtonModule } from 'primeng/splitbutton';

@NgModule({
  declarations: [PopupContentComponent, TestPopupComponent, TestPopupDirective],
  imports: [CommonModule, DynamicDialogModule, SplitButtonModule, TestPopupRouting]
})
export class TestPopupModule {}
