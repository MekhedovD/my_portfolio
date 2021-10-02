import React from "react";
import s from "./Skill.module.scss";;

const Skill = (props) => {
	return (
		<div className={s.skill}>
			<h3>{props.icon}</h3>
			<p className={s.description}>{props.description}</p>
		</div>
	);
}

export default Skill;