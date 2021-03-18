import React from "react";
import s from "./Header.module.css";
import Nav from "../nav/Nav";
import sContainer from "../common/style/Container.module.css"

const Header = () => {
	return (
		<div className={s.headerBlock}>
			<div className={`${sContainer.container} ${s.headerContainer}`}>
				<Nav/>
			</div>
		</div>

	);
}

export default Header;
