import React from "react";
import s from "./App.css";
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
// import Particles from "react-particles-js";

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


const App = () => {
	return (
		<div className="App">
			{/*<Particles className={s.particles} params={particlesOut} />*/}
			<Header/>
			<Main />
			<Skills />
			<Projects />
			<Contacts />
			<Footer />
		</div>
	);
}

export default App;
