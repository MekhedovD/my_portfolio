import React from "react";
import s from "./ContactsBlock.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

const ContactsBlock = () => {
	return (
		<div className={s.icons}>
			<div className={s.icon}>
				<FontAwesomeIcon icon={faPhone} size={"2x"} />
				<div className={s.contact}>
					<h6>Phone</h6>
					<p>+375 33 3786584</p>
				</div>
			</div>
			<div className={s.icon}>
				<FontAwesomeIcon icon={faEnvelope} size={"2x"} />
				<div className={s.contact}>
					<h6>Email</h6>
					<p>mekhedov.d@mail.ru</p>
				</div>
			</div>
			<div className={s.icon}>
				<FontAwesomeIcon icon={faMapMarkerAlt} size={"2x"} />
				<div className={s.contact}>
					<h6>Address</h6>
					<p>Minsk, Belarus</p>
				</div>
			</div>
		</div>
	)
}

export default ContactsBlock;