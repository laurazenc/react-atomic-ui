import { render } from "@testing-library/react"
import React from "react"
import { Box, Row } from "./index"

describe("Layout", () => {
  it("should render Box", () => {
    const renderInstance = render(<Box>wadus</Box>)
    expect(renderInstance.asFragment().firstChild).toBeDefined()
  })

  it("should render Row", () => {
    const renderInstance = render(<Row>wadus</Row>)
    expect(renderInstance.asFragment().firstChild).toBeDefined()
  })
})
