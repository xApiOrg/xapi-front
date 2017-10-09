import {AfterContentInit, Component, ContentChildren, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'app-tabs-manager',
  templateUrl: './tab-manager.component.html',
  styleUrls: ['./tab-manager.component.css']
})
export class TabManagerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) components: QueryList<TabComponent>;
  @ViewChildren(TabComponent) componentsView: QueryList<ElementRef>;

  ngAfterContentInit() {
    const tabs = this.components.toArray();
    if (tabs.length === 1) {
      tabs[0].isSelected = true;
      tabs[0].hasSelection = true;
    } else {
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].isFirst = i === 0;
        tabs[i].onClick.subscribe(() => {
          tabs[i].isSelected = true;
          for (let i1 = 0; i1 < tabs.length; i1++) {
            tabs[i1].hasSelection = true;
            if (i1 !== i) {
              tabs[i1].isSelected = false;
            }
          }
        });
      }
    }
  }
}
