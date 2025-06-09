import { useSelector } from 'react-redux';
import './Header.css'

function Header({ children, loggedIn, setLoggedIn, onLogin, onLaunchWallet }) {
	const balance = useSelector((state) => state.auth.userData?.Data?.Balance || '0.00');
	const currency = useSelector((state) => state.auth.userData?.Data?.currency || '$');

	function formatBalance(balance) {
		return new Intl.NumberFormat('es-CO', {
			style: 'currency',
			currency: 'COP'
		}).format(balance);
	}

	return (
		<div className="bglsGc">
			<header className="page-header">
				<div className="container">
					<div className="page-header__container">
						<a rel="" href="/">
							<div className="page-header__logo">
								<img src="/on-dark.svg?cfid=1748845575" width="68" height="34" />
							</div>
						</a>
						{!loggedIn && (
							<div className="page-header__container-action-buttons">
								<button className="button size-md variant-link" onClick={onLogin}>Iniciar sesión</button>
								<button className="button size-md variant-action">Registro</button>
							</div>
						)}

						{loggedIn && (
							<div className="page-header__container-balance">
								<div className="balance-toggle">
									<button className="button variant-tab size-sm"><span>{formatBalance(balance)}</span></button>
									<button className="button variant-action size-sm" onClick={onLaunchWallet}>Billetera</button>
								</div>
							</div>
						)}

						{loggedIn && (
							<div className="page-header__container-user-actions">
								<div className="user-navigation">
									<div className="dropdown">
										<i className="icon-account"></i>
										<ul className="dropdown__menu">
											<div className="dropdown__menu-header">
												<div className="d-flex flex-column">
													<span>Usuario:</span><strong>C&amp;R</strong>
												</div>
											</div>
											<li className="dropdown__menu-item">
												<i className="icon-coins"></i>Billetera
											</li>
											<li className="dropdown__menu-item">
												<i className="icon-trophy"></i>Club VIP
											</li>
											<a rel="" href="/es/transacciones">
												<li className="dropdown__menu-item">
													<i className="icon-list"></i>Transacciones
												</li>
											</a>
											<a rel="" href="/es/transacciones/apuestas">
												<li className="dropdown__menu-item"><i className="icon-betslip"></i>Mis apuestas</li>
											</a>
											<a rel="" href="/es/configuracion/general">
												<li className="dropdown__menu-item"><i className="icon-settings"></i>Configuración</li>
											</a>
											<a rel="" href="/es/configuracion/verificarcuenta">
												<li className="dropdown__menu-item"><i className="icon-list"></i>Verificación</li>
											</a>
											<a rel="" href="/es/juego-responsable">
												<li className="dropdown__menu-item">
													<i className="icon-vpn-2"></i>Juego Responsable
												</li>
											</a>
											<a rel="" href="/es/bonos">
												<li className="dropdown__menu-item">
													<i className="icon-provider-new"></i>Bonificaciones
												</li>
											</a>
											<li className="dropdown__menu-item"><i className="icon-chat"></i>Chat</li>
											<li className="dropdown__menu-item"><i className="icon-exit"></i>Cerrar sesión</li>
										</ul>
									</div>
								</div>
								<div className="SidebarIcon-sc-y83qv hZlZQL"><i className="icon-chat"></i></div>
							</div>
						)}
					</div>
				</div>
			</header>
		</div >
	)
}

export default Header;
