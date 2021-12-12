import classNames from 'classnames';

const PhotoCredit = ({ className, title, name, link }) => (
  <a className={classNames('photo-credit', className)} href={link}>{title} © {name}</a>
);

export default PhotoCredit;
