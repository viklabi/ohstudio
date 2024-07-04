import PropTypes from "prop-types";

const Image = ({ src, alt, className }) => {
	return <img className={ className } src={ src } alt={ alt } />;
};

Image.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	className: PropTypes.string,
};

export default Image;