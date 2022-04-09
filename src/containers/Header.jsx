import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AppWrap, MotionWrap } from "../wrapper";
import manuel from "../assets/manuel.jpg";
const Header = () => {
	const { t, i18n } = useTranslation();
	const changeLanguage = (value) => {
		value = "fr";
		i18n.changeLanguage("fr");
	};

	return (
		<header>
			<div className="headerBox">
				<div className="leftBox">
					<img src={manuel} alt="" />
				</div>
				<div className="rightBox">
					<h1 onClick={changeLanguage}>{t("Welcome to React")}</h1>
					<h1>Manuel Bleu contre l'antisémitisme et la désinformation</h1>
					<div className="rightBoxContainer">
						<p>
							Face à la désinformation et aux attaques constantes dont le peuple
							juif est la cible, il est impératif de parler et réagir.
							<br />
							Pour faire valoir vos droits, encore faut-il les connaître.
							<br />
							Mieux savoir, mieux comprendre, pour mieux se défendre. Tel est le
							principe de cette brochure.
						</p>
						<a href="https://drive.google.com/file/d/1_CY4_-iDRYaDP0F0EnJkK0e78UVI5Cq9/view?usp=sharing">
							Cliquez pour lire/imprimer le Manuel Bleu
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default AppWrap(
	MotionWrap(Header, "app__about"),
	"home",
	"app__headerbg"
);
