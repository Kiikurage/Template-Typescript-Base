import { describe, expect, it } from "bun:test";
import { add } from "./index";

describe("index", () => {
	it("add", () => {
		expect(add(1, 2)).toBe(3);
	});
});
