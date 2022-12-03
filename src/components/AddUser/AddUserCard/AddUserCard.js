import styles from "./AddUserCard.module.css";

import AddUserForm from "../AddUserForm/AddUserForm";
import Card from "../../UI/Card/Card";

const AddUserCard = (props) => {
	const addNewUserHandler = (newUserData) => {
		// console.log('➡️Inside AddUserCard.js');
		// console.log(newUserData);
		props.onAddNewUser(newUserData);
	};

	return (
		<Card>
			<div className={styles["add-user-card"]}>
				<h2 className={`${styles["add-user-card-heading"]} text-center`}>Add New User</h2>
				<AddUserForm onAddNewUser={addNewUserHandler} />
			</div>
		</Card>
	);
};

export default AddUserCard;
