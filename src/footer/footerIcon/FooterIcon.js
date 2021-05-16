import React from "react";
import s from "./FooterIcon.module.scss";


const FooterIcon = (props) => {
	return (
				<div className={s.icons}>
					<div className={s.icon}>{props.title}</div>
					{/*<div className={s.icon}>vk</div>*/}
					{/*<div className={s.icon}>in</div>*/}
					{/*<div className={s.icon}>ld</div>*/}
				</div>
	)
}

export default FooterIcon;