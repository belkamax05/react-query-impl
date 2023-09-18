export type Styles = {
  img: string;
  root: string;
  stats: string;
  title: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
