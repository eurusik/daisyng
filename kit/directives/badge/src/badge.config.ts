import { cva, VariantProps } from 'class-variance-authority';

export const badgeConfig = cva(
  'badge', {
    variants: {
      size: {
        xs: 'badge-xs',
        sm: 'badge-sm',
        md: 'badge-md',
        lg: 'badge-lg',
      },
    },
    defaultVariants: {
      size: 'md'
    },
  },
);

export type BadgeVariants = VariantProps<typeof badgeConfig>;
