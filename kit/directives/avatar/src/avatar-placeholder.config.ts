import { cva, VariantProps } from 'class-variance-authority';

const baseRingClasses = 'ring-offset-base-100 rounded-full ring ring-offset-2';

export const avatarPlaceholderConfig = cva('', {
  variants: {
    size: {
      tiny: 'w-8',
      small: 'w-12',
      medium: 'w-16',
      large: 'w-24',
    },
    rounded: {
      square: 'rounded-btn',
      circle: 'rounded-full',
    },
    ring: {
      primary: `ring-primary ${baseRingClasses}`,
      secondary: `ring-secondary ${baseRingClasses}`,
      success: `ring-success ${baseRingClasses}`,
      warning: `ring-warning ${baseRingClasses}`,
      neutral: `ring-neutral ${baseRingClasses}`,
      info: `ring-info ${baseRingClasses}`,
      error: `ring-error ${baseRingClasses}`,
      accent: `ring-accent ${baseRingClasses}`,
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
    type: 'primary',
    size: 'medium',
    rounded: 'circle',
    ring: null
  },
});

export type AvatarPlaceholderVariants = VariantProps<typeof avatarPlaceholderConfig>;

