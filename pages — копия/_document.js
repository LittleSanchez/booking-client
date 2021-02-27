import Document, { Html, Head, Main, NextScript } from 'next/document'
import Layout from '../components/layout'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
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
            </Head>
            <body>
                <Layout>
                    <Main />
                </Layout>
                <NextScript />
            </body>
        </Html>
    );
  }
}

export default MyDocument