import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDirective } from '@daisyng/kit/directives/alert';

@Component({
  selector: 'smp-alert-success',
  imports: [CommonModule, AlertDirective],
  templateUrl: './alert-success.component.html',
  styles: ``,
})
export class SampleAlertSuccessComponent {}
