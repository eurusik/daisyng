import { BadgeVariants } from './badge.config';

export type BadgeSize = BadgeVariants['size']

export type BadgeType =
  | 'badge-primary'
  | 'badge-secondary'
  | 'badge-neutral'
  | 'badge-accent'
  | 'badge-info'
  | 'badge-success'
  | 'badge-warning'
  | 'badge-error'
  | 'badge-ghost';

export type BadgeSelector =
  | 'dsyBadgePrimary'
  | 'dsyBadgeSecondary'
  | 'dsyBadgeNeutral'
  | 'dsyBadgeAccent'
  | 'dsyBadgeInfo'
  | 'dsyBadgeSuccess'
  | 'dsyBadgeWarning'
  | 'dsyBadgeError'
  | 'dsyBadgeGhost';
