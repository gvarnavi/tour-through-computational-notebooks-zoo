import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";
import { svg } from "npm:htl";

export function surfaceEnergyPlot(
  surface_energy_data_polar,
  closest_index,
  width,
) {
  const longitude = d3
    .scalePoint(
      new Set(Plot.valueof(surface_energy_data_polar, "theta")),
      [180, -180],
    )
    .padding(0.5)
    .align(1);

  return Plot.plot({
    width: width,
    projection: {
      type: "azimuthal-equidistant",
      rotate: [0, -90],
      domain: d3.geoCircle().center([0, 90]).radius(1.2)(),
    },
    color: { legend: true },
    marks: [
      // grey discs
      Plot.geo([1, 0.8, 0.6, 0.4, 0.2], {
        geometry: (r) => d3.geoCircle().center([0, 90]).radius(r)(),
        stroke: "#e5dfd6",
        fill: "#e5dfd6",
        strokeOpacity: 0.3,
        fillOpacity: 0.03,
        strokeWidth: 0.5,
      }),

      // white axes
      Plot.link(
        longitude.domain().filter((e, i) => i % 3 === 0),
        {
          x1: longitude,
          y1: 90 - 1.1,
          x2: 0,
          y2: 90,
          stroke: "#e5dfd6",
          strokeOpacity: 0.5,
          strokeWidth: 2.5,
        },
      ),

      // axes labels
      Plot.text(
        longitude.domain().filter((e, i) => i % 3 === 0),
        {
          x: longitude,
          y: 90 - 1.1,
          text: Plot.identity,
          lineWidth: 5,
        },
      ),

      // areas
      Plot.area(surface_energy_data_polar, {
        x1: ({ theta, energy }) => longitude(theta),
        y1: ({ energy }) => 90 - energy,
        x2: 0,
        y2: 90,
        fill: "#fff994",
        stroke: "#fff994",
        curve: "cardinal-closed",
      }),

      // points
      Plot.dot(surface_energy_data_polar, {
        x: ({ theta }) => longitude(theta),
        y: ({ energy }) => 90 - energy,
        fill: "#fff994",
        stroke: "#e5dfd6",
      }),

      // points
      Plot.dot([surface_energy_data_polar[closest_index]], {
        x: ({ theta }) => longitude(theta),
        y: ({ energy }) => 90 - energy,
        fill: "#fff994",
        r: 5,
        stroke: "#e5dfd6",
      }),

      // interactive labels
      Plot.text(
        surface_energy_data_polar,
        Plot.pointer({
          x: ({ theta }) => longitude(theta),
          y: ({ energy }) => 90 - energy,
          text: (d) => `${(100 * d.energy).toFixed(0)}%`,
          textAnchor: "start",
          dx: 4,
          fill: "currentColor",
          stroke: "#e5dfd6",
          maxRadius: 10,
        }),
      ),

      // interactive opacity on the areas
      () =>
        svg`<style>
          g[aria-label=area] path {fill-opacity: 0.1; transition: fill-opacity .2s;}
          g[aria-label=area]:hover path:not(:hover) {fill-opacity: 0.05; transition: fill-opacity .2s;}
          g[aria-label=area] path:hover {fill-opacity: 0.3; transition: fill-opacity .2s;}
      `,
    ],
  });
}
