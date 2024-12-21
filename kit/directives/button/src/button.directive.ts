import { Directive, ElementRef, inject, OnInit, Renderer2 } from '@angular/core';
import { SELECTOR_CLASS_PAIR } from './selector-class-pair.const';
import { SelectorClassPair } from './selector-class-pair.interface';

@Directive({
  selector:
    'button[dsyBtn], button[dsyBtnPrimary], button[dsyBtnSecondary], button[dsyBtnNeutral], button[dsyBtnAccent], button[dsyBtnInfo], button[dsyBtnSuccess], button[dsyBtnWarning], button[dsyBtnError], button[dsyBtnGhost], button[dsyBtnLink]',
  exportAs: 'dsyButton',
  standalone: true,
  host: {
    '[class.btn]': 'true',
  },
})
export class ButtonDirective implements OnInit {
  private readonly elRef: ElementRef = inject(ElementRef);
  private readonly renderer: Renderer2 = inject(Renderer2)

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
