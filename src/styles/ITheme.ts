export interface ITheme {
   name: string;
   primary: string;
   secondary: string;
   home: string;
   border: {
      focused: string;
      error: string;
      default: string;
   };
   text: {
      entryCard: string;
      default: string;
      button: string;
      error: string;
   };
   button: {
      default: string;
      hovered: string;
      focused: string;
   };
}
