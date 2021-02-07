import Link from 'next/link';
import IProps from './interfaces/props';
import ILink from './interfaces/link';

const renderLink = (link: ILink) => {
  const {
    path,
    title
  } = link;

  return (<li key={ path }><Link href={ path }>{ title }</Link></li>);
};

export default function NavBar(props: IProps) {
  const { links } = props;

  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="right hide-on-med-and-down">
          { links.map(renderLink) }
        </ul>
      </div>
    </nav>
  );
}
