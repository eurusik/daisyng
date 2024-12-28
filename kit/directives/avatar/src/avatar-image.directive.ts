import { computed, Directive, input, InputSignal } from '@angular/core';
import { classMerge } from '@daisyng/kit/core/tools';
import { avatarImageConfig } from './avatar-image.config';
import { AvatarImageRing, AvatarImageRounded } from './avatar-image.shape';

@Directive({
  selector: 'img[dsyAvatarImage]',
  exportAs: 'avatarImage',
  host: {
    '[class]': 'classes()',
  },
})
export class AvatarImageDirective {
  readonly ring: InputSignal<AvatarImageRing> = input<AvatarImageRing>(null);

  readonly rounded: InputSignal<AvatarImageRounded> = input<AvatarImageRounded>(null);

  readonly classes = computed(() => classMerge(avatarImageConfig({
    rounded: this.rounded(),
    ring: this.ring(),
  })));
}
