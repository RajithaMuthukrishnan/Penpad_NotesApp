import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-card',
  templateUrl: './notes-card.component.html',
  styleUrls: ['./notes-card.component.scss']
})
export class NotesCardComponent implements OnInit {

  @Input() body!: string;
  @Input() title!: string;

  // title = "Testing title"
  // body = "Testing body"
  
  constructor() { }

  ngOnInit(): void {
  }

}
