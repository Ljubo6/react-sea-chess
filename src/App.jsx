import styles from './App.module.css';
import { Game } from './components/game/Game.jsx';

export const App = () => {
	return (
		<>
			<div className={styles['app-Container']}>
				<Game></Game>
			</div>
		</>
	);
};
