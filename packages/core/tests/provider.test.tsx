import { Provider } from "../src/provider"
describe("test", () => {
  it("should pass", () => {
    const value = Provider()
    expect(value).toEqual(1)
  })
})
