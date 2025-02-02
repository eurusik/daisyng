import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '@daisyng/kit/directives/button';

@Component({
  selector: 'smp-button',
  imports: [CommonModule, ButtonDirective],
  templateUrl: './button.component.html',
  styles: `:host { @apply flex items-center justify-center }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SampleButtonComponent {}
