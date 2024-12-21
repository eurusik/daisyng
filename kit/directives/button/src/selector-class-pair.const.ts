import { SelectorClassPair } from './selector-class-pair.interface';

/**
 * An array of selector and class pairs that define the relationship between custom attributes
 * for buttons and their corresponding style classes.
 * It is used to dynamically assign classes to elements based on their selectors.
 *
 * @remarks
 * This is used for better support of components with custom attributes,
 * allowing easy configuration and changes to button styles via attributes.
 *
 * @see {@link `SelectorClassPair`} for a detailed description of the selector-class pair structure.
 */
export const SELECTOR_CLASS_PAIR: SelectorClassPair[] = [
  {
    selector: 'button[dsyBtnPrimary]',
    class: 'btn-primary'
  },
  {
    selector: 'button[dsyBtnSecondary]',
    class: 'btn-secondary'
  },
  {
    selector: 'button[dsyBtnNeutral]',
    class: 'btn-neutral'
  },
  {
    selector: 'button[dsyBtnAccent]',
    class: 'btn-accent'
  },
  {
    selector: 'button[dsyBtnInfo]',
    class: 'btn-info'
  },
  {
    selector: 'button[dsyBtnSuccess]',
    class: 'btn-success'
  },
  {
    selector: 'button[dsyBtnWarning]',
    class: 'btn-warning'
  },
  {
    selector: 'button[dsyBtnError]',
    class: 'btn-error'
  },
  {
    selector: 'button[dsyBtnGhost]',
    class: 'btn-ghost'
  },
  {
    selector: 'button[dsyBtnLink]',
    class: 'btn-link'
  }
];
