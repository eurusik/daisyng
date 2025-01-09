import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '@daisyng/kit/directives/button';
import { BadgeDirective } from '@daisyng/kit/directives/badge';

@Component({
  selector: 'smp-badge-in-button',
  imports: [CommonModule, ButtonDirective, BadgeDirective],
  templateUrl: './badge-in-button.component.html',
  styles: `:host { @apply flex items-center justify-center gap-2 }`,
})
export class SampleBadgeInButtonComponent {}
