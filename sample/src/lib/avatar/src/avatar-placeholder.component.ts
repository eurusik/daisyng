import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '@daisyng/kit/components/avatar';
import { AvatarPlaceholderDirective } from '@daisyng/kit/directives/avatar';

@Component({
  selector: 'smp-avatar-placeholder',
  imports: [CommonModule, AvatarComponent, AvatarPlaceholderDirective],
  templateUrl: './avatar-placeholder.component.html',
  styles: `:host { @apply flex items-center justify-center flex-wrap gap-2 }`,
})
export class SampleAvatarPlaceholderComponent {}