import { render } from "@testing-library/react"
import React from "react"
import { Text } from "./"

describe("Text", () => {
  it("should render", () => {
    const renderInstance = render(<Text>wadus</Text>)
    expect(renderInstance.asFragment().firstChild).toBeDefined()
  })
})
