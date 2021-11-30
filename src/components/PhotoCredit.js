import '../stylesheets/components/photoCredit.css'

const PhotoCredit = ({ className, title, name, link }) => <a className={`photo-credit ${className || ''}`} href={link}>{title} © {name}</a>;

export default PhotoCredit;
