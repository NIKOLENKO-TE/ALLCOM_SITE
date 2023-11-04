import * as React from 'react';
import { useTranslation } from 'react-i18next';
import './LoginPage.scss';

const LoginPage: React.FC = (): JSX.Element => {
	const { t } = useTranslation('LoginPage');

	return (
		<div className="login__section--inner">
			<div className="row row-cols-md-2 row-cols-1" style={{ alignItems: 'center' }}>
				<div className="col">
					<div className="account__login">
						<div className="account__login--header mb-25">
							<h2 className="account__login--header__title h3 mb-10">{t('login')}</h2>
							<p className="account__login--header__desc">{t('header_desc')}</p>
						</div>
						<div className="account__login--inner">
							<input
								className="account__login--input"
								placeholder={t('placeholder_email')}
								type="text"
							/>
							<input
								className="account__login--input"
								placeholder={t('placeholder_password')}
								type="password"
							/>
							<div className="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
								<div
									className="account__login--remember position__relative"
									style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
								>
									<input className="checkout__checkbox--input" id="check1" type="checkbox" />
									<span className="checkout__checkbox--checkmark"></span>
									<label
										className="checkout__checkbox--label login__remember--label"
										htmlFor="check1"
										style={{ marginLeft: '10px' }}
									>
										{t('remember_me')}
									</label>
								</div>
								<button className="account__login--forgot" type="submit">
									{t('forgot_your_password')}
								</button>
							</div>
							<button className="account__login--btn primary__btn" type="submit">
								{t('login')}
							</button>
							<div className="account__login--divide">
								<span className="account__login--divide__text text-black">{t('or')}</span>
							</div>
							<p className="account__login--signup__text">
								{t('dont_have_account')}
								<button style={{ marginLeft: '10px' }} type="submit">
									{t('sign_up_now')}{' '}
								</button>
							</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="account__login register">
						<div className="account__login--header mb-25">
							<h2 className="account__login--header__title h3 mb-10">{t('create_account')}</h2>
							<p className="account__login--header__desc">{t('register_here_text')}</p>
						</div>
						<div className="account__login--inner">
							<input className="account__login--input" placeholder={t('username')} type="text" />
							<input
								className="account__login--input"
								placeholder={t('placeholder_email')}
								type="text"
							/>
							<input
								className="account__login--input"
								placeholder={t('placeholder_password')}
								type="password"
							/>
							<input
								className="account__login--input"
								placeholder={t('placeholder_confirm_password')}
								type="password"
							/>
							<button className="account__login--btn primary__btn mb-10" type="submit">
								{t('submit_register')}
							</button>
							<div
								className="account__login--remember position__relative "
								style={{ display: 'flex', justifyContent: 'left' }}
							>
								<div>
									<input className="checkout__checkbox--input" id="check2" type="checkbox" />
									<span className="checkout__checkbox--checkmark"></span>
								</div>
								<label
									className="checkout__checkbox--label login__remember--label"
									htmlFor="check2"
									style={{ marginLeft: '10px' }}
								>
									{t('i_have_read_text')}
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
