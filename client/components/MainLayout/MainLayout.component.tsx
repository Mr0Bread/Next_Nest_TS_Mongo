import Head from 'next/head';
import { useEffect } from 'react';
import IProps from './interfaces/props.interface';
import NavBar from '../NavBar';
import ILink from '../NavBar/interfaces/link';

export default function MainLayout(props: IProps) {
  const {
    children,
    pageTitle
  } = props;
  const links: Array<ILink> = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'About',
      path: '/about'
    },
    {
      title: 'Sign In',
      path: '/signin'
    },
    {
      title: 'Sign Up',
      path: '/signup'
    }
  ];

  return (
    <div>
      <Head>
        <script type="text/javascript" src="/static/scripts/materialize/bin/materialize.min.js" />
        <title>
          Mr0Bread
          { pageTitle ? ` | ${ pageTitle }` : '' }
        </title>
      </Head>
      <NavBar links={ links } />
      <div className="container">
        { children }
      </div>
    </div>
  );
}
