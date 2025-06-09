import './Gameplay.css'
import FluidQuickDepositInjected from "../../fluid/FluidQuickDepositInjected.jsx";

function Gameplay({ children, isMobile, loggedIn }) {

	// We want to display the inline quick deposit component only if the user is logged in and not on a mobile device.
	const showQuickDeposit = !isMobile && loggedIn;

	return (
		<div className="container">
			<div className="StyledGameLaunchBlockV2-sc-jtt6wv furwGf">
				<div className="game-block">
					<div className="inner-game-container">
						<iframe allowFullScreen="" className="game" width="100%" height="100%" scrolling="no" src="https://70sqp0z2kd.psduxrwjdm.net/gs2c/playGame.do?key=token%3D26415517-6eb138f496f9427588bfd8f79649d122%60%7C%60symbol%3Dvs20sugarrushx%60%7C%60language%3Des%60%7C%60lobbyUrl%3Dhttps%3A%2F%2Fstake.com.co%2Fes%2Fcasino%2Fprincipal&amp;ppkv=2&amp;stylename=rare_stakeco&amp;treq=lyKXD1ETAeBXw4fzJ4voTuTQAl3tpRz1aoC1sUpDx2KL1OkHu4l6F958m4J9ej4b&amp;isGameUrlApiCalled=true&amp;userId=1765974_44"></iframe>
						<div className="inner-game-container__settings">
							<div className="inner-game-container__settings-buttons">
								<button className="btn btn-primary mr-1">Juego real</button>
								<button className="btn btn-secondary">Demo</button>
							</div>
						</div>
					</div>

					<div className="game-footer">
						<div className="actions">
							<span className="action">
								<i className="icon-fullscreen"></i>
							</span>
							<span className="action"><i className="icon-exit"></i></span>
							<label className="action mb-0">
								<input type="checkbox" className="d-none" />
								<i className="icon-favourite"></i>
							</label>
						</div>


						{/*
							Add the Quick Deposit component here.
							Use the parent (quick-deposit-wrapper) to set the height of the component.
							Don't load this component if the user is not logged in and in mobile mode.
						*/}

						{showQuickDeposit && (
							<div className="quick-deposit-wrapper">
								<FluidQuickDepositInjected />
							</div>
						)}


						<div className="game-mode">
							<span className="">Demo</span>
							<label className="d-flex mb-0">
								<div className="toggle-check toggle-check--checked">
									<input type="checkbox" id="game-mode" readOnly checked />
									<span className="toggle-check__slider"></span>
								</div>
							</label>
							<span className="active">Juego real</span>
						</div>
					</div>
				</div>
			</div>


			<div className="StyledGameInfoBlockV2-sc-5q6ym0 eyyxPm">
				<div className="game-info-header">
					<span className="game-info-header__name">Sugar Rush 1000</span>
					<span className="game-info-header__provider">Pragmatic Play</span>
					<span className="game-info-header__expand"><i className="icon-arrow-left"></i></span>
				</div>
			</div>

			<div className="lazyload-wrapper ">
				<div className="StyledCategorySlider-sc-49d1qh jfTtK">
					<div className="title-wrp">
						<a className="title-wrp__link" href="#" rel="">
							<h4 className="title">Recientemente jugado</h4>
						</a>
						<div className="StyledArrowsContainer-sc-1neso4s cTNooY">
							<div className="swiper-buttons">
								<div className="swiper-button-prev swiper-button-disabled swiper-button-lock">
									<i className="icon-casino-arrow-left"></i>
								</div>
								<div className="swiper-button-next swiper-button-lock swiper-button-disabled">
									<i className="icon-casino-arrow-right"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-wrp">
						<div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
							<div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>

								<div className="swiper-slide swiper-slide-active" style={{ width: '153.067px', marginRight: '8px' }}>
									<div className="d-flex flex-column">
										<div className="StyledCasinoGame-sc-1ogl544 RVysV">
											<div className="game-wrp">
												<div className="img-wrp">
													<img alt="Sugar Rush 1000" src="https://i2.stake.com.co/cdn-cgi/image/width=300,quality=75/stake_uploads/97/casino_game/image/14703/Sugar_Rush_1000.jpg" />
													{/* <div className="game-hover">
														<a className="game-hover__link-wrp" rel="" href="/es/casino/juego/sugar-rush-1000">
															<h3 className="game-hover__title">Sugar Rush 1000</h3>
															<a className="btn btn-primary" rel="" href="/es/casino/juego/sugar-rush-1000">Juega ahora</a>
															<i className="game-hover__icon icon-game-hover"></i>
															<span className="game-hover__provider">Pragmatic Play</span>
														</a>
													</div> */}
													<label className="game-favourite">
														<input type="checkbox" className="d-none" />
														<i className="icon-heart">
															<span className="path1"></span>
															<span className="path2"></span>
														</i>
													</label>
													<div className="game-favourite__info">Agregar a favoritos</div>
												</div>
												<div className="labels">
												</div>
												<span className="game-title">Sugar Rush 1000</span>
												<a className="provider" rel="" href="/es/casino/grupo/:category">Pragmatic Play</a> <div className="rtp-volatility">
													<span className="rtp">96.53%</span>
													<div className="volatility">
														<div className="volatility__wrp"><div>
															<div className="volatility__item"></div>
															<div className="volatility__item"></div>
															<div className="volatility__item"></div></div>
															<div className="volatility__items--active">
																<div className="volatility__item"></div>
																<div className="volatility__item"></div>
																<div className="volatility__item"></div>
															</div>
														</div>
													</div>
												</div>
												<div className="rtp-info-wrp">
													<div className="rtp-info">Información sobre RTP</div>
												</div>
											</div>
										</div>
									</div>
								</div>


								<div className="swiper-slide swiper-slide-next" style={{ width: '153.067px', marginRight: '8px' }}>
									<div className="d-flex flex-column">
										<div className="StyledCasinoGame-sc-1ogl544 RVysV">
											<div className="game-wrp">
												<div className="img-wrp">
													<img alt="Gates of Olympus 1000" src="https://i2.stake.com.co/cdn-cgi/image/width=300,quality=75/stake_uploads/97/casino_game/image/13974/Gates_Of_Olympus_1000.webp" />
													{/* <div className="game-hover">
														<a className="game-hover__link-wrp" rel="" href="/es/casino/juego/gates-of-olympus-1000">
															<h3 className="game-hover__title">Gates of Olympus 1000</h3>
															<a className="btn btn-primary" rel="" href="/es/casino/juego/gates-of-olympus-1000">Juega ahora</a>
															<i className="game-hover__icon icon-game-hover"></i>
															<span className="game-hover__provider">Pragmatic Play</span>
														</a>
													</div> */}
													<label className="game-favourite">
														<input type="checkbox" className="d-none" />
														<i className="icon-heart">
															<span className="path1"></span>
															<span className="path2"></span>
														</i>
													</label>
													<div className="game-favourite__info">Agregar a favoritos</div>
												</div>
												<div className="labels"></div>
												<span className="game-title">Gates of Olympus 1000</span>
												<a className="provider" rel="" href="/es/casino/grupo/:category">Pragmatic Play</a> <div className="rtp-volatility">
													<span className="rtp">96.5%</span>
													<div className="volatility">
														<div className="volatility__wrp"><div>
															<div className="volatility__item"></div>
															<div className="volatility__item"></div>
															<div className="volatility__item"></div>
														</div>
															<div className="volatility__items--active">
																<div className="volatility__item"></div>
																<div className="volatility__item"></div>
																<div className="volatility__item"></div>
															</div>
														</div>
													</div>
												</div>
												<div className="rtp-info-wrp">
													<div className="rtp-info">Información sobre RTP</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Gameplay;
