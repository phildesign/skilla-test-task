import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './App.module.css';
import Header from './components/Header/Header';
import logo from './img/logo.svg';
import svgSprite from './img/icons/sprite.svg';
import List from './components/List/List';
import Filter from './components/Filter/Filter';
import axios from 'axios';
import { CallModel } from './interfaces/call.interface';
import { NavModel } from './interfaces/nav.interface';

const App = (): JSX.Element => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState<CallModel[]>();
	const [call, setCall] = useState<string>('');

	const calls = {
		all: '',
		incoming: '0',
		outgoing: '1',
	};

	useEffect(() => {
		axios
			.post(
				`https://api.skilla.ru/mango/getList?date_start=2021-12-01&date_end=2021-12-01&in_out=${call}`,
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
	}, [call]);

	const handleFilterData = () => {};

	const handleFilterType = (e: any) => {
		switch (e.target.value) {
			case 'all':
				setCall(calls.all);
				break;
			case 'incoming':
				setCall(calls.incoming);
				break;
			case 'outgoing':
				setCall(calls.outgoing);
				break;
			default:
				setCall(calls.all);
				break;
		}
	};

	const navData: NavModel[] = [
		{
			id: 1,
			icon: 'results',
			link: '/',
			text: 'Итоги',
			active: false,
		},
		{
			id: 2,
			icon: 'orders',
			link: '/',
			text: 'Заказы',
			active: false,
		},
		{
			id: 3,
			icon: 'messages',
			link: '/',
			text: 'Сообщения',
			active: false,
		},
		{
			id: 4,
			icon: 'calls',
			link: '/',
			text: 'Звонки',
			active: true,
		},
		{
			id: 5,
			icon: 'counterparties',
			link: '/',
			text: 'Контрагенты',
			active: false,
		},
		{
			id: 6,
			icon: 'documents',
			link: '/',
			text: 'Документы',
			active: false,
		},
		{
			id: 7,
			icon: 'performers',
			link: '/',
			text: 'Исполнители',
			active: false,
		},
		{
			id: 8,
			icon: 'reports',
			link: '/',
			text: 'Отчеты',
			active: false,
		},
		{
			id: 9,
			icon: 'base',
			link: '/',
			text: 'База знаний',
			active: false,
		},
		{
			id: 10,
			icon: 'settings',
			link: '/',
			text: 'Настройки',
			active: false,
		},
	];

	const navItems = navData.map((item) => {
		return (
			<Link
				to={item.link}
				className={cn(styles.Aside__link, {
					[styles.Aside__link_active]: item.active,
				})}
				key={item.id}>
				<svg className={styles.Aside__icon}>
					<use xlinkHref={`${svgSprite}#${item.icon}`}></use>
				</svg>
				{item.text}
			</Link>
		);
	});

	return (
		<Router>
			<div className={styles.App}>
				<aside className={styles.Aside}>
					<div className={styles.Aside__logo}>
						<img src={logo} alt="Skilla" className={styles.Aside__logoImg} />
					</div>
					<nav className={styles.Aside__nav}>{navItems}</nav>
				</aside>
				<main className={styles.Main}>
					<Header />
					<Filter handleFilterType={handleFilterType} />
					<List items={items} isLoaded={isLoaded} />
				</main>
			</div>
		</Router>
	);
};

export default App;
