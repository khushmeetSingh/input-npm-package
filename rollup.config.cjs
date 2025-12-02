const json = require("@rollup/plugin-json");
const resolve = require("@rollup/plugin-node-resolve").default;
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const dts = require("rollup-plugin-dts").default;

const packageJson = require("./package.json");

module.exports = [
  // ---------- JS BUILD (CJS + ESM) ----------
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,      // dist/cjs/index.js
        format: "cjs",
        sourcemap: false,
      },
      {
        file: packageJson.module,    // dist/esm/index.js
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      json(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
    external: ["react", "react-dom"],
  },

  // ---------- TYPES BUILD (DTS) ----------
  {
    input: "src/index.ts",           // FIXED (was dist/esm/index.d.ts)
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: ["react", "react-dom"],
  },
];
