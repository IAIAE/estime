// eval5
module.exports = {
	transform: {
		"^.+\\.[t|j]sx?$": "babel-jest",
	},
	modulePathIgnorePatterns: ["<rootDir>/docs/"]
};
