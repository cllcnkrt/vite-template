const sum = (a: number, b: number) => a + b;

test("test", () => {
  expect(sum(1, 2)).toBe(3);
});
