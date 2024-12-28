import { computed, Directive } from '@angular/core';
import { classMerge } from '@daisyng/kit/core/tools';
import { alertTitleConfig } from './alert-title.config';

/**
 * Directive to apply styles to elements with the `[dsyAlertTitle]` attribute.
 *
 * ### Example:
 * ```html
 * <div dsyAlert>
 *   <div dsyAlertTitle>Warning</div>
 * </div>
 * ```
 */
@Directive({
  selector: '[dsyAlertTitle]',
  host: {
    '[class]': 'classes()',
  }
})
export class AlertTitleDirective {
  /**
   * @internal
   */
  readonly classes = computed(() => classMerge(alertTitleConfig()));
}
