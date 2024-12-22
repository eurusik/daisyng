import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '@daisyng/kit/directives/button';

@Component({
  selector: 'smp-responsive',
  imports: [CommonModule, ButtonDirective],
  templateUrl: './responsive.component.html',
  styles: ``,
})
export class SampleResponsiveComponent {}
