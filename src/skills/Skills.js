import React from "react";
import s from "./Skills.module.scss";
import sContainer from "../common/style/Container.module.css"
import Skill from "./skill/Skill";
import Title from "../common/componets/title/Title";
import {faCss3, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Fade from 'react-reveal/Fade';

const Skills = () => {
	return (
		<div className={s.skillsBlock} id={"skills"}>
			<Fade>
				<div className={`${sContainer.container} ${s.skillsContainer}`}>
					<Title text="My skills" />
					<div className={s.skills}>
						<Skill icon=<FontAwesomeIcon icon={faCss3} size={"3x"}/> description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."} />
						<Skill icon=<FontAwesomeIcon icon={faJs} size={"3x"} /> description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."} />
						<Skill icon=<FontAwesomeIcon icon= {faReact} size={"3x"} /> description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."} />
					</div>
				</div>
			</Fade>

		</div>
	);
}

export default Skills;