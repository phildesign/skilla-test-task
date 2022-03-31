import React from 'react';
import cn from 'classnames';
import svgSprite from '../../img/icons/sprite.svg';
import styles from './List.module.css';

interface IListData {
	id: string;
	partnership_id: string;
	date: string;
	date_notime: string;
	time: string;
	from_number: string;
	from_extension: string;
	to_number: string;
	to_extension: string;
	status: string;
	record: string;
	line_number: string;
	in_out?: string;
	contact_name: string;
	contact_company: string;
	person_id: string;
	person_name: string;
	person_surname: string;
	person_avatar: string;
}

const List = () => {
	return (
		<div className={styles.List}>
			<div className={styles.List__top}>
				<div className={styles.List__row}>
					<div className={styles.List__col}>
						<div className={styles.List__title}>Тип</div>
					</div>
					<div className={styles.List__col}>
						<div className={styles.List__title}>Время</div>
					</div>
					<div className={styles.List__col}>
						<div className={styles.List__title}>Сотрудник</div>
					</div>
					<div className={styles.List__col}>
						<div className={styles.List__title}>Звонок</div>
					</div>
					<div className={styles.List__col}>
						<div className={styles.List__title}>Источник</div>
					</div>
					<div className={styles.List__col}>
						<div className={styles.List__title}>Оценка</div>
					</div>
					<div className={styles.List__col}>
						<div className={styles.List__title}>Длительность</div>
					</div>
				</div>
			</div>
			<div className={styles.List__main}>
				<div className={styles.List__row}>
					<div className={styles.List__col}>
						<div className={styles.List__cell}>
							<svg
								className={cn(styles.List__iconType, {
									[styles.List__iconTypeIncoming]: true,
									[styles.List__iconTypeOutgoing]: false,
									[styles.List__iconTypeMissed]: false,
								})}
								width="13"
								height="13"
								viewBox="0 0 13 13"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M-1.04904e-05 11.3447L1.17703 12.5217L10.8522 2.8466L10.8522 8.34782H12.5217L12.5217 -1.04904e-05L4.1739 -1.04904e-05V1.66955L9.67512 1.66955L-1.04904e-05 11.3447Z" />
							</svg>
						</div>
					</div>
					<div className={styles.List__col}>
						<div className={styles.List__cell}></div>
					</div>
					<div className={styles.List__col}>
						<div className={styles.List__cell}></div>
					</div>
					<div className={styles.List__col}>
						<div className={styles.List__cell}></div>
					</div>
					<div className={styles.List__col}>
						<div className={styles.List__cell}></div>
					</div>
					<div className={styles.List__col}>
						<div className={styles.List__cell}></div>
					</div>
					<div className={styles.List__col}>
						<div className={styles.List__cell}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;
