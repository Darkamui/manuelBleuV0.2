import React from "react";
import { AppWrap, MotionWrap } from "../wrapper";
import manuel from "../assets/manuel.jpg";
import sexpist from "../assets/sexpist.jpg";
const About = () => {
	return (
		<main className="aboutSection">
			<div className="aboutBox">
				<div className="leftAbout">
					<h2>Raphaël Jerusalmy</h2>
					<p>
						Diplômé de l’Ecole Normale Supérieure et de la Sorbonne (Paris IV),
						Raphaël Jerusalmy a fait carrière au sein des services de
						renseignements militaires de Tsahal avant de mener des actions
						humanitaires puis éducatives.
						<br />
						<br />
						Il est aujourd’hui écrivain, auteur de plusieurs romans publiés chez
						Acte Sud.
						<br />
						<br />
						Il est également expert sur la chaîne de télévision i24news et
						plusieurs radios.
						<br />
						<br />
						Son dernier livre paru (autobiographique) s’intitule ‘Des Sex
						Pistols à l’Intifada’, aux éditions Balland.
					</p>
					<img src={sexpist} alt="" />
				</div>
				<div className="rightAbout">
					<h2>Aidez nous à partager!</h2>
					<p>
						Participez à la diffusion du Manuel bleu auprès du public juif
						(synagogues, mouvements de jeunesse, institutions…) aussi bien que
						non-juif (étudiants, décideurs, journalistes). Offrez-le à vos amis
						et à vos proches.
						<br />
						<br />A commander chez votre libraire ou à la maison d’édition.
					</p>
					<h2>Contact</h2>
					<p>
						Par courrier : David Reinharc éditions, 19 rue de Miromesnil, 75008
						– Paris.
						<br />
						<br />
						Par mail :{" "}
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
