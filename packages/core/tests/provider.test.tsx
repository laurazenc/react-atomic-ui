import React from "react"
import { render } from "@testing-library/react"
import { RauiProvider } from "../src/Provider"
describe("Provider", () => {
  it("should render component", () => {
    const { getByText } = render(
      <RauiProvider theme={{}}>
        <div>hello</div>
      </RauiProvider>,
    )

    expect(getByText(/hello/)).toBeDefined()
  })
  it("should fallback to defaultTheme", () => {
    const { getByText } = render(
      <RauiProvider>
        <div>hello</div>
      </RauiProvider>,
    )

    expect(getByText(/hello/)).toBeDefined()
  })
})
