import { ButtonVariants } from './button.config';

/**
 * Type representing the shape of a button.
 *
 * This type is derived from the `shape` property of the `ButtonVariants` type.
 * It allows you to set one of the following values for the shape of the button:
 *
 * - `default`: The default shape of the button, usually rectangular with rounded corners.
 * - `square`: A square-shaped button with no rounded corners.
 * - `circle`: A circular button, typically with equal width and height.
 */
export type ButtonShape = ButtonVariants['shape'];
