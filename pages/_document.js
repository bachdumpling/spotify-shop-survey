import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* <div className="bg-black w-screen h-screen grid justify-items-center"> */}
            <Main />
            <NextScript />
          {/* </div> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
