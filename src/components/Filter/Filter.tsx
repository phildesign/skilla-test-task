import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ handleFilterType }: any): JSX.Element => {
	return (
		<div className={styles.Filter}>
			<select className={styles.Filter__select} onChange={handleFilterType}>
				<option value="all" className={styles.Filter__option}>
					Все типы
				</option>
				<option value="incoming" className={styles.Filter__option}>
					Входящие
				</option>
				<option value="outgoing" className={styles.Filter__option}>
					Исходящие
				</option>
			</select>
		</div>
	);
};

export default Filter;
