import { cva, VariantProps } from 'class-variance-authority';

const baseRingClasses = 'ring-offset-base-100 rounded-full ring ring-offset-2';

export const avatarRingConfig = cva('', {
  variants: {
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
  },
  defaultVariants: {
    ring: null,
  },
});

export type AvatarRingVariants = VariantProps<typeof avatarRingConfig>;
