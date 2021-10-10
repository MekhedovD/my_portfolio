import React from "react";
import s from "./Skills.module.scss";
import sContainer from "../common/style/Container.module.css"
import Skill from "./skill/Skill";
import Title from "../common/componets/title/Title";
import {faCss3, faGithub, faHtml5, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import Fade from "react-reveal/Fade";

const Skills = () => {

const skills = [
		{icon: faReact},
		{icon: faJs},
		{icon: faCss3},
		{icon: faHtml5},
		{icon: faGithub}
	]

	return (
		<div className={s.skillsBlock} id={"skills"}>
			<Fade>
				<div className={`${sContainer.container} ${s.skillsContainer}`}>
					<Title text="My skills" />
					<div className={s.skills}>

						{
							skills.map(s => <Skill
							icon={s.icon}
							/>)
						}

						</div>
				</div>
			</Fade>

		</div>
	);
}

export default Skills;
