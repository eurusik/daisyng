import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeDirective } from '@daisyng/kit/directives/badge';

@Component({
  selector: 'smp-badge',
  imports: [CommonModule, BadgeDirective],
  templateUrl: './badge.component.html',
  styles: `:host { @apply flex items-center justify-center }`,
})
export class SampleBadgeComponent {}
