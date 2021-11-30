import classNames from 'classnames';
import { useScroll, useDimensions } from 'react-viewport-utils';
import wingGold from '../assets/images/wing-gold.svg'

import '../stylesheets/components/header.css';

const Header = () => {
  const scroll = useScroll();
  const dimensions = useDimensions();

  const viewportHeight = dimensions.height;
  const whiteLinks = scroll.y >= viewportHeight * 0.4;
  const transparent = scroll.y < viewportHeight - 40;

  return (
    <header className={classNames({ transparent })}>
      <a className="logo" href="#">
        Báyung <span>Ángeles<img src={wingGold} alt="wing" /></span>
      </a>
      <nav className={classNames('nav-links', { 'white-links': whiteLinks })}>
        <a href="#">Meet Our Team</a>
        <a href="#">Get Involved</a>
        <a href="#">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
