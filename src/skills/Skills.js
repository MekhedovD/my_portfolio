import React from "react";
import s from "./Skills.module.scss";
import sContainer from "../common/style/Container.module.css"
import Skill from "./skill/Skill";
import Title from "../common/componets/title/Title";

const Skills = () => {
	return (
		<div className={s.skillsBlock}>
			<div className={`${sContainer.container} ${s.skillsContainer}`}>
				<Title text="My skills" />
				<div className={s.skills}>
					<Skill title={"CSS"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."} />
					<Skill title={"JS"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."} />
					<Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."} />
				</div>
			</div>
		</div>
	);
}

export default Skills;