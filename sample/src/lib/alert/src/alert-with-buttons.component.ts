import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDirective } from '@daisyng/kit/directives/alert';
import { ButtonDirective } from '@daisyng/kit/directives/button';

@Component({
  selector: 'smp-alert-with-buttons',
  imports: [CommonModule, AlertDirective, ButtonDirective],
  templateUrl: './alert-with-buttons.component.html',
  styles: ``,
})
export class SampleAlertWithButtonsComponent {}
