/**
 * A type representing valid button selector values for DaisyUI button styles.
 * These selectors map to specific button styles like primary, secondary, etc.
 *
 *
 * @see {@link `SELECTOR_CLASS_PAIR`} for how these selectors are applied to buttons.
 */
export type ButtonSelector =
  | 'dsyBtnPrimary'
  | 'dsyBtnSecondary'
  | 'dsyBtnNeutral'
  | 'dsyBtnAccent'
  | 'dsyBtnInfo'
  | 'dsyBtnSuccess'
  | 'dsyBtnWarning'
  | 'dsyBtnError'
  | 'dsyBtnGhost'
  | 'dsyBtnLink';
