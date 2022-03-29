import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.scss']
})
export class TestTableComponent implements OnInit {
  values: any[] = [
    {
      id: 10,
      name: 'A',
      gender: 'Male',
      desc: 'Desc',
      action: false,
      children: [
        { id: 11, name: 'AA', gender: 'female', desc: 'Daughter', action: false },
        { id: 12, name: 'AB', gender: 'female', desc: 'Daughter', action: false }
      ]
    },
    { id: 2, name: 'B', gender: 'female', desc: 'Desc', action: false },
    { id: 3, name: 'C', gender: 'Male', desc: 'Desc', action: false },
    { id: 4, name: 'D', gender: 'Male', desc: 'Desc', action: false },
    { id: 5, name: 'E', gender: 'Male', desc: 'Desc', action: false },
    { id: 6, name: 'F', gender: 'female', desc: 'Desc', action: false },
    { id: 7, name: 'G', gender: 'Male', desc: 'Desc', action: false },
    { id: 8, name: 'H', gender: 'female', desc: 'Desc', action: false }
  ];

  public expandedRows: any = {};

  constructor() {}

  ngOnInit(): void {}

  getChildId(index: number, child: any): number {
    return child.id;
  }

  customSort(event: SortEvent): void {
    console.log(event);
    event.data.sort((data1, data2) => {
      const value1 = data1[event.field];
      const value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return event.order * result;
    });
  }
}
