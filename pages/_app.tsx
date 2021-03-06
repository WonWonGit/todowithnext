import '../styles/globals.css'
import type { AppProps } from 'next/app'
import RootStore from "@/mobx/RootStore";
import App from "next/app";
import {Provider} from "mobx-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Wrap from "@/components/Wrap";
import {NextRouter, useRouter} from "next/router";
import {useEffect, useState} from "react";

interface State{
    store: RootStore;
}

export default class MyApp extends App{
    state: State = {
        store: new RootStore(),
    }

    render(){

        const {Component, pageProps} = this.props;
        return(
            <>
            <Provider {...this.state.store}>
                {/*<Wrap>*/}
                <Component {...pageProps}/>
                {/*</Wrap>*/}
            </Provider>
            </>
        )
    }
}





// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
//
// export default MyApp
