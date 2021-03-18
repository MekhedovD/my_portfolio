import React from "react";
import s from "./Contacts.module.css";
import sContainer from "../common/style/Container.module.css"


const Contacts = () => {
	return (
		<div className={s.contactsBlock}>
			<div className={`${sContainer.container} ${s.contactsContainer}`}>
				<h2 className={s.title}>Contacts</h2>
				<form action="" className={s.form}>
					<input type="text" placeholder={"Your name"} className={s.input}/>
					<input type="text" placeholder={"Your email"} className={s.input}/>
					<textarea name="" id="" placeholder={"Your message"} className={s.textarea}></textarea>
				</form>
				<button className={s.button}>Send</button>
			</div>
		</div>
);
}

export default Contacts;