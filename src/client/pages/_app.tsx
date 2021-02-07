import '../styles/global.scss';
import '../styles/materialize/materialize.scss';

export default function App({
  Component,
  pageProps
}: { Component: any, pageProps: object }) {
  return (<Component { ...pageProps } />);
}
