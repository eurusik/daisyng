import { cva, VariantProps } from 'class-variance-authority';

/**
 * Configuration for managing alert styles.
 */
export const alertConfig = cva(
  'alert',
  {
    variants: {
      type: {
        info: 'alert-info',
        success: 'alert-success',
        warning: 'alert-warning',
        error: 'alert-error',
      },
    },
    defaultVariants: {
      type: null,
    },
  },
);

/**
 * Type representing the possible variants for an alert configuration.
 *
 * The `AlertVariants` type is extracted from the `alertConfig` using `VariantProps`.
 * This allows for dynamic access to the valid variant keys for the `type` property.
 */
export type AlertVariants = VariantProps<typeof alertConfig>;

/**
 * Defines the structure of the alert configuration.
 */
export interface AlertConfig {
  type: AlertVariants['type'];
}

/**
 * Default configuration for alerts.
 */
export const defaultAlertConfig: AlertConfig = {
  type: null,
};
