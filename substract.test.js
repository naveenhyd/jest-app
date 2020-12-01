const { TestScheduler } = require("jest");
const substract = require("./substract");

test("substract 2 numbers", () => {
	expect(substract(1, 2)).toBe(-1);
});
