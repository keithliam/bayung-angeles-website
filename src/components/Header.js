import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useScroll, useDimensions } from 'react-viewport-utils';
import classNames from 'classnames';
import wingGold from '../assets/images/wing-gold.svg'

import '../stylesheets/components/header.css';

const Header = () => {
  const ref = useRef();
  const scroll = useScroll();
  const dimensions = useDimensions();
  
  const [logoWidth, setLogoWidth] = useState(0);
  
  const viewportHeight = dimensions.height;
  const logoAppearAt = viewportHeight * 0.4
  const transparentBefore = viewportHeight - 40;

  const logoAppear = scroll.y >= logoAppearAt;
  const transparent = scroll.y < transparentBefore;
  const linksOffsetFromLeft = logoAppear ? 0 : logoWidth;
  
  const updateLogoWidth = () => setLogoWidth(ref.current.getBoundingClientRect().width);

  useEffect(() => {
    window.addEventListener('resize', updateLogoWidth);
    return () => window.removeEventListener('resize', updateLogoWidth);
  }, [])

  useLayoutEffect(() => {
    updateLogoWidth();
  }, [])

  return (
    <header className={classNames({ transparent, 'logo-appear': logoAppear })}>
      <a ref={ref} className="logo" href="#">
        Báyung <span>Ángeles<img src={wingGold} alt="wing" /></span>
      </a>
      <nav style={{ transform: `translateX(-${linksOffsetFromLeft}px)`}} className="nav-links">
        <a href="#">Meet Our Team</a>
        <a href="#">Get Involved</a>
        <a href="#">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
