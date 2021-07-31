import React from "react";
import s from "./Projects.module.scss";
import sContainer from "../common/style/Container.module.css"
import Project from "./project/Project";
import Title from "../common/componets/title/Title";
import todoImage from "../assets/image/todolist.png";
import socialImage from "../assets/image/social.png";
import Fade from 'react-reveal/Fade';

const Projects = () => {

	const social = {
		backgroundImage: `url(${socialImage})`
	};

	const todolist = {
		backgroundImage: `url(${todoImage})`
	};

	return (
		<div className={s.projectsBlock} id="projects">
			<Fade>
				<div className={`${sContainer.container} ${s.projectsContainer}`}>
					<Title text={"Projects"} />
					<div className={s.projects}>
						{/*<Fade>*/}
							<Project
								style={social}
								title={"Social network"}
								description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit ..."}
							/>
						{/*</Fade>*/}
						<Fade>
							<Project
								style={todolist}
								title={"Todo List"}
								description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor ..."}
							/>
						</Fade>
					</div>
				</div>
			</Fade>
		</div>
	);
}

export default Projects;