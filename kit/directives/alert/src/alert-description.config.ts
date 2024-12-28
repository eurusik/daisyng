import { cva } from 'class-variance-authority';

/**
 * Configuration for alert description styles.
 */
export const alertDescriptionConfig = cva('text-sm [&_p]:leading-relaxed', {
  variants: {},
});
