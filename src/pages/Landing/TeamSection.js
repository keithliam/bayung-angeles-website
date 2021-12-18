import React, { useEffect, useRef, useState } from 'react';
import { useScroll } from 'react-viewport-utils';
import classNames from 'classnames';
import { EffectCards, Mousewheel, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import Markdown from 'markdown-to-jsx';
import { useMeasure } from '../../hooks';
import { WingText } from '../../components';
import baIllustration from '../../assets/images/ba-illus.png';
import caratDown from '../../assets/images/carat-down.svg';
import {
  teamCategories,
  allMembers,
  categoryIndexByMemberIndex,
  memberIndexInCategoryByOverallMemberIndex,
  overallMemberIndexByCategoryMemberIndices,
} from '../../data';

import 'swiper/swiper.scss';
import 'swiper/modules/effect-cards/effect-cards.scss';
import 'swiper/modules/mousewheel/mousewheel.scss';
import 'swiper/modules/autoplay/autoplay.scss';
import 'swiper/modules/pagination/pagination.scss';

const TeamSection = () => {
  const swiperRef = useRef();
  const autoplayActivatedOnce = useRef(false);
  const [sectionRef, bounds, measurementDone] = useMeasure();
  const scroll = useScroll();
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);

  const { swiper } = swiperRef.current || {};

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
    const autoplayStartAt = bounds.top - bounds.height * 0.25;
    if (
      !autoplayActivatedOnce.current &&
      measurementDone &&
      swiper &&
      autoplayStartAt <= scroll.y
    ) {
      swiper.autoplay.start();
      autoplayActivatedOnce.current = true;
    }
  }, [swiper, measurementDone, bounds.top, bounds.height, scroll.y]);

  return (
    <div ref={sectionRef} className="team">
      <img className="team-bg" src={baIllustration} alt="BA logo" />
      <div className="team-content">
        <span className="introduce-text">Introducing</span>
        <div className="introduce-headline">
          <span className="highlight">Our </span>
          <WingText text="Dream Team" />
        </div>
        <div className="team-showcase">
          <MemberList swiper={swiper} activeMemberIndex={activeMemberIndex} />
          <CardsSection
            swiperRef={swiperRef}
            swiper={swiper}
            disablePrevButton={activeMemberIndex === 0}
          />
        </div>
      </div>
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

const CardsSection = ({ swiperRef, swiper, disablePrevButton }) => {
  const handlePreviousCard = () => swiper.slidePrev();
  const handleNextCard = () => swiper.slideNext();

  return (
    <div className="team-cards">
      <div className="card-nav-left">
        <button type="button" onClick={handlePreviousCard} disabled={disablePrevButton}>
          <img src={caratDown} alt="" />
        </button>
      </div>
      <Swiper
        ref={swiperRef}
        className="swiper-container"
        modules={[EffectCards, Mousewheel, Autoplay, Pagination]}
        effect="cards"
        speed={750}
        mousewheel={{ forceToAxis: true }}
        pagination
        grabCursor
      >
        {allMembers.map(member => (
          // SwiperSlide does not like being nested inside individual components when being mapped
          <SwiperSlide key={member.name} className="team-card">
            <MemberCard member={member} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card-nav-right">
        <button type="button" onClick={handleNextCard}>
          <img src={caratDown} alt="" />
        </button>
      </div>
    </div>
  );
};

const MemberCard = ({ member: { name, bannerImage, platforms } }) => (
  <>
    <img className="team-card-banner" src={bannerImage} alt={`${name} Banner`} />
    <div className="team-card-content">
      <div className="member-platform">
        <Markdown options={{ disableParsingRawHTML: true }}>{platforms}</Markdown>
      </div>
    </div>
  </>
);

export default TeamSection;
