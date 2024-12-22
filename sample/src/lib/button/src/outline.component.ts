import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '@daisyng/kit/directives/button';

@Component({
  selector: 'smp-outline',
  imports: [CommonModule, ButtonDirective],
  templateUrl: './outline.component.html',
  styles: ``,
})
export class SampleOutlineComponent {}
