// See https://observablehq.com/framework/config for documentation.
import MarkdownItContainer from "markdown-it-container";
import MarkdownItFootnote from "markdown-it-footnote";

const head = `
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
<link rel="manifest" href="/assets/site.webmanifest">
`;

export default {
  title: "A Tour Through the Computational Notebooks Zoo",
  head: head,
  root: "src",
  theme: "dark",
  typographer: true,
  markdownIt: (md) =>
    md
      .use(MarkdownItContainer, "card") // ::: card
      .use(MarkdownItContainer, "hero") // ::: hero
      .use(MarkdownItFootnote), // [^1] or [^longnote]
};
