import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeDirective } from '@daisyng/kit/directives/badge';

@Component({
  selector: 'smp-badge-with-state-color',
  imports: [CommonModule, BadgeDirective],
  templateUrl: './badge-with-state-color.component.html',
  styles: `:host { @apply flex items-center justify-center gap-2 }`,
})
export class SampleBadgeWithStateColorComponent {}
