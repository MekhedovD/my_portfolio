import React, {useState} from "react";
import s from "./Contacts.module.scss";
import sContainer from "../common/style/Container.module.css"
import Title from "../common/componets/title/Title";
import Fade from 'react-reveal/Fade';
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";


const Contacts = () => {

	const [passedModal, setPassedModal] = useState(false)
	// const [failedModal, setFailedModal] = useState(false)

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validationSchema: Yup.object({
			name: Yup.string()
			.max(20, 'Must be 20 characters or less')
			.required('Name is required'),
			email: Yup.string()
			.email('Invalid email address')
			.required('Email is required'),
			message: Yup.string()
			.required('Message is required'),
		}),
		onSubmit: values => {
			alert(JSON.stringify(values));
			axios.post('https://gmail-smpt-server.herokuapp.com/sendMessage', values)
			.then(() => {
				alert("your message send mail")
				setPassedModal(true)
			})
			formik.resetForm()
		},
	})


	return (
		<div className={s.contactsBlock} id={"contacts"}>
			<Fade>
				<div className={`${sContainer.container} ${s.contactsContainer}`}>
					<Title text={"Contacts"}/>
					<form
						action=""
						className={s.form}
						onSubmit={formik.handleSubmit}
					>
						<input
							className={s.input}
							type="text"
							placeholder={"Your name"}
							// placeholder={{...formik.touched && formik.errors.name ? formik.errors.name : 'Your Name'}}
							{...formik.getFieldProps("name")}
							//{...formik.touched.name && formik.errors.name
							//&& <div style={{'color': 'red'}}>{formik.errors.name}</div>}
						/>
						<input
							className={s.input}
							type="text"
							placeholder={"Your email"}
							{...formik.getFieldProps("email")}
						/>
						<textarea
							placeholder={"Your message"}
							className={s.textarea}
							{...formik.getFieldProps("message")}
						>
						</textarea>
						<button
							type={"submit"}
							value={"Send message"}
							className={s.button}
							// onClick={onSubmit}
						>Send message
						</button>
					</form>
				</div>
			</Fade>
		</div>
	);
}

export default Contacts;