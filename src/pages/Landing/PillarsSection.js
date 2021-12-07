import { useEffect, useRef, useState } from 'react';
import { useScroll, useDimensions } from 'react-viewport-utils';
import Sticky from 'react-stickynode';
import classNames from 'classnames';
import { PhotoCredit } from '../../components';
import baIllustration from '../../assets/images/ba-illus.png'
import wingGold from '../../assets/images/wing-gold.svg'
import logoWhite from '../../assets/images/logo-minimal-white.png'

const PillarsSection = () => {
  const containerRef = useRef();
  const scroll = useScroll();
  const dimensions = useDimensions();

  const [containerRect, setContainerRect] = useState(0);

  const viewportHeight = dimensions.height;
  const { top: containerTop, bottom: containerBottom } = containerRect;

  const nthPillar = (() => {
    if (scroll.y < containerTop + viewportHeight) return 1;
    if (scroll.y < containerTop + (viewportHeight * 2)) return 2;
    return 3;
  })();

  const backgroundAppearAt = containerTop;
  const showBackground = backgroundAppearAt <= scroll.y;
  const showLogo = backgroundAppearAt + (viewportHeight * 0.2) <= scroll.y;
  const backgroundScale = showBackground
    ? 100 + (((scroll.y - backgroundAppearAt) / 50000) * 100)
    : 100;

  useEffect(() => {
    setContainerRect(containerRef.current.getBoundingClientRect());
  }, []);

  return (
    <div ref={containerRef} className="three-pillars">
      <Sticky top={0} bottomBoundary={containerBottom} innerClass={`pillars-content pillar-${nthPillar}`}>
        <img
          className={classNames('pillars-bg', { 'bg-show': showBackground })}
          style={{ transform: `scale(${backgroundScale}%)` }}
          src={baIllustration}
          alt="illustration"
        />
        <img
          className={classNames('pillars-bg-logo', { 'bg-show': showLogo })}
          src={logoWhite}
          alt="illustration"
        />
        <PhotoCredit
          className={classNames('pillars-photo-credit', { 'credit-show': showLogo })}
          title=""
          name="Brandon Evangelista"
          link="#"
        />
        <span className="title">
          <span className="highlight">Our</span>
          <div className="scroll-container">
            <span>Mission<img src={wingGold} alt="wing" /></span>
            <span>Vision<img src={wingGold} alt="wing" /></span>
            <span>Core Values<img src={wingGold} alt="wing" /></span>
          </div>
        </span>
        <div className="description scroll-container">
          <span>Our mission is to lead Angeles City in honesty,<span className="word-wrap">trust, compassion, and good governance.</span></span>
          <span>We see a future where Angeles City is<span className="word-wrap">the best city in the Philippines.</span></span>
          <span>Truth. Compassion. Innovation.<span className="word-wrap">Cooperation. Leadership.</span></span>
        </div>
      </Sticky>
    </div>
  );
}

export default PillarsSection;
