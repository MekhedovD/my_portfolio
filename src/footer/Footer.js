import React from "react";
import s from "./Footer.module.scss";
import sContainer from "../common/style/Container.module.css"
import ContactsBlock from "../common/componets/contact/ContactsBlock";

const Footer = () => {
	return (
		<div className={s.footerBlock}>
			<div className={`${sContainer.container} ${s.footerContainer}`}>
				{/*<h3 className={s.title}>Mekhedov Dmitry</h3>*/}
				<ContactsBlock />
				<div>
					<p className={s.copyright}>©copyriht Mekhedov Dmitry</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;