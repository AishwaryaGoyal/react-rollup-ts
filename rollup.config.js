import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

// rollup.config.js
export default {
  input: "js/index.js",
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
      preventAssignment: true,
    }),
    nodeResolve({
      extensions: [".js", ".jsx"],
    }),
    commonjs({
      include: ["node_modules/**"],
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "dist"],
      historyApiFallback: true,
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "dist" }),
  ],
  output: {
    file: "js/bundle.js",
    format: "iife",
    sourcemap: "true",
  },
};
