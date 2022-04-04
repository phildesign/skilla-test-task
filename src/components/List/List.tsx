import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './List.module.css';
import { CallModel } from '../../interfaces/call.interface';
import Type from '../Type/Type';

const List = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState<CallModel[]>();

	useEffect(() => {
		axios
			.post(
				`https://api.skilla.ru/mango/getList?date_start=2021-12-01&date_end=2021-12-01&in_out=0`,
				null,
				{
					headers: {
						Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
					},
				},
			)
			.then((res) => {
				setItems(res.data);
				setIsLoaded(true);
			})
			.catch(function (error) {
				setError(error);
			});
	}, []);

	const itemsList = items?.map((item) => {
		return (
			<div className={styles.List__row} key={item.id}>
				<div className={styles.List__col}>
					<div className={styles.List__cell}>
						<Type {...item} />
					</div>
				</div>
				<div className={styles.List__col}>
					<div className={styles.List__cell}>{item.date.slice(11, 16)}</div>
				</div>
				<div className={styles.List__col}>
					<div className={styles.List__cell}>
						<img src={item.person_avatar} alt="" className={styles.List__userPhoto} />
					</div>
				</div>
				<div className={styles.List__col}>
					<div className={styles.List__cell}>{item.to_number}</div>
				</div>
				<div className={styles.List__col}>
					<div className={styles.List__cell}>{item.contact_company}</div>
				</div>
				<div className={styles.List__col}>
					<div className={styles.List__cell}></div>
				</div>
				<div className={styles.List__col}>
					<div className={styles.List__cell}>
						<span>{Math.trunc(+item.time / 60)}</span> : <span>{+item.time % 60}</span>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className={styles.List}>
			{isLoaded ? (
				<>
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
					<div className={styles.List__main}>{itemsList}</div>
				</>
			) : (
				<div className={styles.List__loading}>Загрузка...</div>
			)}
		</div>
	);
};

export default List;
