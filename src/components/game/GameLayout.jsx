import styles from './Game.module.css';

export const GameLayout = ({ children }) => {
	return (
		<>
			<div className={styles['game-container']}>{children}</div>
		</>
	);
};
