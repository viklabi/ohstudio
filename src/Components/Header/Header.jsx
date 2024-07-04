import styles from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav>
				<ul className={ styles.nav_item_container }>
					<li className={ styles.nav_item }>
						<NavLink className={ styles.nav_link } to='/'>Home</NavLink>
					</li>
					<li className={ styles.nav_item }>
						<NavLink className={ styles.nav_link } to='/profile'>Profile</NavLink>
					</li>
					<li className={ styles.nav_item } >
						<NavLink className={ styles.nav_link } to='/contact'>Contact</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;