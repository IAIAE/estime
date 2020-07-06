const webpack = require("webpack");
const pkg = require("./package.json");

module.exports = function(opts) {
	const isProd = opts.program.state === "prod";

	return {
		mode: isProd ? "production" : "development",
		clean: isProd ? false : true,
		shouldUseEntryHTML: false,
		polyfills: null,
		shouldUseSourceMap: true,
		output: {
			globalObject: "this",
			libraryTarget: "umd",
			library: "estime",
		},
		assest: {
			js: {
				name: isProd ? "estime.min.js" : "estime.js",
				output: "",
			},
		},
		// target: "node",
		optimization: {
			runtimeChunk: false,
			splitChunks: false,
		},
		babel: {
			useBuiltIns: false,
			modules: "cjs",
			plugins: [
				[
					"search-and-replace",
					{
						rules: [
							{
								search: "%VERSION%",
								replace: pkg.version,
							},
						],
					},
				],
			],
		},
	};
};
