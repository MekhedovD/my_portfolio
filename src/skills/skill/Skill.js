import React from "react";
import s from "./Skill.module.css";

const Skill = (props) => {
	return (
		<div className={s.skill}>
			<div className={s.icon}></div>
			<h3>{props.title}</h3>
			<p className={s.description}>{props.description}</p>
		</div>
	);
}

export default Skill;