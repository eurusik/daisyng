import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDirective } from '@daisyng/kit/directives/alert';

@Component({
  selector: 'smp-alert',
  imports: [CommonModule, AlertDirective],
  templateUrl: './alert.component.html',
  styles: ``,
})
export class SampleAlertComponent {}
