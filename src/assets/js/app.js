// İmportlar
import { scroll_ac, scroll_kapat, log, doc, body } from "./scripts/_utils.js";

/* Textarea */
const ta_hizala = (element) => {
	element.style.height = "auto";
	element.style.height = element.scrollHeight + "px";
};

const textarealar = doc.querySelectorAll("textarea");

textarealar.forEach((textarea) => {
	// Değer girildiğinde
	textarea.addEventListener("input", () => {
		ta_hizala(textarea);

		// İçeriği silindiğinde
		if (element.value == undefined || element.value == "") {
			element.style.height = "88px";
		}
	});

	// Element yüklendiğinde
	textarea.onload = ta_hizala(textarea);
});
/* Textarea SON */

/* Dil Değiştir Buton */
const dil_butonlar = doc.querySelectorAll(".dil__buton");
let aktif_dil_buton;
dil_butonlar.forEach((buton) => {
	buton.addEventListener("click", () => {
		aktif_dil_buton = doc.querySelector(".dil__buton--aktif");
		aktif_dil_buton.classList.remove("dil__buton--aktif");

		buton.classList.add("dil__buton--aktif");
	});
});
/* Dil Değiştir Buton SON */
