import React from "react";
import s from "./Main.module.scss";
import sContainer from "../common/style/Container.module.css"
import SocialBlock from "../common/componets/social/SocialBlock";
// import Title from "../common/componets/title/Title";

const Main = () => {
	return (
		<div className={s.mainBlock}>
			<div className={`${sContainer.container} ${s.mainContainer}`}>
				<div className={s.text}>
					<h1>I am Dmitry Mekhedov</h1>
					<p>Frontend develop</p>
					<SocialBlock />
				</div>
				<div className={s.photo}>photo</div>
			</div>
		</div>
	);
}

export default Main;
