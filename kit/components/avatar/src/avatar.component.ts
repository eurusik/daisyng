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

/**
 * Represents an avatar component that can display images, placeholders, and indicators with various styles and configurations.
 * This component is designed to be flexible, allowing for a wide range of avatar appearances through input properties.
 */
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
  /** Determines whether the avatar is a placeholder. */
  readonly placeholder: InputSignal<boolean> = input<boolean>(false);

  /** Specifies the rounded style for the placeholder if `placeholder` is true. */
  readonly placeholderRounded: InputSignal<AvatarPlaceholderRounded> =
    input<AvatarPlaceholderRounded>(null);

  /** Specifies the type of the placeholder if `placeholder` is true. */
  readonly placeholderType: InputSignal<AvatarPlaceholderType> =
    input<AvatarPlaceholderType>(null);

  /** Defines the border-radius of the avatar. */
  readonly rounded: InputSignal<AvatarRounded> = input<AvatarRounded>('xs');

  /** Sets the size of the avatar. */
  readonly size: InputSignal<AvatarSize> = input<AvatarSize>('md');

  /** Applies a ring effect around the avatar. */
  readonly ring: InputSignal<AvatarRing> = input<AvatarRing>(null);

  /** Displays an indicator, such as online or offline status, next to the avatar. */
  readonly indicator: InputSignal<AvatarIndicator> =
    input<AvatarIndicator>(null);

  /**
   * Computed property that determines the rounded style for the placeholder.
   * Returns 'circle' as the default rounded style if the avatar is a placeholder.
   * @internal
   */
  readonly phRounded = computed(() =>
    this.placeholder() ? this.placeholderRounded() || 'circle' : null
  );

  /**
   * Computed property that determines the type for the placeholder.
   * Returns 'neutral' as the default type if the avatar is a placeholder.
   * @internal
   */
  readonly phType = computed(() =>
    this.placeholder() ? this.placeholderType() || 'neutral' : null
  );

  /**
   * Computed property that generates the class string based on the avatar's configuration.
   * It merges custom styles with the default configuration for indicators and placeholders.
   * @internal
   */
  readonly classes = computed(() =>
    classMerge(
      avatarConfig({
        indicator: this.indicator(),
        avatarPlaceholder: this.placeholder() ? 'placeholder' : null,
      })
    )
  );
}
