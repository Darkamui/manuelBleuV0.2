import React from "react";
import { AppWrap, MotionWrap } from "../wrapper";
import sexpist from "../assets/sexpist.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
	const { t } = useTranslation();

	return (
		<main className="aboutSection">
			<div className="aboutBox">
				<div className="leftAbout">
					<h2>Raphaël Jerusalmy</h2>
					<p>
						{t("aboutText")}
						<br />
						<br />
						{t("aboutText1")}

						<br />
						<br />
						{t("aboutText2")}

						<br />
						<br />
						{t("aboutText3")}
					</p>
					<img src={sexpist} alt="" />
				</div>
				<div className="rightAbout">
					<h2>{t("h2")}</h2>
					<p>
						{t("shareText")}
						<br />
						<br />
						{t("shareText1")}
						<br />
						<br />
						{t("institut")}
					</p>
					<h2>Contact</h2>
					<p>
						{t("contact")}

						<br />
						<br />
						{t("contact1")}

						<a href="mailto:david.reinharc@gmail.com">
							david.reinharc@gmail.com
						</a>
					</p>
				</div>
			</div>
		</main>
	);
};

export default AppWrap(
	MotionWrap(About, "app__about"),
	"about",
	"app__second-bg"
);
