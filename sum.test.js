const { TestScheduler } = require("jest");
const sum = require("./sum");

test("sum of two numbers", () => {
	// expect(sum(1, 2)).toBe(3);
	expect(sum(1, 2)).toBe(3);
});
