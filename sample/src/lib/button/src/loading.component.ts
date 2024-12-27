import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '@daisyng/kit/directives/button';

@Component({
  selector: 'smp-loading',
  imports: [CommonModule, ButtonDirective],
  templateUrl: `loading.component.html`,
  styles: `:host { @apply flex items-center justify-center flex-wrap gap-2 }`,
})
export class SampleLoadingComponent {}
