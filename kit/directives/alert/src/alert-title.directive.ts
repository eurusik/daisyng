import { computed, Directive } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';
import { classMerge } from '@daisyng/kit/core/tools';

/**
 * Configuration for alert title styles.
 */
export const alertTitleConfig = cva('mb-1 font-medium leading-none tracking-tight', {
  variants: {},
});

/**
 * Type definition for the `alertTitleConfig` variants.
 */
export type AlertTitleConfig = VariantProps<typeof alertTitleConfig>;

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
