import styles from './Information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ message }) => {
	return (
		<>
			<div className={styles.information}>{message}</div>
		</>
	);
};
InformationLayout.propTypes = {
	message: PropTypes.string.isRequired,
};
