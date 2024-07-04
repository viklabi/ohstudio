import PropTypes from "prop-types";

const Video = ({ src, className }) => {
	return (
		<video autoPlay loop className={ className }>
			<source src={ src } type='video/mp4' />
			Your browser does not support the video tag.
		</video>
	);
};

Video.propTypes = {
	src: PropTypes.string,
	className: PropTypes.string,
};

export default Video;