import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism-dark.min.css" integrity="sha512-Njdz7T/p6Ud1FiTMqH87bzDxaZBsVNebOWmacBjMdgWyeIhUSFU4V52oGwo3sT+ud+lyIE98sS291/zxBfozKw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument