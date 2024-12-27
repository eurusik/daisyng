import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '@daisyng/kit/directives/button';

@Component({
  selector: 'smp-no-animation',
  imports: [CommonModule, ButtonDirective],
  templateUrl: './no-animation.component.html',
  styles: `:host { @apply flex items-center justify-center }`,
})
export class SampleNoAnimationComponent {}
