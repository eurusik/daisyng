import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '@daisyng/kit/components/avatar';

@Component({
  selector: 'smp-avatar-placeholder',
  imports: [CommonModule, AvatarComponent],
  templateUrl: './avatar-placeholder.component.html',
  styles: `:host { @apply flex items-center justify-center flex-wrap gap-5 mt-5 mb-5 }`,
})
export class SampleAvatarPlaceholderComponent {}
