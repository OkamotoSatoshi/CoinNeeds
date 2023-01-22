import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";


class MyDocument extends Document {
    
  render() {
    return (
      <Html lang="zh">
        <Head>
            <meta charSet="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta content="DAO Dashboard" name="description" />
            <meta content="STONE TEAM" name="author" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="robots" content="nofollow" />
            <link rel="icon" href="favicon.ico" sizes="16x16" />
        </Head>
        <body className="fixed-left">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;