import { Component, computed, input, InputSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { classMerge } from '@daisyng/kit/core/tools';
import { avatarConfig } from './avatar.config';
import { AvatarIndicator } from './avatar-indicator.type';
import {
  AvatarPlaceholderDirective,
  AvatarPlaceholderRounded,
  AvatarPlaceholderType,
  AvatarRing,
  AvatarRingDirective,
  AvatarRounded,
  AvatarRoundedDirective,
  AvatarSize,
  AvatarSizeDirective,
} from '@daisyng/kit/directives/avatar';

@Component({
  selector: 'dsy-avatar',
  imports: [
    CommonModule,
    AvatarSizeDirective,
    AvatarRingDirective,
    AvatarPlaceholderDirective,
    AvatarRoundedDirective,
  ],
  templateUrl: './avatar.component.html',
  styles: '',
  host: {
    '[class.avatar]': 'true',
    '[class]': 'classes()',
  },
})
export class AvatarComponent {
  readonly placeholder: InputSignal<boolean> = input<boolean>(false);

  readonly placeholderRounded: InputSignal<AvatarPlaceholderRounded> =
    input<AvatarPlaceholderRounded>(null);

  readonly placeholderType: InputSignal<AvatarPlaceholderType> =
    input<AvatarPlaceholderType>(null);

  readonly rounded: InputSignal<AvatarRounded> = input<AvatarRounded>('xs');

  readonly size: InputSignal<AvatarSize> = input<AvatarSize>('medium');

  readonly ring: InputSignal<AvatarRing> = input<AvatarRing>(null);

  readonly indicator: InputSignal<AvatarIndicator> =
    input<AvatarIndicator>(null);

  readonly phRounded = computed(() =>
    this.placeholder() ? this.placeholderRounded() || 'circle' : null
  );

  readonly phType = computed(() =>
    this.placeholder() ? this.placeholderType() || 'neutral' : null
  );

  readonly classes = computed(() =>
    classMerge(
      avatarConfig({
        indicator: this.indicator(),
        avatarPlaceholder: this.placeholder() ? 'placeholder' : null,
      })
    )
  );
}
