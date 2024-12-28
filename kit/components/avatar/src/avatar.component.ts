import { Component, computed, input, InputSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { classMerge } from '@daisyng/kit/core/tools';
import { avatarConfig } from './avatar.config';
import { AvatarSize } from './avatar.size';
import { AvatarIndicator } from './avatar-indicator.type';

@Component({
  selector: 'dsy-avatar',
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styles: '',
  host: {
    '[class]': 'classes()',
  },
})
export class AvatarComponent {
  readonly size: InputSignal<AvatarSize> = input<AvatarSize>('medium');

  readonly indicator: InputSignal<AvatarIndicator> = input<AvatarIndicator>(null);

  readonly classes = computed(() =>
    classMerge(avatarConfig({ size: this.size(), indicator: this.indicator() })),
  );
}
