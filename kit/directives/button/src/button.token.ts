import { inject, InjectionToken } from '@angular/core';
import { ButtonConfig, defaultConfig } from './button.config';

export const ButtonConfigToken = new InjectionToken<ButtonConfig>('ButtonConfig');

export function injectButtonConfig(): ButtonConfig {
  return inject(ButtonConfigToken, { optional: true }) ?? defaultConfig;
}
