import { useScroll, useDimensions } from 'react-viewport-utils';
import { CSSTransition, SwitchTransition } from "react-transition-group";
import classNames from 'classnames';
import wingGold from '../assets/images/wing-gold.svg'

const HEADER_TYPES = {
  FIXED: 'fixed',
  ABSOLUTE: 'absolute',
};
const { FIXED, ABSOLUTE } = HEADER_TYPES;

const Header = () => {
  const scroll = useScroll();
  const dimensions = useDimensions();

  const viewportHeight = dimensions.height;
  const fixedHeaderAppear = viewportHeight * 0.4 <= scroll.y;
  const headerType = fixedHeaderAppear ? FIXED : ABSOLUTE;

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={headerType}
        classNames={classNames({
          'slide-from-top': headerType === FIXED,
          'fade': headerType === ABSOLUTE,
        })}
        timeout={750}
      >
        {headerType === ABSOLUTE ? (
          <header>
            <NavigationLinks />
          </header>
        ) : (
          <header className="fixed-header">
            <a className="logo" href="#">
              Báyung <span>Ángeles<img src={wingGold} alt="wing" /></span>
            </a>
            <NavigationLinks />
          </header>
        )}
      </CSSTransition>
    </SwitchTransition>
  )
};

const NavigationLinks = () => (
  <nav className="nav-links">
    <a href="#">Meet Our Team</a>
    <a href="#">Get Involved</a>
    <a href="#">Contact Us</a>
  </nav>
)

export default Header;
