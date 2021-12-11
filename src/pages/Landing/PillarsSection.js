import { useEffect, useRef, useState } from 'react';
import { useScroll, useDimensions } from 'react-viewport-utils';
import Sticky from 'react-stickynode';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import classNames from 'classnames';
import { PhotoCredit } from '../../components';
import baIllustration from '../../assets/images/ba-illus.png'
import wingGold from '../../assets/images/wing-gold.svg'
import logoWhite from '../../assets/images/logo-minimal-white.png'

const topics = [
  {
    title: 'Mission',
    descriptionLine1: 'Our mission is to lead Angeles City in honesty,',
    descriptionLine2: 'trust, compassion, and good governance.',
  },
  {
    title: 'Vision',
    descriptionLine1: 'We see a future where Angeles City is',
    descriptionLine2: 'the best city in the Philippines.',
  },
  {
    title: 'Core Values',
    descriptionLine1: 'Truth. Compassion. Innovation.',
    descriptionLine2: 'Cooperation. Leadership.',
  }
]

const PillarsSection = () => {
  const containerRef = useRef();
  const scroll = useScroll();
  const dimensions = useDimensions();

  const [containerRect, setContainerRect] = useState(0);

  const viewportHeight = dimensions.height;
  const { top: containerTop, bottom: containerBottom } = containerRect;

  const topicIndex = (() => {
    if (scroll.y < containerTop + viewportHeight) return 0;
    if (scroll.y < containerTop + (viewportHeight * 2)) return 1;
    return 2;
  })();
  const { title, descriptionLine1, descriptionLine2 } = topics[topicIndex];

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
    <div ref={containerRef} className="pillars">
      <Sticky top={0} bottomBoundary={containerBottom} innerClass="pillars-content">
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
        <div className="topic">
          <span className="highlight">Our </span>
          <SwitchTransition mode="out-in">
            <CSSTransition key={title} classNames="scroll" timeout={1000}>
              <span className="title">{title}<img src={wingGold} alt="wing" /></span>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <SwitchTransition mode="out-in">
          <CSSTransition key={title} classNames="fade" timeout={2000}>
            <div className="description">
              <span>{descriptionLine1}</span>
              <span>{descriptionLine2}</span>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </Sticky>
    </div>
  );
}

export default PillarsSection;
