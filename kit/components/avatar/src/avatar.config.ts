import { cva, VariantProps } from 'class-variance-authority';

export const avatarConfig = cva('', {
  variants: {
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
    avatarGroup: null,
    indicator: null,
    avatarPlaceholder: null
  },
});

export type AvatarVariants = VariantProps<typeof avatarConfig>;

