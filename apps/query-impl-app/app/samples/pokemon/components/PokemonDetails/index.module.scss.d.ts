export type Styles = {
  root: string;
  'stats-table': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
