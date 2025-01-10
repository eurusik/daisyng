import { cva, VariantProps } from 'class-variance-authority';

/**
 * Configuration for the button styles.
 */
export const buttonConfig = cva(
  'btn',
  {
    variants: {
      responsive: {
        xs: 'btn-xs',
        sm: 'btn-xs sm:btn-sm',
        md: 'btn-xs sm:btn-sm md:btn-md',
        lg: 'btn-xs sm:btn-sm md:btn-md lg:btn-lg',
      },
      width: {
        full: 'btn-block',
        wide: 'btn-wide',
      },
      shape: {
        square: 'btn-square',
        circle: 'btn-circle',
      },
    },
    defaultVariants: {
      shape: null,
      responsive: null,
      width: null,
    },
  },
);

/**
 * Type representing the possible variants for a button configuration.
 *
 * The `ButtonVariants` type is extracted from the `buttonConfig` using `VariantProps`.
 * This allows for dynamic access to the valid variant keys for the `shape` and `responsive` properties.
 */
export type ButtonVariants = VariantProps<typeof buttonConfig>;

/**
 * Interface representing the structure of a button configuration.
 */
export interface ButtonConfig {
  shape: ButtonVariants['shape'];
  responsive: ButtonVariants['responsive'];
  width: ButtonVariants['width'];
}

/**
 * Default configuration for the button.
 */
export const defaultButtonConfig: ButtonConfig = {
  shape: null,
  responsive: null,
  width: null
};
