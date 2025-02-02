import { InformationLayout } from './InformationLayout.jsx';
import PropTypes from 'prop-types';

export const Information = ({ currentPlayer, isDraw, isWinner }) => {
	let message = `Ходит: ${currentPlayer}`;
	if (isDraw) {
		message = 'Ничья!';
	} else if (isWinner) {
		message = `Победил: ${currentPlayer}`;
	}
	return <InformationLayout message={message}></InformationLayout>;
};
Information.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isDraw: PropTypes.bool.isRequired,
	isWinner: PropTypes.bool.isRequired,
};
