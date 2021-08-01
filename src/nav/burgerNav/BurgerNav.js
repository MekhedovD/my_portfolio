import React, {useState} from "react";
import s from "./BurgerNav.module.scss";
import {Link} from "react-scroll";
import Burger from "react-css-burger";

const BurgerNav = () => {

	const [menuIsOpen, setBergerMenu] = useState(false);
	const onBurgerBtnClick = () => {
		setBergerMenu(
		  !menuIsOpen
	  );
		console.log(menuIsOpen)
	}

	return (
		<div className={s.burgerNav}>
			<div className={menuIsOpen ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
				<Link
					activeClass={s.active}
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
					activeClass={s.active}
					to="projects"
					spy={true}
					smooth={true}
					offset={50}
					duration={500}
				>My projects</Link>
				<Link
					activeClass={s.active}
					to="contacts"
					spy={true}
					smooth={true}
					offset={50}
					duration={500}
				>My contacts</Link>
			</div>
			<div className={s.burgerBtn}>
				<Burger
					onClick={onBurgerBtnClick}
					active={menuIsOpen}
					burger="squeeze"
					color="#C49B66"
					hoverOpacity={0.8}
					scale={1.2}
					style={{marginTop: "10px", marginLeft: "10px"}}
				/>
			</div>
		</div>
	);
}

export default BurgerNav;
