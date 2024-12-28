import { cva, VariantProps } from 'class-variance-authority';

export const avatarConfig = cva('avatar', {
  variants: {
    size: {
      tiny: 'w-8',
      small: 'w-12',
      medium: 'w-16',
      large: 'w-24',
    },
    avatarGroup: {
      group: 'avatar-group -space-x-6 rtl:space-x-reverse'
    },
    indicator: {
      online: 'online',
      offline: 'offline'
    },
    avatarPlaceholder: {
      placeholder: 'placeholder'
    }
  },
  defaultVariants: {
    size: 'medium',
    avatarGroup: null,
    indicator: null,
    avatarPlaceholder: null
  },
});

export type AvatarVariants = VariantProps<typeof avatarConfig>;

