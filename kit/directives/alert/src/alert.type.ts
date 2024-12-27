import { AlertVariants } from './alert.config';

/**
 * Type representing the possible types for an alert configuration.
 *
 * The `AlertType` type is extracted from the `AlertVariants` type, specifically
 * the `type` variant, which defines the possible alert types such as `info`,
 * `success`, `warning`, and `error`.
 */
export type AlertType = AlertVariants['type']
