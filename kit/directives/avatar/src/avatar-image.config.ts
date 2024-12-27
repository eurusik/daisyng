import { cva, VariantProps } from 'class-variance-authority';

export const avatarImageConfig = cva('avatar', {
  variants: {
    rounded: {
      xs: 'rounded-xl',
      full: 'rounded-full',
    }
  },
  defaultVariants: {
    rounded: null,
  },
});

export type AvatarImageVariants = VariantProps<typeof avatarImageConfig>;

