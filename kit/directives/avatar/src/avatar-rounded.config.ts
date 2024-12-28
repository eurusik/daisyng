import { cva, VariantProps } from 'class-variance-authority';

export const avatarRoundedConfig = cva('', {
  variants: {
    rounded: {
      xs: 'rounded-xl',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    rounded: null,
  },
});

export type AvatarRoundedVariants = VariantProps<typeof avatarRoundedConfig>;
