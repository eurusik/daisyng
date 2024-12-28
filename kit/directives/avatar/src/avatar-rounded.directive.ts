import { computed, Directive, input, InputSignal } from '@angular/core';
import { classMerge } from '@daisyng/kit/core/tools';
import { AvatarRounded } from './avatar-rounded.type';
import { avatarRoundedConfig } from './avatar-rounded.config';

@Directive({
  selector: '[dsyAvatarRounded]',
  exportAs: 'dsyAvatarRounded',
  host: {
    '[class]': 'classes()',
  }
})
export class AvatarRoundedDirective {
  readonly rounded: InputSignal<AvatarRounded> = input<AvatarRounded>(null)

  readonly classes = computed(() => classMerge(avatarRoundedConfig({
    rounded: this.rounded(),
  })));
}
