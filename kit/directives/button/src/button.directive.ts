import {
  computed,
  Directive,
  ElementRef,
  inject,
  input,
  InputSignal,
  OnInit,
  Renderer2
} from '@angular/core';
import { SELECTOR_CLASS_PAIR } from './selector-class-pair.const';
import { SelectorClassPair } from './selector-class-pair.interface';
import { ButtonSize } from './button-size.type';
import { ButtonShape } from './button-shape.type';
import {injectButtonConfig } from './button.token';
import { buttonConfig } from './button.config';
import { classMerge } from '@daisyng/kit/core/tools';

@Directive({
  selector:
    'button[dsyBtn], button[dsyBtnPrimary], button[dsyBtnSecondary], button[dsyBtnNeutral], button[dsyBtnAccent], button[dsyBtnInfo], button[dsyBtnSuccess], button[dsyBtnWarning], button[dsyBtnError], button[dsyBtnGhost], button[dsyBtnLink]',
  exportAs: 'dsyButton',
  standalone: true,
  host: {
    '[class.btn]': 'true',
    '[class.btn-outline]': 'outline()',
    '[class.btn-wide]': 'wide()',
    '[class.btn-xs]': 'size() === "xs" || responsive()',
    '[class.btn-sm]': 'size() === "sm" && !responsive()',
    '[class.btn-lg]': 'size() === "lg" && !responsive()',
    '[class]': 'classes()',
  },
})
export class ButtonDirective implements OnInit {
  private readonly config = injectButtonConfig();

  readonly outline: InputSignal<boolean> = input<boolean>(false);
  readonly size: InputSignal<ButtonSize> = input<ButtonSize>('md');
  readonly responsive: InputSignal<boolean> = input<boolean>(false);
  readonly wide: InputSignal<boolean> = input<boolean>(false);
  readonly shape: InputSignal<ButtonShape> = input<ButtonShape>(this.config.shape);

  private readonly elRef: ElementRef = inject(ElementRef);
  private readonly renderer: Renderer2 = inject(Renderer2)

  protected readonly classes = computed(() =>
    classMerge(buttonConfig({ shape: this.shape(), responsive: this.responsive() ? this.size() : 'default' }))
  );

  /**
   * @internal
   */
  ngOnInit(): void {
    this.applySelectorClassPair()
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
