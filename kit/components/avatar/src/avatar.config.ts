import { cva, VariantProps } from 'class-variance-authority';

export const avatarConfig = cva('avatar', {
  variants: {
    size: {
      tiny: 'w-8',
      small: 'w-16',
      medium: 'w-20',
      large: 'w-32',
    }
  },
  defaultVariants: {
    size: 'medium',
  },
});

export type AvatarVariants = VariantProps<typeof avatarConfig>;

