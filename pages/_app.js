import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import Navbar from '../src/components/navbar'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <div className="content">
            <Navbar />
            <Component {...pageProps} />
          </div>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
