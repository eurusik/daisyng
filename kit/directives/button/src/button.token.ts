import { inject, InjectionToken } from '@angular/core';
import { ButtonConfig, defaultConfig } from './button.config';

/**
 * Injection token for the button configuration.
 * Used to inject the `ButtonConfig` into components or services.
 */
export const ButtonConfigToken = new InjectionToken<ButtonConfig>('ButtonConfig');

/**
 * Function to inject the button configuration.
 * If the `ButtonConfig` is not provided, it returns the default configuration.
 *
 * @returns The injected `ButtonConfig` or the `defaultConfig` if not provided.
 */
export function injectButtonConfig(): ButtonConfig {
  return inject(ButtonConfigToken, { optional: true }) ?? defaultConfig;
}
