import { computed, Directive, input, InputSignal } from '@angular/core';
import { classMerge } from '@daisyng/kit/core/tools';
import { avatarSizeConfig } from './avatar-size.config';
import { AvatarSize } from './avatar-size.type';

@Directive({
  selector: '[dsyAvatarSize]',
  exportAs: 'dsyAvatarSize',
  host: {
    '[class]': 'classes()',
  },
})
export class AvatarSizeDirective {
  readonly size: InputSignal<AvatarSize> = input<AvatarSize>('md')

  readonly classes = computed(() => classMerge(avatarSizeConfig({
    size: this.size(),
  })));
}
