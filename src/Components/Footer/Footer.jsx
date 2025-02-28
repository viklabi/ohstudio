import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer>
			<div className={ styles.footer_content }>
				<div className={ styles.footer_left }>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 800 800'
						width='100%'
						height='100%'
						preserveAspectRatio='xMidYMid slice'>
						<defs>
							<clipPath id='__lottie_element_2'>
								<rect width='800' height='800' x='0' y='0'></rect>
							</clipPath>
						</defs>
						<g clipPath='url(#__lottie_element_2)'>
							<g
								transform='matrix(0.6598739624023438,0.7513762712478638,-0.7513762712478638,0.6598739624023438,400,400)'
								opacity='1'
								style={ { display: "block" } }>
								<path
									strokeLinecap='butt'
									strokeLinejoin='miter'
									fillOpacity='0'
									strokeMiterlimit='4'
									stroke='#000'
									strokeOpacity='1'
									strokeWidth='100.03817571500485'
									d='M-243.26100158691406,-243.22900390625 C-243.26100158691406,-243.22900390625 243.26100158691406,243.22900390625 243.26100158691406,243.22900390625 M-243.22999572753906,243.25999450683594 C-243.22999572753906,243.25999450683594 243.22999572753906,-243.26100158691406 243.22999572753906,-243.26100158691406 M-344.0010070800781,0.02199999988079071 C-344.0010070800781,0.02199999988079071 344.0010070800781,-0.02199999988079071 344.0010070800781,-0.02199999988079071 M-0.02199999988079071,-344 C-0.02199999988079071,-344 0.02199999988079071,344 0.02199999988079071,344'></path>
							</g>
						</g>
					</svg>
					<p>© Oli Harris 2023</p>
				</div>
				<ul className={ styles.footer_social }>
					<li>
						<a href='https://twitter.com/olvhrs'>Twitter</a>
					</li>
					<li>
						<a href='https://www.linkedin.com/in/oliiharris'>Linkedin</a>
					</li>
					<li>
						<a href='https://mailto:oli@oh.studio'>Mail</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;