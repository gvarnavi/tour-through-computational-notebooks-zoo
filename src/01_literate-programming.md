---
toc: false
style: css/custom.css
title: Literate Programming
---

# Literate Programming

Literate programming is a high-level programming style which aims to make programs more robust, portable, and easily maintained by combining machine-readable code and human-readable text.

> "The main idea is to treat a program as a piece of literature, addressed to human beings rather than to a computer".  
> Donald E. Knuth, 1992

## Computational Notebooks

Computational notebooks allow one to intertwine code, data, and explanatory text in a single document and aim to enhance scientific communication.

While code and narrative "blocks" are often clearly delineated, recent tools allow one to "interpolate" code output directly into the narrarive, improving information flow. For example, _the current time is ${new Date(now).toLocaleTimeString("en-US")}_.

One can even interpolate graphic outputs, such as this one ${sin_sparkline}, controlled by the input below:

```js
const data = [...Array(100)].map((d, i) => ({ x: i, y: Math.sin(i / 4) ** 2 }));
const time = view(Inputs.range([0, 80], { value: 0, step: 1, label: "Time" }));
```

```js
const sin_sparkline = Plot.plot({
  axis: null,
  margin: 0,
  width: 200,
  height: 18,
  x: { type: "band", round: false },
  marks: [
    Plot.rectY(data.slice(time, time + 20), {
      x: "x",
      y1: 0,
      y2: "y",
      fill: "var(--theme-foreground-focus)"
    })
  ]
});
```
