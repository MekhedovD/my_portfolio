import React from "react";
import s from "./SocialBlock.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin, faVk} from "@fortawesome/free-brands-svg-icons";

const dataBlock = [
	{icon: faGithub, a: "https://github.com/MekhedovD"},
	{icon: faVk, a: ""},
	{icon: faInstagram, a: ""},
	{icon: faLinkedin, a: ""}
]

const SocialBlock = () => {
	return (
		<div className={s.icons}>
			{dataBlock.map(d => <a href={d.a} target="_blank"  rel="noreferrer" className={s.icon}>
				<FontAwesomeIcon icon={d.icon} />
			</a>)}
		</div>
	)
}

export default SocialBlock;