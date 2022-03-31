import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './App.module.css';
import Header from './components/Header/Header';

export interface INavData {
	id: number;
	icon: string;
	link: string;
	text: string;
	active: boolean;
}

const App = () => {
	const navData: INavData[] = [
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
					<use xlinkHref={`../img/icons/sprite.svg#${item.icon}`}></use>
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
						<img src="./img/logo.svg" alt="Skilla" className={styles.Aside__logoImg} />
					</div>
					<nav className={styles.Aside__nav}>{navItems}</nav>
				</aside>
				<main className={styles.Main}>
					<Header />
				</main>
			</div>
		</Router>
	);
};

export default App;
