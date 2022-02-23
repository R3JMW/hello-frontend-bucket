import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'test-popup', loadChildren: () => import('./test-popup/test-popup.module').then(m => m.TestPopupModule) },
  { path: 'test-table', loadChildren: () => import('./test-table/test-table.module').then(m => m.TestTableModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
