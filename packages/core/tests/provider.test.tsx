import React from "react"
import { render } from "@testing-library/react"
import { RauiProvider, useTheme } from "../src/Provider"
describe("Provider", () => {
  it("should render component", () => {
    const { getByText } = render(
      <RauiProvider theme={{}}>
        <div>hello</div>
      </RauiProvider>,
    )

    expect(getByText(/hello/)).toBeDefined()
  })
})

describe("useTheme", () => {
  it("should return the theme object", () => {
    const Comp = () => {
      const theme = useTheme()
      expect(typeof theme).toEqual("object")
      return null
    }

    render(
      <RauiProvider theme={{}}>
        <Comp />
      </RauiProvider>,
    )
  })
})
