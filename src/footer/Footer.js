import React from "react";
import s from "./Footer.module.scss";
import sContainer from "../common/style/Container.module.css"
import ContactsBlock from "../common/componets/contact/ContactsBlock";

const Footer = () => {
	return (
		<div className={s.footerBlock}>
			<div className={`${sContainer.container} ${s.footerContainer}`}>
				<h3 className={s.title}>Mekhedov Dmitry</h3>

				<ContactsBlock />

				{/*<div className={s.icons}>*/}

				{/*<a href={""} className={s.icon}>*/}
				{/*	<FontAwesomeIcon icon={faGithub} size={"2x"}/>*/}
				{/*</a>*/}
				{/*	<a href={""} className={s.icon}>*/}
				{/*	<FontAwesomeIcon icon={faVk} size={"2x"}/>*/}
				{/*</a>*/}
				{/*	<a href={""} className={s.icon}>*/}
				{/*	<FontAwesomeIcon icon={faInstagram} size={"2x"}/>*/}
				{/*</a>*/}
				{/*	<a href={""} className={s.icon}>*/}
				{/*	<FontAwesomeIcon icon={faLinkedin} size={"2x"}/>*/}
				{/*</a>*/}
				{/*</div>*/}
				<div>
					<p className={s.copyright}>©copyriht Mekhedov Dmitry</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;