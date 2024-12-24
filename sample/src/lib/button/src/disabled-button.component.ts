import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '@daisyng/kit/directives/button';

@Component({
  selector: 'smp-disabled-buttons',
  imports: [CommonModule, ButtonDirective],
  templateUrl: './disabled-button.component.html',
  styles: `:host { @apply flex items-center justify-center }`,
})
export class SampleDisabledButtonComponent {}
