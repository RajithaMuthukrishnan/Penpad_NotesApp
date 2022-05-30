import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notes-card',
  templateUrl: './notes-card.component.html',
  styleUrls: ['./notes-card.component.scss']
})
export class NotesCardComponent implements OnInit {

  @Input() body!: string;
  @Input() title!: string;
  @Input() link!: any;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  // title = "Testing title"
  // body = "Testing body"
  
  constructor() { }

  ngOnInit(): void {
  }

  onXButtonClick(){
    this.deleteEvent.emit();
  }

}
