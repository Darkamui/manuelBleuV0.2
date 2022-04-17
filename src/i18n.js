import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
	en: {
		translation: {
			"Welcome to React": "Welcome to React and react-i18next",
			h1: "The Blue Manual Against Antisemitism and Disinformation",
			headerText:
				"Facing disinformation and constant attacks targeting the Jewish people, it is essential today to defend the democracy we live in.",
			headerText1:
				"In order to fight against hatred and discrimination, you just need to know some truths that we offer you here.",
			headerText2:
				"Knowing better, understanding better in order to better defend justice and truth, such is the principle of this brochure.",
			headerBtn: "Click here to read or print the Blue Manual",
			aboutText:
				"Having graduated from the 'École Normale Supérieure' and the Sorbonne (Paris IV), Raphael pursued a military career in the intelligence services of the IDF (Israel Defence Forces), and participated in humanitarian and educational operations.",
			aboutText1:
				"Currently a writer, Raphael Jerusalmy is the author of many novels published by Actes Sud (France), and translated in various languages.",
			aboutText2:
				"Raphael is also a security analyst for the i24News channel. ",
			aboutText3:
				"His latest book (novel) is titled 'In Absentia' and is published by Actes Sud.",
			h2: "Help us share !",
			shareText:
				"Take part in the distribution of the Blue Manual amongst the Jewish public (synagogues, youth movements, establishments...) as well as the non-Jewish public (students, journalists...). Offer it to your family and friends.",
			shareText1: "Order at your library or through the publisher.",
			contact:
				"By post : David Reinharc éditions, 19 rue de Miromesnil, 75008 – Paris.",
			contact1: "By mail : ",
			institut:
				"For establishments and institutions, it is possible to order 'personalised' copies, with your logo and a preface from your director (at a reduced price). Contact the publisher.",
		},
	},
	fr: {
		translation: {
			h1: "Manuel Bleu contre l'antisémitisme et la désinformation",
			"Welcome to React": "Bienvenue à React et react-i18next",
			headerText:
				"Face à la désinformation et aux attaques constantes dont le peuple juif est la cible, il est impératif de parler et réagir.",
			headerText1:
				"Pour faire valoir vos droits, encore faut-il les connaître.",
			headerText2:
				"Mieux savoir, mieux comprendre, pour mieux se défendre. Tel est le principe de cette brochure.",
			headerBtn: "Cliquez ici pour lire ou imprimer le Manuel Bleu",
			aboutText:
				"Diplômé de l’Ecole Normale Supérieure et de la Sorbonne (Paris IV), Raphaël Jerusalmy a fait carrière au sein des services de renseignements militaires de Tsahal avant de mener des actions humanitaires puis éducatives.",
			aboutText1:
				"Il est aujourd’hui écrivain, auteur de plusieurs romans publiés chez Acte Sud.",
			aboutText2:
				"Il est également expert sur la chaîne de télévision i24news et plusieurs radios.",
			aboutText3:
				"Son dernier livre paru (roman) s'intitule 'In Absentia', aux éditions Actes Sud",
			h2: "Aidez nous à partager!",
			shareText:
				"Participez à la diffusion du Manuel bleu auprès du public juif (synagogues, mouvements de jeunesse, institutions…) aussi bien que non-juif (étudiants, décideurs, journalistes). Offrez-le à vos amis et à vos proches.",
			shareText1: "A commander chez votre libraire ou à la maison d’édition.",
			contact:
				"Par courrier : David Reinharc éditions, 19 rue de Miromesnil, 75008 – Paris.",
			contact1: "Par courriel : ",
			institut:
				"Concernant les Associations ou les Institutions, il est possible de commander des exemplaires “personnalisés”, avec le logo de l’Institution et une préface de son Président (à un prix réduit). S’adresser à la maison d’édition.",
		},
	},
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
		// you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
		// if you're using a language detector, do not define the lng option

		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
