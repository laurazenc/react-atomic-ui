import React from "react"
import Head from "next/head"

import { Text } from "@react-atomic-ui/components"

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="title">Welcome to Next.js!</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>
      <Text fontSize="24px">hola</Text>
    </div>
  </div>
)

export default Home
