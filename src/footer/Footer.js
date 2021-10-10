import React from "react";
import s from "./Footer.module.scss";
import sContainer from "../common/style/Container.module.css"
import ContactsBlock from "../common/componets/contact/ContactsBlock";
import Fade from "react-reveal/Fade";
import {faMapMarkerAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

const Footer = () => {

	const dataBlock = [
		{
			icon: faPhone,
			title: "Phone",
			data: "+375 33 3786584",
			link: "tel:+375333786584"
		},
		{
			icon: faEnvelope,
			title: "Email",
			data: "mekhedov.d@mail.ru",
			link: "mailto:mekhedov.d@mail.ru"
		},
		{
			icon: faMapMarkerAlt,
			title: "Address",
			data: "Minsk, Belarus",
			link: ""
		}
	]

	return (
		<div className={s.footerBlock}>

			<Fade>
				<div className={`${sContainer.container}`}>
					<div className={`${s.footerContainer}`}>
						{dataBlock.map(d => <ContactsBlock
							icon={d.icon}
							title={d.title}
							data={d.data}
							link={d.link}
						/>)}
					</div>

					<div className={s.copyright}>
						<p>©copyriht Mekhedov Dmitry</p>
					</div>
				</div>
			</Fade>

		</div>
	);
}

export default Footer;