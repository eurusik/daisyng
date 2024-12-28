import { cva, VariantProps } from 'class-variance-authority';

const baseRingClasses = 'ring-offset-base-100 rounded-full ring ring-offset-2';

export const avatarImageConfig = cva('', {
  variants: {
    rounded: {
      xs: 'rounded-xl',
      full: 'rounded-full',
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
    }
  },
  defaultVariants: {
    rounded: null,
    ring: null
  },
});

export type AvatarImageVariants = VariantProps<typeof avatarImageConfig>;

