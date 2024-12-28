import { cva, VariantProps } from 'class-variance-authority';

export const avatarPlaceholderConfig = cva('', {
  variants: {
    rounded: {
      square: 'rounded-btn',
      circle: 'rounded-full',
    },
    type: {
      primary: 'bg-primary text-primary-content',
      secondary: 'bg-secondary text-secondary-content',
      neutral: 'bg-neutral text-neutral-content',
      accent: 'bg-accent text-accent-content',
      info: 'bg-info text-info-content',
      success: 'bg-success text-success-content',
      warning: 'bg-warning text-warning-content',
      error: 'bg-error text-error-content',
    }
  },
  defaultVariants: {
    type: null,
    rounded: null,
  },
});

export type AvatarPlaceholderVariants = VariantProps<typeof avatarPlaceholderConfig>;
