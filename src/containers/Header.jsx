import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AppWrap, MotionWrap } from "../wrapper";
import manuel from "../assets/manuel.jpg";
import uk from "../assets/united-kingdom.png";
import fr from "../assets/france.png";
import { useState } from "react";
const Header = () => {
	const [lang, setLang] = useState("fr");
	const { t, i18n } = useTranslation();
	const changeLanguage = (value) => {
		if (lang === "en") {
			i18n.changeLanguage("fr").then(setLang("fr"));
		} else {
			i18n.changeLanguage("en").then(setLang("en"));
		}
	};
	return (
		<header>
			<div className="headerBox">
				<div className="leftBox">
					<img src={manuel} alt="" />
				</div>
				<div className="rightBox">
					{lang === "en" ? (
						<div className="lang" onClick={changeLanguage}>
							<img src={fr} alt="French flag" />
							Français
						</div>
					) : (
						<div className="lang" onClick={changeLanguage}>
							<img src={uk} alt="English flag" />
							<p>English</p>
						</div>
					)}

					<h1>{t("h1")}</h1>
					<div className="rightBoxContainer">
						<p>
							{t("headerText")}
							<br />
							{t("headerText1")}
							<br />
							{t("headerText2")}
						</p>
						{lang === "en" ? (
							<a href="https://drive.google.com/file/d/1tNVY6HE4ID1_U0SxJ4fLvXrQ1YpI92oQ/view?usp=sharing">
								{t("headerBtn")}
							</a>
						) : (
							<a href="https://drive.google.com/file/d/1_CY4_-iDRYaDP0F0EnJkK0e78UVI5Cq9/view?usp=sharing">
								{t("headerBtn")}
							</a>
						)}
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
