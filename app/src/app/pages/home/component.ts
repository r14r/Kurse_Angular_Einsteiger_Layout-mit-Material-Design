import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class HomeComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
