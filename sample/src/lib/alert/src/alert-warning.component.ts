import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDirective } from '@daisyng/kit/directives/alert';

@Component({
  selector: 'smp-alert-warning',
  imports: [CommonModule, AlertDirective],
  templateUrl: './alert-warning.component.html',
  styles: ``,
})
export class SampleAlertWarningComponent {}
