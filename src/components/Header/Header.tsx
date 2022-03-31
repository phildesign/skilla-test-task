import React from 'react';
import cn from 'classnames';
import styles from './Header.module.css';
import userPhoto from '../../img/photo.png';
import svgSprite from '../../img/icons/sprite.svg';

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
							<use xlinkHref={`${svgSprite}#search`}></use>
						</svg>
					</div>
					<div className={styles.Header__organizationWrapper}>
						<select name="" id="" className={styles.Header__organization}>
							<option value="" className={styles.Header__organizationOption}>
								ИП Сидорова Александра Михайловна
							</option>
							<option value="" className={styles.Header__organizationOption}>
								ИП Сидорова Александра Михайловна
							</option>
							<option value="" className={styles.Header__organizationOption}>
								ИП Сидорова Александра Михайловна
							</option>
						</select>
					</div>
					<div className={styles.Header__user}>
						<div className={styles.Header__userPhoto}>
							<img src={userPhoto} alt="" className={styles.Header__userPhotoImg} />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
