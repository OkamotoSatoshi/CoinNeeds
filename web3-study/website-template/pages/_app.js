import '../styles/globals.css'
import '/public/assets/plugins/jvectormap/jquery-jvectormap-2.0.2.css' ;
import '/public/assets/css/bootstrap.min.css' ;
import '/public/assets/css/icons.css' ;
import '/public/assets/css/style.css' ;
import '/public/assets/css/extra.css' ;
import Head from 'next/head'
import Layout from '/src/components/layout/index';
import $ from "jquery"
global.$ = $ ;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Stone Plan 基石计划</title>
      </Head>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </>
  )

}

export default MyApp
