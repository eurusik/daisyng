import {
  computed,
  Directive,
  ElementRef,
  inject,
  input,
  InputSignal,
  OnInit,
  Renderer2,
} from '@angular/core';
import { classMerge } from '@daisyng/kit/core/tools';
import { badgeConfig } from './badge.config';
import { BadgeSize } from './badge.type';
import { SelectorClassPair } from './badge.interface';
import { SELECTOR_CLASS_PAIR } from './selector-class-pair.const';

/**
 * Directive to enhance elements with badge styling capabilities.
 * It dynamically applies CSS classes based on the element's attributes and directive inputs.
 * This directive supports a variety of badge appearances, including color, size, state, and outline.
 */
@Directive({
  selector:
    '[dsyBadge], div[dsyBadgePrimary], span[dsyBadgePrimary], div[dsyBadgeSecondary], span[dsyBadgeSecondary], div[dsyBadgeAccent], span[dsyBadgeAccent], div[dsyBadgeGhost], span[dsyBadgeGhost], div[dsyBadgeNeutral], span[dsyBadgeNeutral], div[dsyBadgeInfo], span[dsyBadgeInfo], div[dsyBadgeSuccess], span[dsyBadgeSuccess], div[dsyBadgeWarning], span[dsyBadgeWarning], div[dsyBadgeError], span[dsyBadgeError]',
  host: {
    '[class]': 'classes()',
    '[class.badge-outline]': 'outline()',
  },
})
export class BadgeDirective implements OnInit {
  /**
   * Input signal for the badge size. Defaults to 'md' (medium).
   * Accepts badge size variants as defined in `BadgeSize`.
   */
  readonly size: InputSignal<BadgeSize> = input<BadgeSize>('md');

  /**
   * Input signal to determine if the badge should have an outline.
   * Accepts a boolean value, where `true` applies the outline style.
   */
  readonly outline: InputSignal<boolean> = input<boolean>(false);

  /**
   * @internal
   * @private
   */
  private readonly elRef: ElementRef = inject(ElementRef);

  /**
   * @internal
   * @private
   */
  private readonly renderer: Renderer2 = inject(Renderer2);

  /**
   * Computes the classes to be applied to the badge based on the current size.
   * It merges default badge classes with size-specific styles.
   * @internal
   */
  readonly classes = computed(() =>
    classMerge(
      badgeConfig({
        size: this.size(),
      })
    )
  );

  /**
   * Lifecycle hook that is called after Angular has initialized all data-bound properties.
   * Applies the selector-class pair to the host element based on its attributes.
   * @internal
   */
  ngOnInit(): void {
    this.applySelectorClassPair();
  }

  /**
   * Applies CSS classes to the host element based on the `SELECTOR_CLASS_PAIR` configuration.
   * This method checks if the host element matches any of the specified selectors
   * and adds the corresponding class if a match is found.
   * @internal
   */
  private applySelectorClassPair(): void {
    const hostElement: HTMLElement = this.elRef.nativeElement;
    SELECTOR_CLASS_PAIR.forEach((pair: SelectorClassPair) => {
      if (hostElement.matches(pair.selector)) {
        this.renderer.addClass(hostElement, pair.class);
      }
    });
  }
}
