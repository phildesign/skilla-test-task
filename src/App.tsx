import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styles from './App.module.css';

const App = () => {
	return (
		<Router>
			<div className={styles.App}>
				<aside className={styles.Aside}>
					<div className={styles.Aside__logo}>
						<img src="./img/logo.svg" alt="" className="Aside__logo-img" />
					</div>
					<nav className={styles.Aside__nav}>
						<Link to="/" className={styles.Aside__link}>
							Итоги
						</Link>
						<Link to="/" className={styles.Aside__link}>
							Заказы
						</Link>
						<Link to="/" className={styles.Aside__link}>
							Сообщения
						</Link>
						<Link to="/" className={styles.Aside__link}>
							Звонки
						</Link>
						<Link to="/" className={styles.Aside__link}>
							Контрагенты
						</Link>
						<Link to="/" className={styles.Aside__link}>
							Документы
						</Link>
						<Link to="/" className={styles.Aside__link}>
							Исполнители
						</Link>
						<Link to="/" className={styles.Aside__link}>
							Отчеты
						</Link>
						<Link to="/" className={styles.Aside__link}>
							База знаний
						</Link>
						<Link to="/" className={styles.Aside__link}>
							Настройки
						</Link>
					</nav>
				</aside>
				<main className={styles.Main}>Тест</main>
			</div>
		</Router>
	);
};

export default App;
