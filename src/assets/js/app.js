// İmportlar
import { scroll_ac, scroll_kapat, log, doc, body } from "./_utils.js";

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

/* Translate Buton */
const translate_butonlar = doc.querySelectorAll(".translate__buton");
let aktif_translate_buton;
translate_butonlar.forEach((buton) => {
	buton.addEventListener("click", () => {
		aktif_translate_buton = doc.querySelector(".translate__buton--aktif");
		aktif_translate_buton.classList.remove("translate__buton--aktif");

		buton.classList.add("translate__buton--aktif");
	});
});
/* Translate Buton SON */
