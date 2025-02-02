import styles from './Information.module.css';

export const InformationLayout = ({ message }) => {
	return (
		<>
			<div className={styles.information}>{message}</div>
		</>
	);
};
