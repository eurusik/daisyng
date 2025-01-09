import { SelectorClassPair } from './badge.interface';

export const SELECTOR_CLASS_PAIR: SelectorClassPair[] = [
  {
    selector: 'div[dsyBadgePrimary], span[dsyBadgePrimary]',
    class: 'badge-primary'
  },
  {
    selector: 'div[dsyBadgeSecondary], span[dsyBadgeSecondary]',
    class: 'badge-secondary'
  },
  {
    selector: 'div[dsyBadgeNeutral], span[dsyBadgeNeutral]',
    class: 'badge-neutral'
  },
  {
    selector: 'div[dsyBadgeAccent], span[dsyBadgeAccent]',
    class: 'badge-accent'
  },
  {
    selector: 'div[dsyBadgeInfo], span[dsyBadgeInfo]',
    class: 'badge-info'
  },
  {
    selector: 'div[dsyBadgeSuccess], span[dsyBadgeSuccess]',
    class: 'badge-success'
  },
  {
    selector: 'div[dsyBadgeWarning], span[dsyBadgeWarning]',
    class: 'badge-warning'
  },
  {
    selector: 'div[dsyBadgeError], span[dsyBadgeError]',
    class: 'badge-error'
  },
  {
    selector: 'div[dsyBadgeGhost], span[dsyBadgeGhost]',
    class: 'badge-ghost'
  },
];
