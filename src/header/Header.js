import React from "react";
import s from "./Header.module.scss";
import Nav from "../nav/Nav";
import sContainer from "../common/style/Container.module.css"
import BurgerNav from "../nav/burgerNav/BurgerNav";
import Main from "../main/Main";

const Header = () => {
	return (
		<div className={s.headerBlock}>
			<div className={`${sContainer.container} ${s.headerContainer}`}>
				<Nav/>
				<BurgerNav/>
			</div>
		</div>

	);
}

export default Header;
