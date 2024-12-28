import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '@daisyng/kit/components/avatar';

@Component({
  selector: 'smp-avatar',
  imports: [CommonModule, AvatarComponent],
  templateUrl: './avatar.component.html',
  styles: `:host { @apply flex items-center justify-center }`,
})
export class SampleAvatarComponent {}
