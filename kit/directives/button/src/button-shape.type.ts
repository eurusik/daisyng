import { ButtonVariants } from './button.config';

/**
 * Type representing the shape of a button.
 *
 * - `default`: The default shape of the button, usually rectangular with rounded corners.
 * - `square`: A square-shaped button with no rounded corners.
 * - `circle`: A circular button, typically with equal width and height.
 */
export type ButtonShape = ButtonVariants['shape'];
