import React from "react";
import s from "./SocialBlock.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin, faVk} from "@fortawesome/free-brands-svg-icons";


const SocialBlock = () => {
	return (
		<div className={s.icons}>

			<a href={""} className={s.icon}>
				<FontAwesomeIcon icon={faGithub} />
			</a>
			<a href={""} className={s.icon}>
				<FontAwesomeIcon icon={faVk} />
			</a>
			<a href={""} className={s.icon}>
				<FontAwesomeIcon icon={faInstagram} />
			</a>
			<a href={""} className={s.icon}>
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
		</div>
	)
}

export default SocialBlock;