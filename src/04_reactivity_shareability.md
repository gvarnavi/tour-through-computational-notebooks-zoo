---
toc: false
style: css/custom.css
title: Notebook Strengths / Differences
---

# Notebook Strengths / Differences

All the computational notebooks we looked at have their strenghts and weaknesses. Here, we quickly review some important features for interactive science communication:

## Interactivity vs Reactivity 

- Mathematica and Jupyter notebooks evaluate cells in the order they are executed  
  - Interactivity &rarr; widget callbacks (notable exception: `Dynamic` content)
- Observable, as well as [Pluto (julia)](https://plutojl.org/) and [Marimo (python)](https://marimo.io/), notebooks instead evaluate cells _topologically_  
  - Interactivity &rarr; built-in (often referred to as _reactivity_)

## Shareability

- Cloud-based solutions[^1]  
- In-browser solutions: native Javascript[^2] and Web Assembly compilation[^3]

## Reproducibility

- "Notebooks' interactivity makes them vulnerable to accidental overwriting or deletion"[^4]
  - Reactive notebooks eliminate hidden state, guaranteeing consistent outputs
- Containerization (e.g. [Binder project](https://jupyter.org/binder)) and version control can help

[^1]: [Wolfram cloud example](https://www.wolframcloud.com/obj/gvarnavi/Published/wolfram-cloud-example_lennard-jones-surface-energy.nb)
[^2]: [Observable notebook example](https://observablehq.com/@gvarnavi/foundry-user-meeting-shareability-example), [Framework example](https://gvarnavi.observablehq.cloud/mf2024-example-lj-surface-energy/)
[^3]: [Curvenote example](https://gvarnavides.curve.space/), [Marimo example](https://marimo.io/p/@gvarnavides/lennard-jones-surface-energy)
[^4]: [A. Rule, et al. arXiv:1810.08055](https://arxiv.org/abs/1810.08055)
