import {
  computed,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  InputSignal,
  OnInit,
  Renderer2, Signal
} from '@angular/core';
import { SELECTOR_CLASS_PAIR } from './selector-class-pair.const';
import { SelectorClassPair } from './selector-class-pair.interface';
import { ButtonSize } from './button-size.type';
import { ButtonShape } from './button-shape.type';
import { injectButtonConfig } from './button.token';
import { buttonConfig } from './button.config';
import { classMerge } from '@daisyng/kit/core/tools';
import { ButtonWidth } from './button-width.type';

/**
 * A directive that applies dynamic styling and functionality to buttons.
 *
 * The `ButtonDirective` allows configuring button appearance, size, shape, width, animations, and loading states.
 *
 * ### Example Usage
 * ```html
 * <button dsyBtn width="wide" shape="circle" size="lg" loading>Submit</button>
 * ```
 */
@Directive({
  selector:
    'button[dsyBtn], button[dsyBtnPrimary], button[dsyBtnSecondary], button[dsyBtnNeutral], button[dsyBtnAccent], button[dsyBtnInfo], button[dsyBtnSuccess], button[dsyBtnWarning], button[dsyBtnError], button[dsyBtnGhost], button[dsyBtnLink]',
  exportAs: 'dsyButton',
  host: {
    '[class.btn-outline]': 'outline()',
    '[class.btn-xs]': 'size() === "xs" || responsive()',
    '[class.btn-sm]': 'size() === "sm" && !responsive()',
    '[class.btn-lg]': 'size() === "lg" && !responsive()',
    '[class.no-animation]': 'skipAnimation()',
    '[class]': 'classes()',
  },
})
export class ButtonDirective implements OnInit {
  private readonly config = injectButtonConfig();

  /**
   * Specifies the size of the button.
   * Default: `'md'` (medium size).
   */
  readonly size: InputSignal<ButtonSize> = input<ButtonSize>('md');

  /**
   * Configures the width of the button, such as wide or full-width.
   * Default: Uses the width value from the button configuration.
   */
  readonly width: InputSignal<ButtonWidth> = input<ButtonWidth>(
    this.config.width
  );

  /**
   * Defines the shape of the button, such as square or circle.
   * Default: Uses the shape value from the button configuration.
   */
  readonly shape: InputSignal<ButtonShape> = input<ButtonShape>(
    this.config.shape
  );

  /**
   * Indicates whether the button is in a loading state.
   * When `true`, a loading spinner is displayed.
   * Default: `false`.
   */
  readonly loading: InputSignal<boolean> = input<boolean>(false);

  private readonly elRef: ElementRef = inject(ElementRef);
  private readonly renderer: Renderer2 = inject(Renderer2);

  private spinner: HTMLElement | null = null;

  /**
   * Determines if the button should adapt its size responsively.
   */
  readonly responsive: Signal<boolean> = computed(() => this.elRef.nativeElement.hasAttribute('data-responsive'));

  /**
   * Determines whether animations should be disabled for the button.
   */
  readonly skipAnimation: Signal<boolean> = computed(() => this.elRef.nativeElement.hasAttribute('data-skip-animation'));

  /**
   * Controls whether the button should have an outline style.
   */
  readonly outline: Signal<boolean> = computed(() => this.elRef.nativeElement.hasAttribute('data-outline'));

  /**
   * @internal
   */
  readonly classes = computed(() =>
    classMerge(
      buttonConfig({
        shape: this.shape(),
        responsive: this.responsive() ? this.size() : null,
        width: this.width(),
      })
    )
  );

  /**
   * @internal
   */
  constructor() {
    effect(() => (this.loading() ? this.addSpinner() : this.removeSpinner()));
  }

  /**
   * @internal
   */
  ngOnInit(): void {
    this.applySelectorClassPair();
  }

  private addSpinner(): void {
    if (!this.spinner) {
      this.spinner = this.renderer.createElement('span');
      this.renderer.addClass(this.spinner, 'loading');
      this.renderer.addClass(this.spinner, 'loading-spinner');

      const firstChild = this.elRef.nativeElement.firstChild;

      if (firstChild) {
        this.renderer.insertBefore(
          this.elRef.nativeElement,
          this.spinner,
          firstChild
        );
      } else {
        this.renderer.appendChild(this.elRef.nativeElement, this.spinner);
      }
    }
  }

  private removeSpinner(): void {
    if (this.spinner) {
      this.renderer.removeChild(this.elRef.nativeElement, this.spinner);
      this.spinner = null;
    }
  }

  /**
   * @internal
   * Applies the appropriate class to the host element based on its selector.
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
