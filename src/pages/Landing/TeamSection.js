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
import cardBannerPie from '../../assets/images/card-banner-pie.png';

import 'swiper/swiper.scss';
import 'swiper/modules/effect-cards/effect-cards.scss';
import 'swiper/modules/mousewheel/mousewheel.scss';
import 'swiper/modules/autoplay/autoplay.scss';
import 'swiper/modules/pagination/pagination.scss';

const platformsPie =
  '- **H**igh-quality nutrition and mental health programs.\n- **E**nsure the access to primary and preventive care.\n- **A**ccess to complete medicine and medical equipment.\n- **L**ocal public health department funding.\n- **T**o establish the connection between public and private hospitals for better healthcare coverage.\n- **H**ealthcare workforce would be strengthened by investing in their well-being.';
const teamCategories = [
  {
    title: 'Mayor',
    members: [
      {
        name: 'Amos Rivera',
        bannerImage: cardBannerPie,
        platforms: platformsPie,
      },
    ],
  },
  {
    title: 'Vice Mayor',
    members: [
      {
        name: 'Dr. Pie Juan',
        bannerImage: cardBannerPie,
        platforms: platformsPie,
      },
    ],
  },
  {
    title: 'Councilors',
    members: [
      {
        name: 'Bong Arceo',
        bannerImage: cardBannerPie,
        platforms: platformsPie,
      },
      {
        name: 'Ar. Paul Maiquez',
        bannerImage: cardBannerPie,
        platforms: platformsPie,
      },
      {
        name: 'Don Quito',
        bannerImage: cardBannerPie,
        platforms: platformsPie,
      },
      {
        name: 'Harvs Santiago',
        bannerImage: cardBannerPie,
        platforms: platformsPie,
      },
      {
        name: 'Jeselle Dayrit',
        bannerImage: cardBannerPie,
        platforms: platformsPie,
      },
      {
        name: 'Dan Aloot',
        bannerImage: cardBannerPie,
        platforms: platformsPie,
      },
      {
        name: 'Atty. Israel Forto',
        bannerImage: cardBannerPie,
        platforms: platformsPie,
      },
    ],
  },
];
const allMembers = teamCategories.map(category => category.members).flat();
const categoryIndexByMemberIndex = teamCategories.reduce(
  (acc, category, index) => acc.concat(Array(category.members.length).fill(index)),
  []
);
const memberIndexInCategoryByOverallMemberIndex = teamCategories.reduce(
  (acc, category) => acc.concat(...Array(category.members.length).keys()),
  []
);
const { acc: overallMemberIndexByCategoryMemberIndices } = teamCategories.reduce(
  ({ acc, currentMemberIndex }, category) => {
    const { members } = category;

    return {
      acc: [...acc, members.map((member, index) => currentMemberIndex + index)],
      currentMemberIndex: currentMemberIndex + members.length,
    };
  },
  { currentMemberIndex: 0, acc: [] }
);

const TeamSection = () => {
  const swiperRef = useRef();
  const autoplayActivatedOnce = useRef(false);
  const [sectionRef, bounds, measurementDone] = useMeasure();
  const scroll = useScroll();
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      const { swiper } = swiperRef.current;

      const onSlideChange = () => setActiveMemberIndex(swiper.activeIndex);
      swiper.on('slideChange', onSlideChange);
      return () => swiper.off('slideChange', onSlideChange);
    }
    return null;
  }, [swiperRef]);

  // This is a workaround since Swiper only uses the first value of the autoplay prop
  useEffect(() => {
    const autoplayStartAt = bounds.top - bounds.height * 0.25;
    if (
      !autoplayActivatedOnce.current &&
      measurementDone &&
      swiperRef.current &&
      autoplayStartAt <= scroll.y
    ) {
      swiperRef.current.swiper.autoplay.start();
      autoplayActivatedOnce.current = true;
    }
  }, [measurementDone, bounds.top, bounds.height, scroll.y]);

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
          <MemberList swiper={swiperRef.current} activeMemberIndex={activeMemberIndex} />
          <CardsSection
            swiperRef={swiperRef}
            swiper={swiperRef.current}
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
        <div className="team-list-category">
          <span className="team-list-category-title">{title}</span>
          {members.map(({ name }, memberIndex) => (
            <button
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
  const handlePreviousCard = () => swiper.swiper.slidePrev();
  const handleNextCard = () => swiper.swiper.slideNext();

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
          <MemberCard member={member} />
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
  <SwiperSlide className="team-card">
    <img className="team-card-banner" src={bannerImage} alt={`${name} Banner`} />
    <div className="team-card-content">
      <div className="member-platform">
        <Markdown options={{ disableParsingRawHTML: true }}>{platforms}</Markdown>
      </div>
    </div>
  </SwiperSlide>
);

export default TeamSection;
