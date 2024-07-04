import { Header, Footer } from "../../index";
import styles from "./Contact.module.css";

const Contact = () => {
	return (
		<div className={ styles.contact }>
			<Header />
			<h1 className='contact-heading'>
				Lets work together.
				<br />
				<a href='https://mailto:oli@oh.studio'>Get in touch.</a>
			</h1>
			<Footer />
		</div>
	);
};

export default Contact;