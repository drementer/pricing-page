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
let secilen_dil;
translate_butonlar.forEach((buton) => {
	buton.addEventListener("click", () => {

		// Tıklanan butonun `data-dil` attr'si alınıyor
		secilen_dil = buton.dataset.dil;

		// Tüm aktif butonlar kapatılıyor
		translate_butonlar.forEach((buton) => { 
			buton.classList.remove("translate__buton--aktif");
		});

		// `data-dil` attr'si eşleşen tüm butonlar aktif ediliyor
		doc.querySelectorAll(`[data-dil=${secilen_dil}]`).forEach((buton) => {
			buton.classList.add("translate__buton--aktif");
		});
	});
});
/* Translate Buton SON */

/* Header */
const header = doc.querySelector(".header");
const header_kontrol = () => {
	if (window.scrollY > 0) {
		header.classList.add("header--aktif");
	} else {
		header.classList.remove("header--aktif");
	}
};

// Sayfa yüklendiğinde
header_kontrol();

// Scroll Event
window.addEventListener("scroll", () => {
	header_kontrol();
});
/* Header SON */

/* Mobil Nav */
const mobil_nav = doc.querySelector(".mobil-nav");
const mobil_nav__ac_tus = doc.querySelector(".mobil-nav__ac-tus");
const mobil_nav__kapat_tus = doc.querySelector(".mobil-nav__kapat-tus");

mobil_nav__ac_tus.addEventListener("click", () => {
	mobil_nav.setAttribute("acik", "");
	scroll_kapat();
});

mobil_nav__kapat_tus.addEventListener("click", () => {
	mobil_nav.removeAttribute("acik", "");
	scroll_ac();
});
/* Mobil Nav SON */
