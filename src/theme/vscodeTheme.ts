import { PrismTheme } from 'prism-react-renderer';

const hotVibrantTheme: PrismTheme = {
  plain: {
    backgroundColor: "transparent", /* conserve ton gradient */
    color: "#e0def4",
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "#7c8f8f",
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "inserted"],
      style: {
        color: "#f7768e", /* rose chaud */
      },
    },
    {
      types: ["number", "builtin"],
      style: {
        color: "#ff9e64", /* orange saturé */
      },
    },
    {
      types: ["constant", "function"],
      style: {
        color: "#82aaff", /* bleu vif */
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#c3ccdc",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "#bb9af7", /* violet lumineux */
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "#7aa2f7", /* bleu électrique */
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "#c3e88d", /* vert clair saturé */
      },
    },
    {
      types: ["tag", "deleted"],
      style: {
        color: "#ff5370", /* rouge vif */
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#e0af68", /* jaune chaud */
      },
    },
    {
      types: ["operator"],
      style: {
        color: "#f4f4f5",
      },
    },
  ],
};

export default hotVibrantTheme;