import {
	picOne,
	picTwo,
	picThree,
	picFour,
	picFive,
	picSix,
	picSeven,
	picEight,
	picNine,
	vidOne,
	vidTwo,
	vidThree,
} from "../../assets";
import {
	Header,
	Title,
	Badge,
	Shop,
	Project,
	Footer,
	Image,
	Video,
} from "../../index";
import styles from "./Home.module.css";

const projects = [
	{
		media: <Image src={ picOne } className={ styles.project_img } alt='' />,
		name: "Aire",
		route: "/",
	},
	{
		media: <Image src={ picTwo } className={ styles.project_img } alt='' />,
		name: "Correlated",
		route: "/",
	},
	{
		media: <Image src={ picThree } className={ styles.project_img } alt='' />,
		name: "Channel 5",
		route: "/",
	},
	{
		media: <Image src={ picFour } className={ styles.project_img } alt='' />,
		name: "Ronald Abram",
		route: "/",
	},
	{
		media: <Video src={ vidOne } className={ styles.project_img } alt='' />,
		name: "Propeller",
		route: "/",
	},
	{
		media: <Image src={ picFive } className={ styles.project_img } alt='' />,
		name: "Schuch",
		route: "/",
	},
	{
		media: <Image src={ picSix } className={ styles.project_img } alt='' />,
		name: "Paperstreet",
		route: "/",
	},
	{
		media: <Video src={ vidTwo } className={ styles.project_img } alt='' />,
		name: "OH.supply",
		route: "/",
	},
	{
		media: <Image src={ picSeven } className={ styles.project_img } alt='' />,
		name: "Monokel Eyewear",
		route: "/",
	},
	{
		media: <Image src={ picEight } className={ styles.project_img } alt='' />,
		name: "Lawtrades",
		route: "/",
	},
	{
		media: <Image src={ picNine } className={ styles.project_img } alt='' />,
		name: "Baselworld",
		route: "/",
	},
	{
		media: <Video src={ vidThree } className={ styles.project_img } alt='' />,
		name: "NYCB",
		route: "/",
	},
];

const Home = () => {
	return (
		<div>
			<Header />
			<div className={ styles.intro }>
				<Title text='A brand and product designer working with clients globally' />
				<div className={ styles.expertise }>
					<p>Expertise</p>
					<Badge label='Branding' />
					<Badge label='Product' />
					<Badge label='Design Systems' />
				</div>
			</div>
			<div className={ styles.project_display }>
				{ projects.map((project, i) => (
					<Project
						key={ i }
						media={ project.media }
						name={ project.name }
						route={ project.route }
					/>
				)) }
			</div>
			<h2 className='contact-heading fade'>
				Lets work together.
				<br />
				<a href='https://mailto:oli@oh.studio'>Get in touch.</a>
			</h2>
			<Shop />
			<Footer />
		</div>
	);
};

export default Home;
