import React from "react";
import s from "./ContactsBlock.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ContactsBlock = ({icon, title, data, link}) => {
	return (
			<div className={s.icon}>
				<FontAwesomeIcon icon={icon} size={"2x"} />
				<div className={s.contact}>
					<h6>{title}</h6>
					<a href={link}>{data}</a>
				</div>
			</div>
	)
}

export default ContactsBlock;