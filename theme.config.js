import Image from 'next/image';
export default {
  github: 'https://github.com/Zype-Z/ShareImage.js',
  docsRepositoryBase: 'https://github.com/Rajdeep-TG/ShareImage-Documentation/blob/main',
  titleSuffix: ' – ShareImage',
  logo: (
    <>
      <Image src="/logoFull.png" alt="ShareImage Logo" height="45" width="245" align="center"/>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="ShareImage: Generate Social Images with OpenSource!" />
      <meta name="og:description" content="ShareImage: Generate Social Images with OpenSource!" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://shimg.zype.cf/v1/image?title=Docs to Get Started&cloudName=zype&imagePublicID=ShareImage/Docs-Card" />
      <meta name="twitter:site:domain" content="shimg.zype.cf" />
      <meta name="twitter:url" content="https://shimg.zype.cf" />
      <meta name="og:title" content="ShareImage: Generate Social Images with OpenSource!" />
      <meta name="og:image" content="https://shimg.zype.cf/v1/image?title=Docs to Get Started&cloudName=zype&imagePublicID=ShareImage/Docs-Card" />
      <meta name="apple-mobile-web-app-title" content="ShareImage" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>Copyright {new Date().getFullYear()} © Zype Inc.</>,
}
