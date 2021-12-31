export const registerScrollResizeEventListeners = listener => {
  window.addEventListener('scroll', listener);
  window.addEventListener('resize', listener);
  return () => {
    window.removeEventListener('scroll', listener);
    window.removeEventListener('resize', listener);
  };
};
