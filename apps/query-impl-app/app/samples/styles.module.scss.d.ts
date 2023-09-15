export type Styles = {
  'layout-root': string;
  nav: string;
  'page-root': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
