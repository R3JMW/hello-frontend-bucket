import { Component, OnInit } from '@angular/core';

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
}
