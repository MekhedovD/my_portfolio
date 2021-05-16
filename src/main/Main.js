import React from "react";
import s from "./Main.module.scss";
import sContainer from "../common/style/Container.module.css"

const Main = () => {
	return (
		<div className={s.mainBlock}>
			<div className={`${sContainer.container} ${s.mainContainer}`}>
				<div className={s.text}>
					<span>Hi there</span>
					<h1>I am Dmitry</h1>
					<p>Frontend develop</p>
				</div>
				<div className={s.photo}>photo</div>
			</div>
		</div>
	);
}

export default Main;
