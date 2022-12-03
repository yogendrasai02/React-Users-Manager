import styles from "./User.module.css";

import { Trash } from "phosphor-react";

const User = (props) => {

	const deleteUserHandler = event => {
		// console.log('➡️In User.js, id:', props.userData.id);
		props.onDeleteUser(props.userData.id);
	};

	return (
		<div className={`${styles.user}`}>
			<p>
				{props.userData.name} ({props.userData.age} years old)
			</p>
			<button className={`${styles["delete-user-btn"]}`} onClick={deleteUserHandler} type="button">
				<Trash size={32} />
			</button>
		</div>
	);
};

export default User;
