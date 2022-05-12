import { containsSpecialChars } from "../utils/validators";

describe("utils/containsSpecialChars", () => {
  test("no special characters", () => {
    expect(containsSpecialChars("hello")).toBe(false);
  });
  test("some special characters", () => {
    expect(containsSpecialChars("hello!")).toBe(true);
  });
  test("all special characters", () => {
    expect(containsSpecialChars("@#$%^&*!")).toBe(true);
  });
  test('contains the "space" character', () => {
    expect(containsSpecialChars("hi mum")).toBe(true);
  });
});
