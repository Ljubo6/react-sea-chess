import { GameLayout } from './GameLayout.jsx';
import { Information } from '../information/Information.jsx';
import { Field } from '../field/Field.jsx';
import { useState } from 'react';
import styles from './Game.module.css';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));
	const handleClick = (index) => {
		if (field[index] || isGameEnded) {
			return;
		}
		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		if (checkWinner(newField, currentPlayer)) {
			setIsGameEnded(true);
		} else if (!newField.includes('')) {
			setIsDraw(true);
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		}
	};
	const checkWinner = (board, player) => {
		return WIN_PATTERNS.some((pattern) => {
			return pattern.every((index) => board[index] === player);
		});
	};
	const resetGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
	};
	return (
		<GameLayout>
			<Information
				currentPlayer={currentPlayer}
				isDraw={isDraw}
				isWinner={isGameEnded}
			></Information>
			<Field field={field} onCellClick={handleClick}></Field>
			<button className={styles['reset-button']} onClick={resetGame}>
				Начать заново
			</button>
		</GameLayout>
	);
};
