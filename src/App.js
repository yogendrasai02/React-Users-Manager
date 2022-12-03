import { useState } from "react";
import styles from "./App.module.css";

import AddUserCard from "./components/AddUser/AddUserCard/AddUserCard";
import Users from "./components/User/Users/Users";

const App = () => {
	const [usersList, setUsersList] = useState([]);

	const addNewUserHandler = (newUserData) => {
		// console.log('➡️Inside App.js');
		// console.log(newUserData);
		setUsersList((prevUsersList) => [newUserData, ...prevUsersList]);
	};

	const deleteUserHandler = (userId) => {
		// console.log("➡️In App.js");
		setUsersList((prevUsersList) => prevUsersList.filter((user) => user.id !== userId));
	};

	return (
		<div className={styles.container}>
			<h1 className={`${styles["app-heading"]} text-center`}>Users Manager</h1>
			<AddUserCard onAddNewUser={addNewUserHandler} />
			<Users onDeleteUser={deleteUserHandler} users={usersList} />
		</div>
	);
};

export default App;
