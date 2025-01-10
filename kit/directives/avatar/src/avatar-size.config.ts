import { cva, VariantProps } from 'class-variance-authority';

export const avatarSizeConfig = cva('', {
  variants: {
    size: {
      xs: 'w-8',
      sm: 'w-12',
      md: 'w-16',
      lg: 'w-24',
    }
  },
  defaultVariants: {
    size: 'md',
  },
});

export type AvatarSizeVariants = VariantProps<typeof avatarSizeConfig>;

