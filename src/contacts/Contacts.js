import React from "react";
import s from "./Contacts.module.scss";
import sContainer from "../common/style/Container.module.css"
import Title from "../common/componets/title/Title";


const Contacts = () => {
	return (
		<div className={s.contactsBlock}>
			<div className={`${sContainer.container} ${s.contactsContainer}`}>
				<Title text={"Contacts"} />
				<form action="" className={s.form}>
					<input type="text" placeholder={"Your name"} className={s.input}/>
					<input type="text" placeholder={"Your email"} className={s.input}/>
					<textarea name="" id="" placeholder={"Your message"} className={s.textarea}></textarea>
				</form>
				<button type={"submit"} className={s.button}>Send message</button>
			</div>
		</div>
);
}

export default Contacts;