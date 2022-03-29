import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-test-popup',
  templateUrl: './test-popup.component.html',
  styleUrls: ['./test-popup.component.scss']
})
export class TestPopupComponent implements OnInit {
  mmodel: MenuItem[] = [
    { id: '1', label: 'Pop Up' },
    { id: '2', label: 'New Tab' }
  ];

  constructor() {}

  ngOnInit(): void {}

  public onRefresh(): void {}
}

const t = new TestPopupComponent();
t.onRefresh();
