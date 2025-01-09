import { BadgeSelector, BadgeType } from './badge.type';

export interface SelectorClassPair<
  Selector extends BadgeSelector = BadgeSelector,
  Class extends BadgeType = BadgeType
> {
  selector: `div[${Selector}], span[${Selector}]`;
  class: Class;
}
