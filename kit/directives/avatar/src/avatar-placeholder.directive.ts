import { computed, Directive, input, InputSignal } from '@angular/core';
import { classMerge } from '@daisyng/kit/core/tools';
import {
  AvatarPlaceholderRounded, AvatarPlaceholderType
} from './avatar-placeholder.type';
import { avatarPlaceholderConfig } from './avatar-placeholder.config';

@Directive({
  selector: '[dsyAvatarPlaceholder]',
  exportAs: 'avatarPlaceholder',
  host: {
    '[class]': 'classes()',
  },
})
export class AvatarPlaceholderDirective {
  readonly phRounded: InputSignal<AvatarPlaceholderRounded> = input<AvatarPlaceholderRounded>(null);

  readonly phType: InputSignal<AvatarPlaceholderType> = input<AvatarPlaceholderType>(null);

  readonly classes = computed(() => classMerge(avatarPlaceholderConfig({
    rounded: this.phRounded(),
    type: this.phType(),
  })));
}
