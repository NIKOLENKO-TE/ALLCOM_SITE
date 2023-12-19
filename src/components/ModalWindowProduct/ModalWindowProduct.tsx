import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Spinner from '../Spinner/Spinner';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import Timer from '../Timer/Timer';

import CloseIcon from '../../img/svg/cross.svg?react';
import HeartIcon from '../../img/svg/heart.svg?react';
import SwiperModalWindow from '../../features/HomePage/components/SwiperModalWindow';

interface ModalWindowProps {
	activeWindow: boolean;
	setActiveWindow: (flag: boolean) => void;
}

const ModalWindowProduct: FC<ModalWindowProps> = ({ activeWindow, setActiveWindow }) => {
	const { t } = useTranslation('modal_window_product');
	const productById = useAppSelector((state: RootState) => state.homePage.productById);
	const loadingOneProducts = useAppSelector((state: RootState) => state.homePage.loadingOneProduct);

	const { id, title, description, price, category, images, time, color, weight } = productById;

	if (loadingOneProducts) {
		return (
			<div className="modal_window__overlay">
				<div className="text-center">
					<Spinner />
				</div>
			</div>
		);
	}
	return (
		<>
			<div
				className={
					activeWindow
						? 'modal_window__overlay modal_window__overlay--active'
						: 'modal_window__overlay'
				}
				onClick={() => setActiveWindow(false)}
			>
				<div className="modal_window" onClick={(e) => e.stopPropagation()}>
					<CloseIcon className="modal_window__close" onClick={() => setActiveWindow(false)} />
					<div className="modal_window__col--images">
						<SwiperModalWindow images={images} />
					</div>
					<div className="modal_window__col--info">
						<h3 className="modal_window__title">{title}</h3>
						<span className="modal_window__description">{description}</span>
						<div className="modal_window__auction_info">
							<div className="modal_window__actual_price">
								{t('actual_price')}
								<span className="modal_window__price">{price} &euro;</span>
							</div>
							<div className="modal_window__timer">
								<span className="modal_window__timer--left">{t('left_time')}:</span>
								<Timer time={time} />
							</div>
						</div>
						<div className="modal_window__detailsInformation">
							<div>
								<span className="modal_window__detailsInformation--item">{t('category')}:</span>
								{category}
							</div>
							<div>
								<span className="modal_window__detailsInformation--item">{t('color')}:</span>
								{color}
							</div>
							<div>
								<span className="modal_window__detailsInformation--item">{t('weight')}:</span>
								{weight} kg
							</div>
						</div>
						<div className="modal_window__buttons">
							<span className="modal_window__buttons--add_to_wishlist">
								<HeartIcon />
								{t('add_to_wishlist')}
							</span>
							<button className="modal_window__buttons--btn">{t('bid_now')}</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ModalWindowProduct;
