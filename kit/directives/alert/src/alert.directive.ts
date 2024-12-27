import { computed, Directive, input, InputSignal } from '@angular/core';
import { classMerge } from '@daisyng/kit/core/tools';
import { alertConfig } from './alert.config';
import { AlertType } from './alert.type';

/**
 * A directive that applies styling and behavior to elements with the `[dsyAlert]` attribute.
 */
@Directive({
  selector: '[dsyAlert]',
  host: {
    role: 'alert',
    '[class.shadow-lg]': 'shadow()',
    '[class]': 'classes()',
  },
})
export class AlertDirective {
  /**
   * Defines the type of the alert, such as informational, success, warning, or error.
   * Default: No specific type applied `null`.
   */
  readonly type: InputSignal<AlertType> = input<AlertType>(null)

  /**
   * Controls the visibility of a large shadow effect on the alert element.
   * Default: No shadow applied `false`.
   */
  readonly shadow: InputSignal<boolean> = input<boolean>(false)

  /**
   * @internal
   */
  readonly classes = computed(() => classMerge(alertConfig({
    type: this.type(),
  })))
}
