import React from "react";
import s from "./Footer.module.css";
import sContainer from "../common/style/Container.module.css"


const Footer = () => {
	return (
		<div className={s.footerBlock}>
			<div className={`${sContainer.container} ${s.footerContainer}`}>
				<h3 className={s.title}>Mekhedov Dmitry</h3>
				<div className={s.icons}>
					<div className={s.icon}>fb</div>
					<div className={s.icon}>vk</div>
					<div className={s.icon}>in</div>
					<div className={s.icon}>ld</div>
				</div>
				<div>
					<p className={s.copyright}>©copyriht Mekhedov Dmitry</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;