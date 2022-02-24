export const registerScrollResizeEventListeners = listener => {
  window.addEventListener('scroll', listener);
  window.addEventListener('resize', listener);
  return () => {
    window.removeEventListener('scroll', listener);
    window.removeEventListener('resize', listener);
  };
};

const HEADER_HEIGHT = 100;
export const scrollToElementAvoidHeader = el => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  // Avoids the header from blocking the element
  window.scrollTo({ top: yCoordinate - HEADER_HEIGHT, behavior: 'smooth' });
};
