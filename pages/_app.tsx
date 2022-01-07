import '../styles/globals.css'
import type { AppProps } from 'next/app'
import RootStore from "@/mobx/RootStore";
import App from "next/app";
import {Provider} from "mobx-react";
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <Component {...pageProps}/>
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
