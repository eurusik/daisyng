import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '@daisyng/kit/directives/button';

@Component({
  selector: 'smp-state-color',
  imports: [CommonModule, ButtonDirective],
  templateUrl: './state-color.component.html',
  styles: ``,
})
export class SampleStateColorComponent {}
