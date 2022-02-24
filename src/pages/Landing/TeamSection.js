import React, { useEffect, useRef, useState } from 'react';
import Img from 'react-cool-img';
import { prefix } from 'inline-style-prefixer';
import classNames from 'classnames';
import { EffectCards, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import ScrollFade from '@benestudioco/react-scrollfade';
import { PhotoCredit, WingText } from '../../components';
import { registerScrollResizeEventListeners } from '../../helpers';
import baIllustration from '../../assets/images/ba-illus.jpg';
import baLogo from '../../assets/images/ba-logo-yellow.png';
import caratDown from '../../assets/images/carat-down.svg';
import caratRight from '../../assets/images/carat-right-blue.png';
import {
  teamCategories,
  allMembers,
  categoryIndexByMemberIndex,
  memberIndexInCategoryByOverallMemberIndex,
  overallMemberIndexByCategoryMemberIndices,
} from '../../data/team';

import spinner from '../../assets/images/spinner-landscape.gif';

import 'swiper/swiper.scss';
import 'swiper/modules/effect-cards/effect-cards.scss';
import 'swiper/modules/autoplay/autoplay.scss';
import 'swiper/modules/pagination/pagination.scss';

const TeamSection = ({ id }) => {
  const sectionRef = useRef();
  const swiperRef = useRef();
  const autoplayActivatedOnce = useRef(false);
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);

  useEffect(() => {
    const handleScrollResizeEvent = () => {
      const { swiper } = swiperRef.current || {};
      if (swiper) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const autoplayStart = top - window.innerHeight * 0.25 <= 0;
        if (autoplayStart && !autoplayActivatedOnce.current && swiper) {
          // This is a workaround since Swiper only uses the first value of the autoplay prop
          swiper.autoplay.start();
          autoplayActivatedOnce.current = true;
        }
      }
    };
    return registerScrollResizeEventListeners(handleScrollResizeEvent);
  }, []);

  useEffect(() => {
    const { swiper } = swiperRef.current || {};
    if (swiper) {
      const onSlideChange = () => setActiveMemberIndex(swiper.activeIndex);
      swiper.on('slideChange', onSlideChange);
      return () => swiper.off('slideChange', onSlideChange);
    }
    return null;
  }, []);

  return (
    <div id={id} ref={sectionRef} className="team">
      <Img className="team-bg" src={baIllustration} alt="BA logo" />
      <div className="team-content">
        <span className="introduce-text">Introducing</span>
        <div className="introduce-headline">
          <span className="highlight">Our </span>
          <WingText text="Dream Team" wingPosition="end" />
        </div>
        <div className="team-showcase">
          <MemberList swiperRef={swiperRef} activeMemberIndex={activeMemberIndex} />
          <CardsSection swiperRef={swiperRef} activeMemberIndex={activeMemberIndex} />
        </div>
      </div>
      <PhotoCredit
        name="Brandon Evangelista"
        link="https://bit.ly/bayung-angeles-portfolio-brandon"
      />
    </div>
  );
};

const MemberList = ({ swiperRef, activeMemberIndex }) => {
  const activeCategoryIndex = categoryIndexByMemberIndex[activeMemberIndex];
  const activeMemberInCategoryIndex = memberIndexInCategoryByOverallMemberIndex[activeMemberIndex];

  const handleMemberItemClick = (categoryIndex, memberIndex) => {
    const index = overallMemberIndexByCategoryMemberIndices[categoryIndex][memberIndex];
    if (swiperRef.current) swiperRef.current.swiper.slideTo(index);
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
      <Img className="team-list-bg" src={baLogo} alt="Logo" />
    </div>
  );
};

const CardsSection = ({ swiperRef, activeMemberIndex }) => {
  const handleCardContentScroll = () => {
    if (swiperRef.current) swiperRef.current.swiper.autoplay.stop();
  };

  return (
    <div className="team-cards">
      <CardNavButton swiperRef={swiperRef} xDirection="left" />
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
        {allMembers.map((member, index) => (
          // SwiperSlide does not like being nested inside individual components when being mapped
          <SwiperSlide key={member.name} className="team-card">
            <MemberCard
              member={member}
              onCardContentScroll={handleCardContentScroll}
              disableScroll={index !== activeMemberIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <CardNavButton swiperRef={swiperRef} xDirection="right" />
    </div>
  );
};

const CardNavButton = ({ swiperRef, xDirection }) => {
  const handlePreviousCard = () => {
    const { swiper } = swiperRef.current || {};
    if (swiper) {
      const { activeIndex, slides } = swiper;
      const lastIndex = slides.length - 1;
      swiper.slideTo(activeIndex === 0 ? lastIndex : activeIndex - 1);
    }
  };
  const handleNextCard = () => {
    const { swiper } = swiperRef.current || {};
    if (swiper) {
      const { activeIndex, slides } = swiper;
      const lastIndex = slides.length - 1;
      swiper.slideTo(activeIndex === lastIndex ? 0 : activeIndex + 1);
    }
  };

  const isLeft = xDirection === 'left';
  const onClick = isLeft ? handlePreviousCard : handleNextCard;
  const translateX = isLeft ? `-2px` : `2px`;
  const rotate = isLeft ? `90deg` : `-90deg`;

  return (
    <div className="card-nav-btn-container">
      <button type="button" onClick={onClick}>
        <Img
          style={prefix({ transform: `translateX(${translateX}) rotate(${rotate})` })}
          src={caratDown}
          alt="Card navigation arrow"
        />
      </button>
    </div>
  );
};

const MemberCard = ({
  member: {
    name,
    bannerImage,
    education,
    experience,
    affiliations,
    socialMediaLinks: [firstSocialLink],
  },
  onCardContentScroll,
  disableScroll,
}) => (
  <>
    <Img
      className="team-card-banner"
      src={bannerImage}
      placeholder={spinner}
      alt={`${name} Banner`}
    />
    <div className="team-card-content">
      <div
        className={classNames('member-info', { 'no-scroll': disableScroll })}
        onScroll={onCardContentScroll}
      >
        <InfoSection title="Education" items={education} />
        <InfoSection title="Professional Experience" items={experience} />
        <InfoSection title="Affiliations" items={affiliations} />
        <ScrollFade />
      </div>
      <div className="member-footer">
        <div className="member-social-media-links" />
        {firstSocialLink && (
          <a
            className="member-page-link"
            href={firstSocialLink.link}
            target="_blank"
            rel="noreferrer"
          >
            Learn More
            <Img src={caratRight} alt="Button arrow" />
          </a>
        )}
      </div>
    </div>
  </>
);

const InfoSection = ({ title, items }) => (
  <div className="info-section">
    <span className="section-title">{title}</span>
    <ul className="section-content">
      {items.map(({ highlight, description }) => (
        <InfoSectionItem
          key={`${highlight}${description}`}
          highlight={highlight}
          description={description}
        />
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

export default TeamSection;
