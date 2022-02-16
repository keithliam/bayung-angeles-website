import React from 'react';
import { StandardSection } from './components';

const Separator = () => <div className="separator" />;

const Header = () => (
  <>
    Donations are welcome <span className="shake">🎁</span>
  </>
);

const Content = () =>
  'OUR RESOURCES ARE LIMITED, SO WE MAKE THE MOST OUT OF THEM. ANYTHING FROM CASH TO MERCHANDISE AND COLLATERALS ARE GREATLY APPRECIATED.';

const DonationSection = () => (
  <StandardSection
    className="donation"
    absoluteComponent={Separator}
    headerComponent={Header}
    contentComponent={Content}
    link="https://bit.ly/bayung-angeles-donation"
    ctaLinkText="LEARN MORE"
  />
);

export default DonationSection;
