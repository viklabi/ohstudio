import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./Project.module.css";

const Project = ({ media, name, route }) => {
	return (
		<div className={ styles.project }>
			{ media }
			<div className={ styles.overlay }></div>
			<h3>{ name }</h3>
			<NavLink to={ route }></NavLink>
		</div>
	);
};

Project.propTypes = {
	media: PropTypes.any,
	name: PropTypes.string,
	route: PropTypes.string,
};

export default Project;