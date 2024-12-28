import { computed, Directive, input, InputSignal } from '@angular/core';
import { classMerge } from '@daisyng/kit/core/tools';
import { avatarRingConfig } from './avatar-ring.config';
import { AvatarRing } from './avatar-ring.type';

@Directive({
  selector: '[dsyAvatarRing]',
  exportAs: 'dsyAvatarRing',
  host: {
    '[class]': 'classes()',
  }
})
export class AvatarRingDirective {
  readonly ring: InputSignal<AvatarRing> = input<AvatarRing>(null)

  readonly classes = computed(() => classMerge(avatarRingConfig({
    ring: this.ring(),
  })));
}
