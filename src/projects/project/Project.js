import React from "react";
import s from "./Project.module.scss";

const Project = (props) => {
	return (
		<div className={s.project}>
			<div className={s.photo} style={props.style}></div>
			<a href="#" className={s.projectLink}>View all</a>
			<div className={s.projectInfo}>
				<h3 className={s.title}>
					<a href={""}>{props.title}</a>
				</h3>
				<p className={s.description}>{props.description}</p>
				<div className={s.info}>
					<span className={s.more}><a href="">Read more</a></span>
					<span className={s.by}><a href="">By : admin</a></span>
				</div>
			</div>
		</div>
	);
}

export default Project;