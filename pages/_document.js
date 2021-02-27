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
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
                    crossorigin="anonymous"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Ballet&family=Comfortaa:wght@300;400;500&family=Dancing+Script:wght@400;500&family=Montserrat:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Shadows+Into+Light&family=Zilla+Slab:ital,wght@0,300;0,400;1,300;1,400&display=swap"
                    rel="stylesheet"
                />
                <script
                    src="https://kit.fontawesome.com/39c9a805b6.js"
                    crossorigin="anonymous"
                ></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
  }
}

export default MyDocument;
