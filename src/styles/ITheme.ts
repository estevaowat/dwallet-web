export interface ITheme {
   name: string;
   primary: string;
   secondary: string;
   border: {
      focused: string;
      error: string;
      default: string;
   };
   text: {
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
