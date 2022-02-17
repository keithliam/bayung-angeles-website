import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { registerScrollResizeEventListeners } from '../../../helpers';

const DownloadsPreview = ({ className, previews }) => {
  const ref = useRef();
  const [previewsAppear, setPreviewsAppear] = useState(false);

  useEffect(() => {
    if (previewsAppear) return null; // Avoid setting previewsAppear back to false

    const handleScrollResizeEvent = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        const newPreviewsAppear = top <= (window.innerHeight / 3) * 2;
        if (newPreviewsAppear) setPreviewsAppear(true);
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
            <img src={preview} alt="Download preview" />
          </a>
        </CSSTransition>
      ))}
    </div>
  );
};

export default DownloadsPreview;
