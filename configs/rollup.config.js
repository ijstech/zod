// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "lib/index.mjs",
        format: "es",
        sourcemap: false,
        exports: "named",
      },
      {
        file: "lib/index.umd.js",
        name: "Zod",
        format: "umd",
        sourcemap: false,
        exports: "named",
      },
    ],
    plugins: [
      typescript({
        tsconfig: "./configs/tsconfig.esm.json",
        sourceMap: false,
      }),
    ],
  },
  {
    // Bundle TypeScript Declarations (.d.ts)
    input: "lib/index.d.ts",
    output: [{ file: "types/bundle.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
