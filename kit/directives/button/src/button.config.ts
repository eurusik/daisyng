import { cva, VariantProps } from 'class-variance-authority';

export const buttonConfig = cva(
  '',
  {
    variants: {
      responsive: {
        default: '',
        xs: 'btn-xs',
        sm: 'btn-xs sm:btn-sm',
        md: 'btn-xs sm:btn-sm md:btn-md',
        lg: 'btn-xs sm:btn-sm md:btn-md lg:btn-lg',
      },
      shape: {
        default: '',
        square: 'btn-square',
        circle: 'btn-circle',
      },
    },
    defaultVariants: {
      shape: 'default',
      responsive: 'default'
    },
  },
);
export type ButtonVariants = VariantProps<typeof buttonConfig>;

export interface ButtonConfig {
  shape: ButtonVariants['shape'];
  responsive: ButtonVariants['responsive'];
}

export const defaultConfig: ButtonConfig = {
  shape: 'default',
  responsive: 'default'
};
