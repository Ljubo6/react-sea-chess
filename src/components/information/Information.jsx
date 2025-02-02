import { InformationLayout } from './InformationLayout.jsx';

export const Information = ({ currentPlayer, isDraw, isWinner }) => {
	let message = `Ходит: ${currentPlayer}`;
	if (isDraw) {
		message = 'Ничья!';
	} else if (isWinner) {
		message = `Победил: ${currentPlayer}`;
	}
	return <InformationLayout message={message}></InformationLayout>;
};
