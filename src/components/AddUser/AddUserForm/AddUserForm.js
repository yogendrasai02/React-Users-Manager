import { useState } from "react";

import { nanoid } from "nanoid";

import styles from "./AddUserForm.module.css";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUserForm = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredAge, setEnteredAge] = useState("");

	const [validInputs, setValidInputs] = useState({
		name: true,
		age: true,
	});

	const [errorMessages, setErrorMessages] = useState([]);

	const nameChangeHandler = (event) => {
		if (event.target.value.trim().length > 0) {
			setValidInputs((prevState) => {
				return { ...prevState, name: true };
			});
		}
		setEnteredName(event.target.value);
	};

	const ageChangeHandler = (event) => {
		if (event.target.value.length > 0) {
			setValidInputs((prevState) => {
				return { ...prevState, age: true };
			});
		}
		setEnteredAge(event.target.value);
	};

	const clearInputs = () => {
		setEnteredName("");
		setEnteredAge("");
	};

	const resetHandler = (event) => {
		clearInputs();
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		const isNameValid = enteredName.trim().length > 0;
		const isAgeValid = enteredAge.length > 0 && +enteredAge >= 0;
		if (!(isNameValid && isAgeValid)) {
			setValidInputs({
				name: isNameValid,
				age: isAgeValid,
			});
			const nameErrorMessage = "Name of the user cannot be empty!";
			const ageErrorMessage = "Age of the user has to be atleast zero and cannot be empty";
			if (errorMessages.indexOf(nameErrorMessage) === -1 && !isNameValid) {
				setErrorMessages((prevErrorMessages) => [...prevErrorMessages, nameErrorMessage]);
			}
			if (errorMessages.indexOf(ageErrorMessage) === -1 && !isAgeValid) {
				setErrorMessages((prevErrorMessages) => [...prevErrorMessages, ageErrorMessage]);
			}
			return;
		}
		setErrorMessages([]);
		setValidInputs({
			name: true,
			age: true,
		});
		const newUserData = {
			id: nanoid(),
			name: enteredName.trim(),
			age: +enteredAge,
		};
		clearInputs();
		// console.log('➡️Form submission successful in AddUserForm.js');
		// console.log(newUserData);
		props.onAddNewUser(newUserData);
	};

	const closeModalHandler = () => {
		setErrorMessages([]);
	};

	return (
		<div>
			{errorMessages.length !== 0 && (
				<ErrorModal
					title="An error occurred!"
					errorMessages={errorMessages}
					onModalClose={closeModalHandler}
				/>
			)}
			<div className={`${styles["add-user-form"]}`}>
				<form onSubmit={formSubmitHandler}>
					<div
						className={`${styles["form-control"]} ${
							!validInputs.name && styles.invalid
						}`}
					>
						<label htmlFor="name">Name of the user</label>
						<input
							id="name"
							type="text"
							onChange={nameChangeHandler}
							value={enteredName}
						/>
						{!validInputs.name && <p>Name cannot be empty</p>}
					</div>
					<div
						className={`${styles["form-control"]} ${
							!validInputs.age && styles.invalid
						}`}
					>
						<label htmlFor="age">Age in Years</label>
						<input
							id="age"
							type="number"
							onChange={ageChangeHandler}
							value={enteredAge}
						/>
						{!validInputs.age && <p>Age must be atleast 0 & cannot be empty</p>}
					</div>
					<div className={`${styles["form-actions"]}`}>
						<button className={`${styles["add-user-btn"]}`} type="submit">
							Add
						</button>
						<button
							className={`${styles["reset-btn"]}`}
							type="reset"
							onClick={resetHandler}
						>
							Clear
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddUserForm;
