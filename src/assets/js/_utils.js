const doc = document,
	body = doc.body;

const scroll_kapat = () => {
		doc.querySelector("body").style.overflowY = "hidden";
	},
	scroll_ac = () => {
		doc.querySelector("body").style.overflowY = "auto";
	};

const log = console.log.bind(doc);

export { doc, body, scroll_ac, scroll_kapat, log };
