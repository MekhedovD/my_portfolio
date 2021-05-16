import React from "react";
import s from "./Projects.module.scss";
import sContainer from "../common/style/Container.module.css"
import Project from "./project/Project";
import Title from "../common/componets/title/Title";
import todoImage from "../assets/image/todolist.png";
import socialImage from "../assets/image/social.png";

const Projects = () => {

	const social = {
		backgroundImage: `url(${socialImage})`
	};

	const todolist = {
		backgroundImage: `url(${todoImage})`
	};

	return (
		<div className={s.projectsBlock}>
			<div className={`${sContainer.container} ${s.projectsContainer}`}>
				<Title text={"Projects"} />
					<div className={s.projects}>
						<Project style={social} title={"Social network"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit ..."} />
						<Project style={todolist} title={"Todo List"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor ..."} />
					</div>

			</div>
		</div>
	);
}

export default Projects;