import styles from "./Users.module.css";

import User from "../User/User";
import Card from "../../UI/Card/Card";

import { Warning } from "phosphor-react";

const Users = (props) => {
	const { users } = props;

	const deleteUserHandler = (userId) => {
		// console.log('➡️In Users.js');
		// console.log('User with ID', userId, 'will be deleted');
		props.onDeleteUser(userId);
	};

	let content = (
		<p className="d-flex align-items-center">
			<span style={{ marginRight: "20px" }}>
				<Warning size={32} />
			</span>
			<span>Oops, no users found!</span>
		</p>
	);

	if (users.length > 0) {
		content = users.map((userData) => <User onDeleteUser={deleteUserHandler} userData={userData} key={userData.id} />);
	}
	return (
		<Card>
			<div className={`${styles["users-card"]}`}>{content}</div>
		</Card>
	);
};

export default Users;
