import { computed, Directive } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';
import { classMerge } from '@daisyng/kit/core/tools';

/**
 * Configuration for alert description styles.
 */
export const alertDescriptionConfig = cva('text-sm [&_p]:leading-relaxed', {
  variants: {},
});

/**
 * Type definition for the `alertDescriptionConfig` variants.
 */
export type AlertDescriptionConfig = VariantProps<typeof alertDescriptionConfig>;

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
  }
})
export class AlertDescriptionDirective {
  /**
   * @internal
   */
  readonly classes = computed(() => classMerge(alertDescriptionConfig()));
}
