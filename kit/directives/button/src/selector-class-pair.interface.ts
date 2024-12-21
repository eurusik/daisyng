import { ButtonSelector } from './button-selector.type';
import { ButtonClass } from './button-class.type';

/**
 * Represents a pair of selector and class for mapping DaisyUI button styles.
 * The `selector` is a button attribute selector, and the `class` is the corresponding CSS class to be applied.
 */
export interface SelectorClassPair {
  selector: `button[${ButtonSelector}]`;
  class: ButtonClass;
}
