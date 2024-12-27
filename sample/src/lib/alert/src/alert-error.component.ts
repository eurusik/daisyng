import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDirective } from '@daisyng/kit/directives/alert';

@Component({
  selector: 'smp-alert-error',
  imports: [CommonModule, AlertDirective],
  templateUrl: './alert-error.component.html',
  styles: ``,
})
export class SampleAlertErrorComponent {}
