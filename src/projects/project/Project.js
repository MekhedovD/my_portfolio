import React from "react";
import s from "./Project.module.scss";

const Project = ({img, link, title}) => {
	return (
		<div className={` ${s.project}`}>
			<div className={s.photo} style={{backgroundImage: `url(${img})`}}></div>
			<a href={link} target="_blank"  rel="noreferrer" className={s.projectLink}>View all</a>
			<div className={s.projectInfo}>
				<h3 className={s.title}>
					<p>{title}</p>
				</h3>
				<div className={s.info}>
					<span className={s.by}><a href="https://mekhedovd.github.io/my_portfolio/" target="_blank"  rel="noreferrer">By : admin</a></span>
				</div>
			</div>
		</div>
	);
}

export default Project;