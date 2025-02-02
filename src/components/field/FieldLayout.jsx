import styles from './Field.module.css';

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
