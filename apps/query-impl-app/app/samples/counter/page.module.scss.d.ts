export type Styles = {
  root: string;
  view: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
