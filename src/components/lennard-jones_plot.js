import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";

export function lennardJonesPlot(lj_data, spring_svgs, width) {
  let marks = [
    Plot.ruleX([1], { stroke: "black" }),
    Plot.ruleY([0], { stroke: "black" }),
  ];

  marks = [
    Plot.image(spring_svgs, {
      x: "x",
      y: "y",
      src: "src",
      width: 200,
    }),
    Plot.line(lj_data, {
      x: "rho",
      y: "energy",
      stroke: "#949aff",
      clip: true,
      //tip: true
    }),
    Plot.crosshairX(lj_data, {
      x: "rho",
      y: "energy",
      ruleStroke: "#949aff",
      ruleStrokeWidth: 2,
      ruleStrokeOpacity: 0.25,
      clip: true,
    }),
    Plot.text(lj_data.slice(lj_data.length - 1), {
      x: "rho",
      y: "energy",
      text: ["Energy"],
      fill: "#949aff",
      dy: 10,
    }),
    Plot.line(lj_data, {
      x: "rho",
      y: "force",
      stroke: "#fff994",
      clip: true,
      //tip: true
    }),
    Plot.crosshairX(lj_data, {
      x: "rho",
      y: "force",
      ruleStroke: "#fff994",
      ruleStrokeWidth: 2,
      ruleStrokeOpacity: 0.25,
      clip: true,
    }),
    Plot.text(lj_data.slice(lj_data.length - 1), {
      x: "rho",
      y: "force",
      text: ["Force"],
      fill: "#fff994",
      dy: 15,
    }),
  ];

  return Plot.plot({
    width: width,
    aspectRatio: 12.5,
    x: {
      domain: [0.75, 1.5],
      label: "interatomic distance",
    },
    y: {
      domain: [-2.75, 2.75],
      grid: true,
      label: "potential / force",
    },
    style: { fontSize: "12px" },
    marks: marks,
  });
}
