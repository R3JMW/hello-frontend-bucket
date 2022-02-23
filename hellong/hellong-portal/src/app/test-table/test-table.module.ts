import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestTableRouting } from './test-table.routing';
import { TestTableComponent } from './test-table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [TestTableComponent],
  imports: [CommonModule, TableModule, TestTableRouting]
})
export class TestTableModule {}
