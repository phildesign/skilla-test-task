import React from 'react';
import cn from 'classnames';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.Header}>
			<div className={styles.Header__inner}>
				<div className={styles.Header__left}>
					<div className={styles.Header__date}>Среда, 13 окт</div>
				</div>
				<div className={styles.Header__center}>
					<div
						className={cn(styles.Header__col, {
							[styles.Header__col_green]: true,
						})}>
						<div className={styles.Header__title}>
							Новые звонки
							<span className={styles.Header__value}>20 из 30 шт</span>
						</div>
						<input type="range" min="0" max="100" value="50" className={styles.Header__range} />
					</div>
					<div
						className={cn(styles.Header__col, {
							[styles.Header__col_yellow]: true,
						})}>
						<div className={styles.Header__title}>
							Качество разговоров
							<span className={styles.Header__value}>40%</span>
						</div>
						<input type="range" min="0" max="100" value="40" className={styles.Header__range} />
					</div>
					<div
						className={cn(styles.Header__col, {
							[styles.Header__col_red]: true,
						})}>
						<div className={styles.Header__title}>
							Конверсия в заказ
							<span className={styles.Header__value}>67%</span>
						</div>
						<input type="range" min="0" max="100" value="67" className={styles.Header__range} />
					</div>
				</div>
				<div className={styles.Header__right}>
					<div className={styles.Header__search}>
						<svg className={styles.Header__searchIcon}>
							<use xlinkHref="../img/icons/sprite.svg#search"></use>
						</svg>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
