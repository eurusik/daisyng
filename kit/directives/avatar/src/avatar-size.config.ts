import { cva, VariantProps } from 'class-variance-authority';

export const avatarSizeConfig = cva('', {
  variants: {
    size: {
      tiny: 'w-8',
      small: 'w-12',
      medium: 'w-16',
      large: 'w-24',
    }
  },
  defaultVariants: {
    size: 'medium',
  },
});

export type AvatarSizeVariants = VariantProps<typeof avatarSizeConfig>;

