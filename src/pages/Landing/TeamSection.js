import React, { forwardRef, useEffect, useRef, useState } from 'react';
import useMeasure from 'react-use-measure';
import { useDimensions } from 'react-viewport-utils';
import mergeRefs from 'merge-refs';
import { prefix } from 'inline-style-prefixer';
import classNames from 'classnames';
import { EffectCards, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import ScrollFade from '@benestudioco/react-scrollfade';
import { PhotoCredit, WingText } from '../../components';
import baIllustration from '../../assets/images/ba-illus.png';
import caratDown from '../../assets/images/carat-down.svg';
import caratRight from '../../assets/images/carat-right-blue.png';
import {
  teamCategories,
  allMembers,
  categoryIndexByMemberIndex,
  memberIndexInCategoryByOverallMemberIndex,
  overallMemberIndexByCategoryMemberIndices,
} from '../../data/team';

import 'swiper/swiper.scss';
import 'swiper/modules/effect-cards/effect-cards.scss';
import 'swiper/modules/autoplay/autoplay.scss';
import 'swiper/modules/pagination/pagination.scss';

const TeamSection = (props, ref) => {
  const swiperRef = useRef();
  const autoplayActivatedOnce = useRef(false);
  const [sectionRef, bounds] = useMeasure({ scroll: true });
  const dimensions = useDimensions();
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);

  const { swiper } = swiperRef.current || {};
  // Assume that the component is 2D (has positive height and width)
  const measurementDone = Object.values(bounds).some(pixels => pixels !== 0);
  const autoplayStart = bounds.top - dimensions.height * 0.25 <= 0;

  useEffect(() => {
    if (swiper) {
      const onSlideChange = () => setActiveMemberIndex(swiper.activeIndex);
      swiper.on('slideChange', onSlideChange);
      return () => swiper.off('slideChange', onSlideChange);
    }
    return null;
  }, [swiper]);

  // This is a workaround since Swiper only uses the first value of the autoplay prop
  useEffect(() => {
    if (!autoplayActivatedOnce.current && measurementDone && swiper && autoplayStart) {
      swiper.autoplay.start();
      autoplayActivatedOnce.current = true;
    }
  }, [swiper, autoplayStart, measurementDone]);

  return (
    <div ref={mergeRefs(ref, sectionRef)} className="team">
      <img className="team-bg" src={baIllustration} alt="BA logo" />
      <div className="team-content">
        <span className="introduce-text">Introducing</span>
        <div className="introduce-headline">
          <span className="highlight">Our </span>
          <WingText text="Dream Team" wingPosition="end" />
        </div>
        <div className="team-showcase">
          <MemberList swiper={swiper} activeMemberIndex={activeMemberIndex} />
          <CardsSection
            swiperRef={swiperRef}
            swiper={swiper}
            disablePrevButton={activeMemberIndex === 0}
            disableNextButton={activeMemberIndex === allMembers.length - 1}
          />
        </div>
      </div>
      <PhotoCredit
        name="Brandon Evangelista"
        link="https://bit.ly/bayung-angeles-portfolio-brandon"
      />
    </div>
  );
};

const MemberList = ({ swiper, activeMemberIndex }) => {
  const activeCategoryIndex = categoryIndexByMemberIndex[activeMemberIndex];
  const activeMemberInCategoryIndex = memberIndexInCategoryByOverallMemberIndex[activeMemberIndex];

  const handleMemberItemClick = (categoryIndex, memberIndex) => {
    const index = overallMemberIndexByCategoryMemberIndices[categoryIndex][memberIndex];
    swiper.slideTo(index);
  };

  return (
    <div className="team-list">
      {teamCategories.map(({ title, members }, categoryIndex) => (
        <div key={title} className="team-list-category">
          <span className="team-list-category-title">{title}</span>
          {members.map(({ name }, memberIndex) => (
            <button
              key={name}
              className={classNames('team-list-category-member', {
                'active-member':
                  categoryIndex === activeCategoryIndex &&
                  memberIndex === activeMemberInCategoryIndex,
              })}
              type="button"
              onClick={() => handleMemberItemClick(categoryIndex, memberIndex)}
            >
              {name}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

const CardsSection = ({ swiperRef, swiper, disablePrevButton, disableNextButton }) => (
  <div className="team-cards">
    <CardNavButton swiper={swiper} xDirection="left" disabled={disablePrevButton} />
    <Swiper
      ref={swiperRef}
      className="swiper-container"
      modules={[EffectCards, Autoplay, Pagination]}
      effect="cards"
      speed={750}
      pagination
      grabCursor
      autoHeight
    >
      {allMembers.map(member => (
        // SwiperSlide does not like being nested inside individual components when being mapped
        <SwiperSlide key={member.name} className="team-card">
          <MemberCard member={member} />
        </SwiperSlide>
      ))}
    </Swiper>
    <CardNavButton swiper={swiper} xDirection="right" disabled={disableNextButton} />
  </div>
);

const CardNavButton = ({ swiper, xDirection, disabled }) => {
  const handlePreviousCard = () => swiper.slidePrev();
  const handleNextCard = () => swiper.slideNext();

  const isLeft = xDirection === 'left';
  const onClick = isLeft ? handlePreviousCard : handleNextCard;
  const translateX = isLeft ? `-2px` : `2px`;
  const rotate = isLeft ? `90deg` : `-90deg`;

  return (
    <div className="card-nav-btn-container">
      <button type="button" onClick={onClick} disabled={disabled}>
        <img
          style={prefix({ transform: `translateX(${translateX}) rotate(${rotate})` })}
          src={caratDown}
          alt="Card navigation arrow"
        />
      </button>
    </div>
  );
};

const MemberCard = ({ member: { name, bannerImage, education, experience, affiliations } }) => (
  <>
    <img className="team-card-banner" src={bannerImage} alt={`${name} Banner`} />
    <div className="team-card-content">
      <div className="member-info">
        <InfoSection title="Education" items={education} />
        <InfoSection title="Professional Experience" items={experience} />
        <InfoSection title="Affiliations" items={affiliations} />
        <ScrollFade />
      </div>
      <div className="member-footer">
        <div className="member-social-media-links" />
        <a className="member-page-link" href="google.com">
          Learn More
          <img src={caratRight} alt="Button arrow" />
        </a>
      </div>
    </div>
  </>
);

const InfoSection = ({ title, items }) => (
  <div className="info-section">
    <span className="section-title">{title}</span>
    <ul className="section-content">
      {items.map(({ highlight, description }) => (
        <InfoSectionItem highlight={highlight} description={description} />
      ))}
    </ul>
  </div>
);

const InfoSectionItem = ({ highlight, description }) => (
  <li className="info-item">
    <span className="info-highlight">{highlight}</span>
    {description && (
      <>
        , <span className="info-description">{description}</span>
      </>
    )}
  </li>
);

export default forwardRef(TeamSection);
