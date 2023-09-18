export type Styles = {
  'layout-root': string;
  page: string;
  'page-nav': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
