import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '@daisyng/kit/directives/button';

@Component({
  selector: 'smp-wide-button',
  imports: [CommonModule, ButtonDirective],
  templateUrl: './wide-button.component.html',
  styles: `:host { @apply flex items-center justify-center }`,
})
export class SampleWideButtonComponent {}
