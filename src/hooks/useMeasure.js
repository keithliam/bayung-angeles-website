import reactUseMeasure from 'react-use-measure';

const useMeasure = props => {
  const [ref, bounds] = reactUseMeasure(props);

  // Assume that the component is 2D (has positive height and width)
  const measurementDone = Object.values(bounds).some(pixels => pixels !== 0);

  return [ref, bounds, measurementDone];
};

export default useMeasure;
