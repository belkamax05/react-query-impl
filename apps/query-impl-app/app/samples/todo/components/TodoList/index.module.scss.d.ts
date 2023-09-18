export type Styles = {
  'editing-box': string;
  table: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
