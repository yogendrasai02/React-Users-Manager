import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";

const Modal = (props) => {
	const closeModalHandler = () => {
		props.onModalClose();
	};

	return (
		<div>
			<div className={styles.backdrop}></div>
			<Card className={styles["error-modal"]}>
				<div>
					<header className={styles["header"]}>
						<h2>{props.title}</h2>
					</header>
					<div className={styles["content"]}>
						<ul>
							{props.errorMessages.map((errorMessage) => (
								<li>{errorMessage}</li>
							))}
						</ul>
					</div>
					<footer className={styles["footer"]}>
						<button
							onClick={closeModalHandler}
							className={styles["close-btn"]}
							type="button"
						>
							Okay
						</button>
					</footer>
				</div>
			</Card>
		</div>
	);
};

export default Modal;
