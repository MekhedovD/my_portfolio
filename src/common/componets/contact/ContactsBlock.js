import React from "react";
import s from "./ContactsBlock.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faMapMarkerAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
// import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

const ContactsBlock = ({icon, title, data, link}) => {
	return (
		// <div className={s.icons}>
			<div className={s.icon}>
				<FontAwesomeIcon icon={icon} size={"2x"} />
				<div className={s.contact}>
					<h6>{title}</h6>
					<a href={link}>{data}</a>
				</div>
			</div>
		// </div>
	)
}

// const ContactsBlock = () => {
// 	return (
// 		<div className={s.icons}>
// 			<div className={s.icon}>
// 				<FontAwesomeIcon icon={faPhone} size={"2x"} />
// 				<div className={s.contact}>
// 					<h6>Phone</h6>
// 					<a href="tel:+375333786584">+375 33 3786584</a>
// 				</div>
// 			</div>
// 			<div className={s.icon}>
// 				<FontAwesomeIcon icon={faEnvelope} size={"2x"} />
// 				<div className={s.contact}>
// 					<h6>Email</h6>
// 					<a href="mailto:mekhedov.d@mail.ru" target="_blank" rel="noopener noreferrer">mekhedov.d@mail.ru</a>
// 				</div>
// 			</div>
// 			<div className={s.icon}>
// 				<FontAwesomeIcon icon={faMapMarkerAlt} size={"2x"} />
// 				<div className={s.contact}>
// 					<h6>Address</h6>
// 					<p>Minsk, Belarus</p>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

export default ContactsBlock;




// frontend developer. i improve m yskills and expand them new tehnologies. i have experience i creating spa , using React, redux, html css.my free time is dedicated to programming tuttorials. i looking for is time job and open to new opportunitcs
// фронтенд-разработчик. Я улучшаю свои навыки и расширяю их новыми технологиями. У меня есть опыт создания спа, используя React, redux, html css. Мое свободное время посвящено руководствам по программированию. Я ищу работу вовремя и открыт для новых возможностей