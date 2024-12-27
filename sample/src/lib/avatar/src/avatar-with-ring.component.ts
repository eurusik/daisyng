import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '@daisyng/kit/components/avatar';
import { AvatarImageDirective } from '@daisyng/kit/directives/avatar';

@Component({
  selector: 'smp-avatar-with-ring',
  imports: [CommonModule, AvatarComponent, AvatarImageDirective],
  templateUrl: './avatar-with-ring.component.html',
  styles: `:host { @apply flex items-center justify-center flex-wrap gap-2 mt-2 mb-2 }`,
})
export class SampleAvatarWithRingComponent {}
