import { computed, Directive, input, InputSignal } from '@angular/core';
import { classMerge } from '@daisyng/kit/core/tools';
import { avatarImageConfig } from './avatar-image.config';
import { AvatarImageRounded } from './avatar-image.shape';

@Directive({
  standalone: true,
  selector: 'img[dsyAvatarImage]',
  exportAs: 'avatarImage',
  host: {
    '[class]': 'classes()',
  },
})
export class AvatarDirective {
  readonly ring: InputSignal<boolean> = input<boolean>(false);

  readonly rounded: InputSignal<AvatarImageRounded> = input<AvatarImageRounded>(null);

  readonly classes = computed(() => classMerge(avatarImageConfig({
    rounded: this.rounded(),
    ring: this.ring() ? 'primary' : null,
  })));
}
