import { renderHook } from "@testing-library/react-hooks"
import React from "react"
import { useTheme } from "../src"

describe("useTheme", () => {
  it("should return the theme object", () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current).toEqual({})
  })
  it("should throw error on missing provider", async () => {
    const context = jest.spyOn(React, "useContext")
    context.mockImplementationOnce(() => {
      return null
    })

    const { result } = renderHook(() => useTheme())

    expect(result.error).toEqual(
      Error(
        "useTheme: Context not found. Wrap your app within `<RauiProvider />`",
      ),
    )
  })
})
