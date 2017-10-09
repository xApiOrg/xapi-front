import {
  AfterContentInit, Component, ContentChildren, OnInit, QueryList, Input, Output,
  EventEmitter
} from '@angular/core';
import {RadioButtonComponent} from '../radio-button/radio-button.component';

@Component({
  selector: 'app-rb-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.css']
})
export class RadioButtonGroupComponent implements AfterContentInit {
  private _selectionIndex: any
  @ContentChildren(RadioButtonComponent) radioButtons: QueryList<RadioButtonComponent>;

  // selectionIndex getter and setter
  @Input()
  get selectionIndex(): any {
    return this._selectionIndex;
  }
  @Output() selectionIndexChange: EventEmitter<any> = new EventEmitter();
  set selectionIndex(value: any) {
    this._selectionIndex = value;
    this.selectionIndexChange.emit(this._selectionIndex);
    this.updateRadioButtonsSelection();
  }

  ngAfterContentInit() {
    const radioButtonsArray = this.radioButtons.toArray();
    for (let i = 0; i < radioButtonsArray.length; i++) {
      const radioButton = radioButtonsArray[i];
      radioButton.onClick.subscribe(() => {
        this.selectionIndex = radioButton.title;
        this.updateRadioButtonsSelection();
      });
    }
    this.updateRadioButtonsSelection();
  }

  updateRadioButtonsSelection() {
    if (!this.radioButtons) {
      return;
    }
    const radioButtonsArray = this.radioButtons.toArray();
    for (let i = 0; i < radioButtonsArray.length; i++) {
      const radioButton = radioButtonsArray[i];
      radioButton.isSelected = this._selectionIndex === radioButton.title;
    }
  }
}
