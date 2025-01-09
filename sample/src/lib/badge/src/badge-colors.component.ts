import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeDirective } from '@daisyng/kit/directives/badge';

@Component({
  selector: 'smp-badge-colors',
  imports: [CommonModule, BadgeDirective],
  templateUrl: './badge-colors.component.html',
  styles: `:host { @apply flex items-center justify-center gap-2 }`,
})
export class SampleBadgeColorsComponent {}
