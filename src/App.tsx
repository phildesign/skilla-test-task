import React from 'react';
import styles from './App.module.css';

const App = () => {
	return (
		<div className={styles.App}>
			<aside className={styles.Aside}>
				<div className={styles.Aside__logo}>
					<img src="./img/logo.svg" alt="" className="Aside__logo-img" />
				</div>
				<nav className={styles.Aside__nav}></nav>
			</aside>
			<main className={styles.Main}>Тест</main>
		</div>
	);
};

export default App;
