import { cva, VariantProps } from 'class-variance-authority';

export const avatarImageConfig = cva('avatar', {
  variants: {
    rounded: {
      xs: 'rounded-xl',
      full: 'rounded-full',
    },
    ring: {
      primary: 'ring-primary ring-offset-base-100 rounded-full ring ring-offset-2'
    }
  },
  defaultVariants: {
    rounded: null,
    ring: null
  },
});

export type AvatarImageVariants = VariantProps<typeof avatarImageConfig>;

