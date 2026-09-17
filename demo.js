/*
 * Демо-панель для показа заказчику: прямо на живом меню переключает
 * тему и стиль кнопок. Подключается только по ссылке с «?demo» в конце,
 * обычные гости её не видят. Когда оформление утвердят, файл можно удалить.
 */
(function () {
	"use strict";

	const root = document.documentElement;
	const KEY = "sushi-mushi-interior-";
	const write = (key, value) => { try { localStorage.setItem(KEY + key, JSON.stringify(value)); } catch (e) { /* без сохранения */ } };

	const GROUPS = [
		{
			id: "theme", title: "Тема", options: [
				{ id: "day", name: "День" },
				{ id: "night", name: "Вечер в зале" },
				{ id: "lacquer", name: "Чёрный лак" },
				{ id: "veranda", name: "Ночь на веранде" },
			],
		},
		{
			id: "buttons", title: "Кнопки", options: [
				{ id: "black", name: "Чёрные" },
				{ id: "wood", name: "Деревянные" },
				{ id: "outline", name: "Контурные" },
			],
		},
	];

	const panel = document.createElement("aside");
	panel.className = "demo";
	panel.innerHTML = `
		<div class="demo-head">
			<b>Демо-панель</b>
			<span>видна только по этой ссылке</span>
			<button type="button" class="demo-hide">Скрыть</button>
		</div>
		${GROUPS.map((group) => `
			<div class="demo-row" data-group="${group.id}">
				<span class="demo-label">${group.title}</span>
				<div class="demo-chips">
					${group.options.map((o) => `<button type="button" data-value="${o.id}">${o.name}</button>`).join("")}
				</div>
			</div>`).join("")}`;
	document.body.appendChild(panel);

	const showBtn = document.createElement("button");
	showBtn.type = "button";
	showBtn.className = "demo-show";
	showBtn.textContent = "Демо";
	showBtn.hidden = true;
	document.body.appendChild(showBtn);

	const current = (group) => (group === "theme"
		? (window.SUSHI_UI ? window.SUSHI_UI.getTheme() : root.dataset.theme || "day")
		: root.dataset.buttons || "black");

	function mark() {
		panel.querySelectorAll(".demo-row").forEach((row) => {
			const value = current(row.dataset.group);
			row.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.value === value)));
		});
	}

	function apply(group, value) {
		if (group === "theme") {
			if (window.SUSHI_UI) window.SUSHI_UI.setTheme(value);
		} else {
			if (value === "black") delete root.dataset.buttons; else root.dataset.buttons = value;
			write("buttons", value);
		}
		mark();
	}

	panel.addEventListener("click", (event) => {
		const chip = event.target.closest("[data-value]");
		if (chip) { apply(chip.closest(".demo-row").dataset.group, chip.dataset.value); return; }
		if (event.target.closest(".demo-hide")) {
			root.dataset.demo = "hidden";
			panel.hidden = true;
			showBtn.hidden = false;
		}
	});

	showBtn.addEventListener("click", () => {
		root.dataset.demo = "on";
		panel.hidden = false;
		showBtn.hidden = true;
	});

	// тему можно переключить и кнопкой в шапке — следим, чтобы подсветка не врала
	new MutationObserver(mark).observe(root, { attributes: true, attributeFilter: ["data-theme", "data-buttons"] });

	root.dataset.demo = "on";
	mark();
})();
