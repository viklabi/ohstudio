import styles from './Profile.module.css'
import { profilePicOne, profilePicTwo } from "../../assets";
import {
	Header,
	Title,
	Image,
	Footer,
	Badge,
	JobPosition,
	clients,
	experienceList,
} from "../../index";

const Profile = () => {
	return (
		<div>
			<Header />
			<Title className={ styles.profile_heading } text="Hey 👋🏼 I'm Oli" />
			<div className={ styles.project_display }>
				<Image src={ profilePicOne } alt='' className={ styles.profile_img } />
				<Image src={ profilePicTwo } alt='' className={ styles.profile_img } />
			</div>
			<div className={ styles.about }>
				<Badge label='About' />
				<p className={ styles.about_content }>
					A freelance designer based in the UK. I combine my experience in
					product and brand to solve problems, tell stories, and create
					compelling experiences.
				</p>
			</div>
			<div className={ styles.profile_intro }>
				<Badge label='Experience' />
				<h2>Where Ive worked</h2>
			</div>
			<div className={ styles.job_experiences }>
				{ experienceList.map((experience, i) => (
					<JobPosition
						key={ i }
						time={ experience.time }
						workplace={ experience.workplace }
						jobType={ experience.jobType }
						jobTitle={ experience.jobTitle }
					/>
				)) }
			</div>
			<div className={ styles.profile_intro }>
				<Badge label='Clients' />
				<h2>Who ive worked with</h2>
			</div>
			<div className={ styles.clients }>
				{ clients.map((client, i) => (
					<Image key={ i } src={ client } />
				)) }
			</div>
			<h2 className='contact-heading'>
				Lets work together.
				<br />
				<a href='https://mailto:oli@oh.studio'>Get in touch.</a>
			</h2>
			<Footer />
		</div>
	);
};

export default Profile;