import {AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rb',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent {
  @Input() title: string;
  @Input() isSelected: boolean;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
}
