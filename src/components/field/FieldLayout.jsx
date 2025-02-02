import styles from './Field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, onCellClick }) => {
	return (
		<>
			<div className={styles.field}>
				{field.map((cell, index) => (
					<button
						className={styles.cell}
						key={index}
						onClick={() => onCellClick(index)}
					>
						{cell}
					</button>
				))}
			</div>
		</>
	);
};
FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	onCellClick: PropTypes.func.isRequired,
};
