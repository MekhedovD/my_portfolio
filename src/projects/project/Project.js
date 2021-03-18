import React from "react";
import s from "./Project.module.css";

const Project = (props) => {
	return (
		<div className={s.project}>
			<div className={s.photo}><a href="#">photo</a></div>
			<h3 className={s.title}>{props.title}</h3>
			<p className={s.description}>{props.description}</p>
		</div>
	);
}

export default Project;