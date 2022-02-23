import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Img from 'react-cool-img';
import { registerScrollResizeEventListeners } from '../../../helpers';

import spinner from '../../../assets/images/spinner.gif';

const DownloadsPreview = ({ className, previews }) => {
  const ref = useRef();
  const [previewsAppear, setPreviewsAppear] = useState(false);

  useEffect(() => {
    const handleScrollResizeEvent = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        const newPreviewsAppear = top <= (window.innerHeight / 3) * 2;
        setPreviewsAppear(newPreviewsAppear);
      }
    };
    handleScrollResizeEvent(); // Trigger immediately to show element if it's already in view
    const unregisterScrollResizeEventListeners =
      registerScrollResizeEventListeners(handleScrollResizeEvent);

    return () => {
      unregisterScrollResizeEventListeners();
    };
  }, [previewsAppear]);

  return (
    <div ref={ref} className={classNames('downloads-preview', className)}>
      {previews.map(({ preview, link }, index) => (
        <CSSTransition key={link} in={previewsAppear} timeout={index * 50} classNames="fade-in">
          <a className="preview-item" href={link} target="_blank" rel="noreferrer">
            <Img src={preview} placeholder={spinner} alt="Download preview" />
          </a>
        </CSSTransition>
      ))}
    </div>
  );
};

export default DownloadsPreview;
