import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeDirective } from '@daisyng/kit/directives/badge';

@Component({
  selector: 'smp-badge-with-text',
  imports: [CommonModule, BadgeDirective],
  templateUrl: './badge-with-text.component.html',
  styles: `:host { @apply flex flex-col items-start }`,
})
export class SampleBadgeWithTextComponent {}
