import PropTypes from "prop-types";

const Badge = ({ label }) => {
	return <p className='badge'>{ label }</p>;
};

Badge.propTypes = {
	label: PropTypes.string,
};

export default Badge;