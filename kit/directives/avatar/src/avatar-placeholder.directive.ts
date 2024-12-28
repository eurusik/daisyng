import { computed, Directive, input, InputSignal } from '@angular/core';
import { classMerge } from '@daisyng/kit/core/tools';
import {
  AvatarPlaceholderRing,
  AvatarPlaceholderRounded,
  AvatarPlaceholderSize
} from './avatar-image-placeholder.type';
import { avatarPlaceholderConfig } from './avatar-placeholder.config';

@Directive({
  selector: '[dsyAvatarPlaceholder]',
  exportAs: 'avatarPlaceholder',
  host: {
    '[class]': 'classes()',
  },
})
export class AvatarPlaceholderDirective {
  readonly size: InputSignal<AvatarPlaceholderSize> = input<AvatarPlaceholderSize>('medium');

  readonly ring: InputSignal<AvatarPlaceholderRing> = input<AvatarPlaceholderRing>(null);

  readonly rounded: InputSignal<AvatarPlaceholderRounded> = input<AvatarPlaceholderRounded>('circle');

  readonly type: InputSignal<AvatarPlaceholderRing> = input<AvatarPlaceholderRing>('neutral');

  readonly classes = computed(() => classMerge(avatarPlaceholderConfig({
    rounded: this.rounded(),
    ring: this.ring(),
    size: this.size(),
    type: this.type(),
  })));
}
