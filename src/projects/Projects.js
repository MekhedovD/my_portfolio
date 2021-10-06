import React from "react";
import s from "./Projects.module.scss";
import sContainer from "../common/style/Container.module.css"
import Project from "./project/Project";
import Title from "../common/componets/title/Title";
import todoImage from "../assets/image/todolist.png";
import socialImage from "../assets/image/social.png";
import Fade from 'react-reveal/Fade';

const Projects = () => {

	const projects = [
		{
			title: "Social network",
			img: socialImage,
			link: "https://github.com/MekhedovD/02networkReakt_TS"
		},
		{
			title: "Todo List",
			img: todoImage,
			link: "https://github.com/MekhedovD/toDoList"
		},
]

	return (
		<div className={s.projectsBlock} id="projects">
			<Fade>
				<div className={`${sContainer.container} ${s.projectsContainer}`}>
					<Title text={"Projects"}/>
					<div className={s.projects}>
						<Fade>
							{
								projects.map(p => <Project
									key={p.link}
									img={p.img}
									title={p.title}
									link={p.link}
								/>)
							}
						</Fade>
					</div>
				</div>
			</Fade>
		</div>
	);
}

export default Projects;