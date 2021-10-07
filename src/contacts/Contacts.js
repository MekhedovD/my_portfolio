import React, {useState} from "react";
import s from "./Contacts.module.scss";
import sContainer from "../common/style/Container.module.css"
import Title from "../common/componets/title/Title";
import Fade from 'react-reveal/Fade';
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {SendMessageModal} from "./Modal/SendMessageModal";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";


const Contacts = () => {

	const [passedModal, setPassedModal] = useState(false)
	const [failedModal, setFailedModal] = useState(false)

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
			axios.post('https://gmail-smpt-server.herokuapp.com/sendMessage', {
				name: values.name,
				email: values.email,
				message: values.message
			})
			.then(() => {
				// alert("your message send mail")
				setPassedModal(true)
			})
			.catch(() => {
				// alert("message did not go")
				setFailedModal(true)
			})
			formik.resetForm()
		},
	})


	return (
		<>
			<div className={`${s.sendMessageModal}`}>
				<SendMessageModal
					icon={passedModal ? faCheck : failedModal ? faTimes : null}
					title={passedModal ? 'Your message was sent.' : failedModal ? 'Your message was not sent.' : null}
					text={passedModal ? 'Thank you.' : failedModal ? 'Try again later.' : null}
					setActiveModal={passedModal ? setPassedModal : failedModal ? setFailedModal : null}
					activeModal={passedModal || failedModal}
				/>
			</div>

			<div className={s.contactsBlock} id={"contacts"}>
				<Fade>
					<div className={`${sContainer.container} ${s.contactsContainer}`}>
						<Title text={"Contacts"}/>
						<form
							action=""
							className={s.form}
							onSubmit={formik.handleSubmit}
							noValidate
						>
							<input
								className={s.input}
								type="text"
								id='name'
								placeholder={formik.touched && formik.errors.name ? formik.errors.name : 'Your Name'}
								{...formik.getFieldProps("name")}
							/>
							{/*{formik.touched.name && formik.errors.name*/}
							{/*&& <div style={{'color': 'red'}}>{formik.errors.name}</div>}*/}
							<input
								className={s.input}
								type="text"
								id='email'
								placeholder={formik.touched.email && formik.errors.email ? formik.errors.email : 'example@gmail.com'}
								{...formik.getFieldProps("email")}
							/>
							<textarea
								id='message'
								placeholder={formik.touched.message && formik.errors.message ? formik.errors.message : 'Your message'}
								className={s.textarea}
								{...formik.getFieldProps("message")}
							>
						</textarea>
							<button
								type={"submit"}
								value={"Send message"}
								className={s.button}
							>Send message
							</button>
						</form>
					</div>
				</Fade>
			</div>
		</>
	);
}

export default Contacts;