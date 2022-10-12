import React from 'react';
import "./navbar.css";
//import styles from "./Modal.module.css";

const Navbar = () => {
	return (
		<div>
			<div className="container">
				<Logo />
				<Search />
				<Login />
				<Cart />
			</div>
			<div className="container">
				<a href="www.f1merch.com/?producto=camperas">Camperas</a>
				<a href="www.f1merch.com/?producto=buzos">Buzos</a>
				<a href="www.f1merch.com/?producto=caps">Caps</a>
				<a href="www.f1merch.com/?producto=posters">Posters</a>
			</div>
		</div>
	);
}
const Cart = () => {
	return (
		<div>
			<button type="button">
				<img src={require("./shopping-cart.png")} alt=" " />
			</button>
		</div>
	);
}

const ItemListContainer = (props) => {
	return (
		<div className="welcome">
			Bienvenido &nbsp;
			{props.greetings}
		</div>
	)
}

const Login = () => {
	return (
		<div>
			<button type="button">
				<img src={require("./login.png")} alt=" " />
			</button>
			
		</div>
	);
}
const Logo = () => {
	return (
		<div className="wrapper">
			<a href="www.f1merch.com/index.html">
			<img src={require("./racing-flag.png")} alt="checkered flag" />
			F1Merch.com
			<img src={require("./racing-flag.png")} alt="checkered flag" />
		</a>
		</div>
		
	);
}
const Search = () => {
	return (
		<div className="wrapper">
			<label form="search"></label>
			<button className="search" id="search">
				TODOS
			</button>
			<input type="text" id="search" name="search" size="60"></input>
			<button type="button">
				<img src={require("./loupe.png")} alt=" " />
			</button>
		</div>
	)
}
/*const Modal = ({ setIsOpen }) => {
	return (
		<>
			<div className={styles.darkBG} onClick={() => setIsOpen(false)} />
			<div className={styles.centered}>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<h5 className={styles.heading}>Login</h5>
					</div>

					<div className={styles.modalContent}>
						<div className={styles.modalActions}>
							<div className={styles.actionsContainer}>
								<form autoComplete="off">
									<div className="inputFields">
										<label>Email:&nbsp;</label>
										<input id="inputEmail" type="text" />
									</div>
									<div className="inputFields">
										<label>Contraseña:&nbsp;</label>

										<input id="inputPassword" type="password" />
									</div>
									<div className="buttonPanel">
										<button
											className={styles.deleteBtn}
											type="submit"
											onClick={() => setIsOpen(false)}
										>
											Login
										</button>
										<button
											className={styles.cancelBtn}
											onClick={() => setIsOpen(false)}
										>
											Cancel
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};*/





























































	














export {ItemListContainer,Navbar,Login,Search,Logo}







