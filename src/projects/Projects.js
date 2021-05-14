import React from "react";
import s from "./Projects.module.css";
import sContainer from "../common/style/Container.module.css"
import Project from "./project/Project";
import Title from "../common/componets/title/Title";

const Projects = () => {
	return (
		<div className={s.projectsBlock}>
			<div className={`${sContainer.container} ${s.projectsContainer}`}>
				<Title text={"Projects"} />
					<div className={s.projects}>
						<Project title={"Project 1"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit ..."} />
						<Project title={"Project 2"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor ..."} />
					</div>

			</div>
		</div>
	);
}

export default Projects;