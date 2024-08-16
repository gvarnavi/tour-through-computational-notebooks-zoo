---
toc: false
style: css/index.css
---

```js
import { lennardJonesPlot } from "./components/lennard-jones_plot.js";
import { surfaceEnergyPlot } from "./components/surface-energy_plot.js";
import { surfaceEnergySlicePlot } from "./components/surface-energy_slice.js";
```

```js
const user_inputs_sliders = Inputs.form({
  n: Inputs.range([3, 8], { value: 6, step: 1, label: "Attractive Power, n:" }),
  m: Inputs.range([9, 16], {
    value: 12,
    step: 1,
    label: "Repulsive Power, m:",
  }),
});
const user_inputs = Generators.input(user_inputs_sliders);

const theta_in_deg_slider = Inputs.range([0, 360], {
  label: "Slice angle",
  value: 60,
});
const theta_in_deg = Generators.input(theta_in_deg_slider);
```

```js
const spring_svgs = [
  {
    x: 0.875,
    y: -2,
    src: "https://raw.githubusercontent.com/gvarnavi/2024-teaching-seminar/main/static/img/spring_compressed_darkbg.svg",
  },
  {
    x: 1.1,
    y: 2,
    src: "https://raw.githubusercontent.com/gvarnavi/2024-teaching-seminar/main/static/img/spring_equilibrium_darkbg.svg",
  },
  {
    x: 1.375,
    y: 1,
    src: "https://raw.githubusercontent.com/gvarnavi/2024-teaching-seminar/main/static/img/spring_expanded_darkbg.svg",
  },
];

const glj_data = d3.range(0.75, 1.5, 0.00125).map((d) => ({
  rho: d,
  energy:
    (user_inputs.n * Math.pow(d, -user_inputs.m) -
      user_inputs.m * Math.pow(d, -user_inputs.n)) /
    (user_inputs.m - user_inputs.n),
  force:
    (user_inputs.m * user_inputs.n * Math.pow(d, -1 - user_inputs.m) -
      user_inputs.m * user_inputs.n * Math.pow(d, -1 - user_inputs.n)) /
    (user_inputs.m - user_inputs.n),
}));

const data = await FileAttachment(
  "./data/square-lattice_surface-energy.json",
).json();
const color_scale = d3.scaleSequential(d3.interpolateTurbo).domain([-7, -2]);

const theta_in_deg_mod = (theta_in_deg % 180) - 90;
const closest_index = Math.round(theta_in_deg / 7.5) % 48;
```

:::hero

# A Tour Through the Computational Notebooks Zoo

> 2024 Molecular Foundry Annual User Meeting  
> Digital Science Communication: Reproducibility, Reactivity, and Web Interfaces  
> Georgios Varnavides | 08/16/2024

:::

<div class="grid grid-cols-3" style="grid-auto-rows: auto;">
  <div class="card img-container" style="min-height:250px;">
    ${resize((width)=>lennardJonesPlot(glj_data, spring_svgs, width))}
    ${user_inputs_sliders}
  </div>
  <div class="card img-container" style="min-height:250px;">
    ${theta_in_deg_slider}
    ${resize((width)=>surfaceEnergySlicePlot(data.square_lattice,theta_in_deg_mod,color_scale,width))}
  </div>
  <div class="card img-container" style="min-height:250px;">
    ${resize((width)=>surfaceEnergyPlot(data.surface_energy_data_polar,closest_index,width))}
  </div>
</div>
