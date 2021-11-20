import { Component, Input, OnInit } from '@angular/core';
import { Issue } from 'src/app/viewModels/issue/issue';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() issue:Issue
  constructor() { }

  ngOnInit(): void {
    console.log(this.issue);
    
  }

}
