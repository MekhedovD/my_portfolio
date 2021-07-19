import React from "react";
import s from "./Nav.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
	return (
		<div className={s.nav}>
			{/*<a href="" className="hreft">Main</a>*/}
			{/*<a href="" className="hreft">My skills</a>*/}
			<Link
				activeClass={""}
				to="main"
				spy={true}
				smooth={true}
				offset={50}
				duration={500}
			>Main</Link>
			<Link
				activeClass={s.active}
				to="skills"
				spy={true}
				smooth={true}
				offset={50}
				duration={500}
			>My skills</Link>
			<Link
				activeClass={""}
				to="projects"
				spy={true}
				smooth={true}
				offset={50}
				duration={500}
			>My projects</Link>
			<Link
				activeClass={""}
				to="contacts"
				spy={true}
				smooth={true}
				offset={50}
				duration={500}
			>My contacts</Link>
			{/*<a href="projects" className="hreft"></a>*/}
			{/*<a href="" className="hreft">My contacts</a>*/}
		</div>
	);
}

export default Nav;
