import React from "react";
import s from "./Footer.module.scss";
import sContainer from "../common/style/Container.module.css"
import ContactsBlock from "../common/componets/contact/ContactsBlock";
import Fade from 'react-reveal/Fade';

const Footer = () => {
	return (
		<div className={s.footerBlock}>
			<Fade>
				<div className={`${sContainer.container} ${s.footerContainer}`}>
					<ContactsBlock/>
					<div>
						<p className={s.copyright}>©copyriht Mekhedov Dmitry</p>
					</div>
				</div>
			</Fade>

		</div>
	);
}

export default Footer;