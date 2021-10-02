import React from "react";
import s from "./Main.module.scss";
import sContainer from "../common/style/Container.module.css"
import SocialBlock from "../common/componets/social/SocialBlock";
// import Particles from "react-particles-js";
import Fade from "react-reveal/Fade";
import ReactTypingEffect from "react-typing-effect";

// const particlesOut = {
// 	"particles": {
// 		"number": {
// 			"value": 80,
// 			"density": {
// 				"enable": true,
// 				"value_area": 800
// 			}
// 		}
// 	}
// }

const Main = () => {
	return (
		<div className={s.mainBlock} id={"main"}>
			{/*<Particles className={s.particles} params={particlesOut} />*/}
			<Fade>
				<div className={`${sContainer.container} ${s.mainContainer}`}>
					<div className={s.text}>
						<h1>I am Dmitry Mekhedov</h1>
						<p><ReactTypingEffect
							text={"Frontend developer"}
						/></p>
						<SocialBlock/>
						{/*<div>*/}
							<p>
								I`m frontend developer. Last years i was attending the frontend courses IT-incubator.
								There i got acquanted proggramming langaules such as JS snd TS,
								also with popular libraries of React, Redux.
							</p>
						{/*</div>*/}
					</div>
					<div className={s.photo}>
						<div className={s.image}></div>
					</div>
				</div>
			</Fade>
		</div>
	)
}

export default Main;
