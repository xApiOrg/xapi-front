import {Component, EventEmitter, Input, Output} from '@angular/core';
@Component({
  selector: 'app-flags-dropdown',
  templateUrl: './flags-dropdown.component.html',
  styleUrls: ['./flags-dropdown.component.css']
})
export class FlagsDropdownComponent {
  isShowingList = false;
  private _selectedKey: string;
  @Input() flagsMap: Map<string, string>;
  @Input() allowSelection = true;
  @Input() flagType: string;

  constructor() {
    document.addEventListener('mouseup', () => {
      this.isShowingList = false;
    }, true);
  }

  // selectedCurrency getter and setter
  @Input()
  get selectedKey() {
    return this._selectedKey;
  }
  @Output() selectedKeyChange: EventEmitter<string> = new EventEmitter();
  set selectedKey(val) {
    this._selectedKey = val;
    this.selectedKeyChange.emit(this._selectedKey);
  }

  toggleList() {
    if (this.allowSelection) {
      this.isShowingList = !this.isShowingList;
    }
  }

  hasSelection(): boolean {
    return !!this._selectedKey && this._selectedKey.length !== 0;
  }
}
