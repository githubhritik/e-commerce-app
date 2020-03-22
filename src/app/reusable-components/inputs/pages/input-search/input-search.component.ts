import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
@Input() placeholder = 'Search Here'
  constructor() { }

  ngOnInit(): void {
  }

}
