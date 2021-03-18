import React from "react";
import s from "./Skills.module.css";
import sContainer from "../common/style/Container.module.css"
import Skill from "./skill/Skill";

const Skills = () => {
	return (
		<div className={s.skillsBlock}>
			<div className={`${sContainer.container} ${s.skillsContainer}`}>
				<h2 className={s.title}>Skills</h2>
				<div className={s.skills}>
					<Skill title={"css"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."} />
					<Skill title={"JS"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."} />
					<Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."} />
				</div>
			</div>
		</div>
	);
}

export default Skills;