import React from "react";
import s from "./Skill.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Skill = ({icon}) => {
	return (
		<div className={s.skill}>
			<h3><FontAwesomeIcon icon={icon} size={"3x"} /></h3>
		</div>
	);
}

export default Skill;