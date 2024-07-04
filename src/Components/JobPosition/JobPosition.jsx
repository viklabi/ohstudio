import PropTypes from "prop-types";
import Badge from "../Badge";
import styles from "./JobPosition.module.css"

const JobPosition = ({ time, workplace, jobType, jobTitle }) => {
	return (
		<div className={ styles.job_position }>
			<p className={ styles.job_info }>{ time }</p>
			<h3>{ workplace }</h3>
			<p className={ styles.job_info }>{ jobType }</p>
			<Badge label={ jobTitle } />
		</div>
	);
};

JobPosition.propTypes = {
	time: PropTypes.string,
	workplace: PropTypes.string,
	jobType: PropTypes.string,
	jobTitle: PropTypes.string,
};

export default JobPosition;