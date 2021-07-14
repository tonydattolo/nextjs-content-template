import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.scss'

export default function App({ Component, pageProps}) {
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
    return <Component {...pageProps} />
}