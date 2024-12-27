import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDirective } from '@daisyng/kit/directives/alert';

@Component({
  selector: 'smp-alert-info',
  imports: [CommonModule, AlertDirective],
  templateUrl: './alert-info.component.html',
  styles: ``,
})
export class SampleAlertInfoComponent {}
