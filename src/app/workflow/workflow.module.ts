import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StepComponent} from './step/step.component';
import {StepManagerComponent} from './step-manager/step-manager.component';
import {TabComponent} from './tab/tab.component';
import {TabManagerComponent} from './tab-manager/tab-manager.component';
import {UiModule} from '../ui/ui.module';
import {PopupComponent} from './popup/popup.component';
import {PopupOptionComponent} from './popup-option/popup-option.component';
import {ExpandableBoxComponent} from './expandable-box/expandable-box.component';
import {PopupService} from './popup.service';
import {StepManagerService} from './step-manager.service';

@NgModule({
  imports: [
    CommonModule,
    UiModule
  ],
  declarations: [
    StepComponent,
    StepManagerComponent,
    TabComponent,
    TabManagerComponent,
    PopupComponent,
    PopupOptionComponent,
    ExpandableBoxComponent
  ],
  exports: [
    StepComponent,
    StepManagerComponent,
    TabComponent,
    TabManagerComponent,
    PopupComponent,
    PopupOptionComponent,
    ExpandableBoxComponent,
  ],
  providers: [
    PopupService,
    StepManagerService
  ]
})
export class WorkflowModule { }
