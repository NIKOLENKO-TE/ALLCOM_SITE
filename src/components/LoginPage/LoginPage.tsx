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
							<h2 className="account__login--header__title h3 mb-10">{t('Login')}</h2>
							<p className="account__login--header__desc">
								{t('Login if you are a returning customer.')}
							</p>
						</div>
						<div className="account__login--inner">
							<input
								className="account__login--input"
								placeholder={t('Email Address')}
								type="text"
							/>
							<input
								className="account__login--input"
								placeholder={t('Password')}
								type="password"
							/>
							<div className="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
								<div className="account__login--remember position__relative">
									<input className="checkout__checkbox--input" id="check1" type="checkbox" />
									<span className="checkout__checkbox--checkmark"></span>
									<label
										className="checkout__checkbox--label login__remember--label"
										htmlFor="check1"
									>
										{t('Remember me')}
									</label>
								</div>
								<button className="account__login--forgot" type="submit">
									{t('Forgot Your Password?')}
								</button>
							</div>
							<button className="account__login--btn primary__btn" type="submit">
								{t('Login')}
							</button>
							<div className="account__login--divide">
								<span className="account__login--divide__text">OR</span>
							</div>
							<p className="account__login--signup__text">
								{t("Don't Have an Account?")} <button type="submit">{t('Sign up now')}</button>
							</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="account__login register">
						<div className="account__login--header mb-25">
							<h2 className="account__login--header__title h3 mb-10">{t('Create an Account')}</h2>
							<p className="account__login--header__desc">
								{t('Register here if you are a new customer')}
							</p>
						</div>
						<div className="account__login--inner">
							<input className="account__login--input" placeholder={t('Username')} type="text" />
							<input
								className="account__login--input"
								placeholder={t('Email Address')}
								type="text"
							/>
							<input
								className="account__login--input"
								placeholder={t('Password')}
								type="password"
							/>
							<input
								className="account__login--input"
								placeholder={t('Confirm Password')}
								type="password"
							/>
							<button className="account__login--btn primary__btn mb-10" type="submit">
								{t('Submit & Register')}
							</button>
							<div
								className="account__login--remember position__relative"
								style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
							>
								<div>
									<input className="checkout__checkbox--input" id="check2" type="checkbox" />
									<span className="checkout__checkbox--checkmark"></span>
								</div>
								<label
									className="checkout__checkbox--label login__remember--label"
									htmlFor="check2"
								>
									{t('I have read and agree to the terms & conditions')}
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
