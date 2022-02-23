import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPopupComponent } from './test-popup.component';

const routes: Routes = [{ path: '', component: TestPopupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestPopupRouting {}
