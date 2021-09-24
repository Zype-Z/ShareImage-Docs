import 'nextra-theme-docs/style.css';
import Prism from 'prism-react-renderer/prism'

(typeof global !== "undefined" ? global : window).Prism = Prism

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-js-extras';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-shell-session';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';

export default function Nextra({ Component, pageProps }) {
    return <Component {...pageProps }
    />
}