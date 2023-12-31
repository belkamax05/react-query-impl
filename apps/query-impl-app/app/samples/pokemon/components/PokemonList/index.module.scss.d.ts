export type Styles = {
  'preview-cell': string;
  'preview-modal-container': string;
  table: string;
  'table-footer': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
