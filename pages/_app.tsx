import React from "react"
import {Provider} from "react-redux"
import App from "next/app"
import withRedux from "next-redux-wrapper"
import store from '../store'
import Layout from '../components/App'

const makeStore = () => {
    return store
};

class MyApp extends App {

    static async getInitialProps({ Component, ctx }: any) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
        return { pageProps }
    }

    render() {
        const { Component, pageProps, store }: any = this.props
        return (
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        )
    }
}

export default withRedux(makeStore)(MyApp)
