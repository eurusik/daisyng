import { computed, Directive } from '@angular/core';
import { VariantProps } from 'class-variance-authority';
import { classMerge } from '@daisyng/kit/core/tools';
import { alertDescriptionConfig } from './alert-description.config';

/**
 * A directive that applies predefined styles to elements with the `[dsyAlertDesc]` attribute.
 *
 * ### Example:
 * ```html
 * <div dsyAlert>
 *   <div dsyAlertDesc>This is an alert description.</div>
 * </div>
 */
@Directive({
  selector: '[dsyAlertDesc]',
  host: {
    '[class]': 'classes()',
  },
})
export class AlertDescriptionDirective {
  /**
   * @internal
   */
  readonly classes = computed(() => classMerge(alertDescriptionConfig()));
}
